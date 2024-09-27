import {
  GoogleMap,
  DrawingManager,
  Marker,
  InfoWindow,
  MarkerClusterer,
  KmlLayer,
} from '@react-google-maps/api'
import React, {useCallback, useEffect, useState} from 'react'
import {Modal, Spinner} from 'react-bootstrap'
//   import BeneMapFiltterDrawer from './Drawer'
import {toast} from 'react-toastify'
import axios from 'axios'
import data from '../../../_metronic/json_data/Map_Data.json'
// import data from '../../../../_metronic/json_data/Map_Data.json'

import InfoCard from './InfoCard'
import {config} from '../../../configs/firebaseConfig'
import {useAuth} from '../../modules/auth'
import {BASE_URL} from '../../url'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'

const {db} = config

const mapContainerStyle = {
  height: '600px',
  width: 'inherit',
}

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15,
}
let map = window.google.maps

const MapViewList = ({supData = [], totalRecord, latLng, isMapLoading}) => {
  const {program, currentUser} = useAuth()
  const [isFilter, setIsFilter] = useState(false)
  const [isInfoWindow, setIsInfoWindow] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState(program)
  const [bounds, setBounds] = useState({})
  const [mkrItem, setMkrItem] = useState({})
  const [filterData, setFilterData] = useState([])
  const [search, setSearch] = useState()
  const [counter, setCounter] = useState(0)
  const [duplicateData, setDuplicateData] = useState([])
  const [selectedBen, setSelectedBen] = useState([])
  const [benModal, setBenModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [entriesPerPage, setEntriesPerPage] = useState(-1)
  const [refresh, setRefresh] = useState(false)
  const [cData, setCData] = useState([])
  const [professionList, setProfessionList] = useState([])
  const [selectedProfession, setSelectedProfession] = useState(null)
  // this State will be removing if dont need   Starting Point
  const [filteredData, setFilteredData] = useState([])
  const [benPrgmData, setBenPrgmData] = useState([])
  const [loading, setLoading] = useState(false)
  const [isClear, setIsClear] = useState(false)
  const [show, setShow] = useState(false)
  const [selectedUrl, setSelectedUrl] = useState('')
  const [selectText, setSelectText] = useState('')
  const [type, setType] = useState('')

  // Ending Point
  const [state, setState] = React.useState({
    first_name: '',
    email: '',
    serial_no: '',
    gender: '',
    amount: '',
    dateFrom: '',
    dateTo: '',
    fromDate: '',
    toDate: '',
    eduFrom: '',
    eduTo: '',
    paymentStatus: '',
    status: '',
    with_request: '',
    type: '',
    b_id: '',
    d_id: '',
    s_id: '',
    donorEmail: '',
    country: selectedProgram?.location?.country,
    state: '',
    city: '',
    professions: '',
    benEmail: '',
    supEmail: '',
    zip_code: '',
    sectors: [],
    causes: [],
  })

  // add Value in Object in Stringify form

  const dataObject = {}
  for (const key in state) {
    if (state[key]) {
      dataObject[key] = state[key]
    }
  }

  const dataString = JSON.stringify(dataObject)
  const [filters, setFilters] = useState({})

  const handleChange = (evt) => {
    const value = evt.target.value
    if (evt.target.name === 'fromAge') {
      let d = new Date()
      let pastYear = d.getFullYear() - parseInt(value)
      d.setFullYear(pastYear)
      let date = d.toLocaleDateString()

      setState({
        ...state,
        // [evt.target.name]: value,
        fromDate: value.length > 0 ? date : null,
      })
      return
    }
    if (evt.target.name === 'toAge') {
      let d = new Date()
      let pastYear = d.getFullYear() - parseInt(value)
      d.setFullYear(pastYear)
      let date = d.toLocaleDateString()
      setState({
        ...state,
        // [evt.target.name]: value,
        toDate: value.length > 0 ? date : null,
      })
      return
    }
    setState({
      ...state,
      [evt.target.name]: value,
    })
  }

  // useEffect(() => {
  //   setIsMapLoading(true)
  //   const full_data = currentUser.programs.find((item) => item._id === program._id)
  //   setSelectedProgram(full_data)
  //   setState({...state, country: full_data.location.country})
  //   const country = full_data?.location?.country
  //   const geocoder = new map.Geocoder()
  //   let lat_lng = {lat: -34.397, lng: 150.644}
  //   geocoder.geocode({address: country}, function (results, status) {
  //     if (status === 'OK') {
  //       lat_lng['lat'] = results[0].geometry.location.lat()
  //       lat_lng['lng'] = results[0].geometry.location.lng()

  //       setLatLng(lat_lng)
  //       setBounds(results[0].geometry.bounds)
  //       setIsMapLoading(false)
  //     }
  //   })
  //   return
  // }, [])

  useEffect(() => {}, [filterData])

  const handleMarkerClick = (mkr, mkrType) => {
    setMkrItem(mkr)
    setIsInfoWindow(true)
    setType(mkrType)
  }

  const handleClearFilter = (key) => {
    if (key === 'all') {
      setState({
        first_name: '',
        email: '',
        serial_no: '',
        gender: '',
        amount: '',
        dateFrom: '',
        dateTo: '',
        eduFrom: '',
        eduTo: '',
        fromDate: '',
        toDate: '',
        paymentStatus: '',
        status: '',
        with_request: '',
        type: '',
        b_id: '',
        d_id: '',
        s_id: '',
        donorEmail: '',
        country: selectedProgram?.location?.country,
        state: '',
        city: '',
        professions: '',
        benEmail: '',
        supEmail: '',
        zip_code: '',
        sectors: [],
        cause: [],
      })
      setFilters({country: selectedProgram?.location?.country})
      return
    }

    let fDate = state.fromDate
    let tDate = state.toDate
    let fAge = state.fromAge
    let tAge = state.toAge
    if (key === 'fromAge' && state.toAge) {
      fDate = '' // if fromAge is clear then also clear fromDate
      tDate = ''
      fAge = '' // if fromAge is clear then also clear fromDate
      tAge = '' // if fromAge is clear then also clear fromDate
    }
    if (key === 'fromAge') {
      fDate = ''
      fAge = ''
    }
    if (key === 'toAge') {
      tDate = ''
      tAge = ''
    }
    const newState = {
      ...state,
      [key]: '',
      fromDate: fDate,
      toDate: tDate,
      toAge: tAge,
      fromAge: fAge,
    }
    const newFilter = {...filters, [key]: '', fromDate: fDate, toDate: tDate}

    setState(newState)
    setFilters(newFilter)

    // handleFilterData(newState, newFilter)
  }

  const showFilters = () => {
    const obj = {...state}
    const keys = Object.keys(obj)

    return keys.map((key, index) => {
      return obj[key] !== '' && obj[key].length !== 0 ? (
        <span key={index} className='badge badge-secondary ' style={{marginRight: '5px'}}>
          {obj[key]}{' '}
          <span onClick={() => (key === 'country' ? '' : handleClearFilter(key))}>
            <KTSVG
              path='/media/icons/duotune/general/gen040.svg'
              className='svg-icon-2 svg-icon-danger  ml-2'
            />
          </span>
        </span>
      ) : null
    })
  }

  const handleSelectAll = () => {
    let array = [...filteredData]
    setSelectedBen(array)
    setCounter(array.length)
  }

  const handleSearchInput = (text) => {
    const searchText = text
    if (!searchText) {
      setDuplicateData([])
      return [...selectedBen]
    } else {
      let array = [...selectedBen]
      if (searchText) {
        let arr = array.filter((value) =>
          value?.email?.toLowerCase().includes(searchText.toLowerCase())
        )
        setDuplicateData(arr)
      }
    }
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    handleSearchInput(e.target.value)
  }
  const handleClose = () => {
    setBenModal(false)
    setSelectedBen([])
    setCounter(0)
  }
  const handleOpen = () => {
    setBenModal(true)
  }

  const SelectUrl = (key) => {
    const matchingItem = data.find((item) => item.key === key)
    if (matchingItem) {
      setSelectedUrl(matchingItem.value)
      setSelectText(matchingItem.key)
      setShow(true)
    }
  }

  const handleClick = () => {
    setSelectedUrl('')
    setSelectText('')
    setShow(false)
  }

  return (
    <div style={{position: 'relative'}}>
      {!isMapLoading && (
        <>
          <div className='w-100 d-flex flex-wrap flex-stack'>
            {/* <div style={{position: 'absolute', zIndex: 22, bottom: '40px', left: '45px'}}>
              <div className='bg-white rounded-circle p-3'>
                <span
                  className='fw-bold text-black'
                  style={{color: '#FF0000'}}
                >{`Total Record : ${totalRecord}`}</span>
              </div>
            </div> */}

            <div className='d-flex flex-wrap justify-content-start'></div>

            {/* <div className='d-flex flex-wrap justify-content-end my-2'>
          {show ? (
            <button
              type='button'
              className='btn btn-sm btn-flex bg-danger text-white fw-semibold ms-2 mx-2'
              onClick={handleClick}
            >
              Clear {selectText}
            </button>
          ) : null}

          <div className='text-center mx-2'>
            <select
              className='form-select form-control-sm py-4'
              name='selectText'
              aria-label='Select Map Type'
              data-control='select2'
              data-placeholder='Select Map Type'
              value={selectText}
              onChange={(event) => SelectUrl(event.target.value)}
            >
              <option value=''>Select Districts</option>
              <option value='Badakhshan'>Badakhshan Map</option>
              <option value='Badghis'>Badghis Map</option>
              <option value='Balkh'>Balkh Map</option>
              <option value='Kunduz'>Kunduz Map</option>
              <option value='Takhar'>Takhar Map</option>
              <option value='Northern'>Northern_Water</option>
            </select>
          </div>

          <div className='text-center mx-2'>
            <select
              className='form-select form-control-sm py-4'
              name='selectText'
              aria-label='Select Map Type'
              data-control='select2'
              data-placeholder='Select Map Type'
              value={selectText}
              onChange={(event) => SelectUrl(event.target.value)}
            >
              <option value=''>Select Map Type</option>
              <option value='Districts'>Districts Map</option>
              <option value='Provinces'>Provinces Map</option>
              <option value='Boundaries'>Boundaries Map</option>
            </select>
          </div>

          {selectedBen.length > 0 ? (
            <span
              className='badge badge-secondary '
              style={{marginRight: '5px'}}
              onClick={() => handleOpen()}
            >
              <span className='mx-2 '>Selected Beneficiaries</span>
              <span className='badge badge-sm badge-circle badge-success mx-1'>
                {selectedBen.length}
              </span>
            </span>
          ) : (
            ''
          )}
          {filteredData.length > 0 ? (
            <button
              type='button'
              className='btn btn-secondary btn-sm mx-2'
              onClick={() => handleSelectAll()}
            >
              Select All
            </button>
          ) : (
            ''
          )}
        </div> */}
          </div>
        </>
      )}

      {!!filteredData.length && <div className='d-flex flex-wrap'>{showFilters()}</div>}

      <div className='mt-2 d-md-flex flex-row flex-wrap'>
        <div className='' style={{flex: '1'}}>
          {isMapLoading ? (
            <div
              className='card-body d-flex flex-row align-items-center justify-content-center px-9 pt-6 pb-8'
              style={{height: '120px'}}
            >
              <Spinner animation='grow' variant='primary' />
              <Spinner animation='grow' variant='secondary' />
              <Spinner animation='grow' variant='success' />
            </div>
          ) : (
            latLng?.lat && (
              <GoogleMap
                id='drawing-manager-example'
                mapContainerStyle={mapContainerStyle}
                zoom={5.5}
                center={latLng}
                options={{
                  mapTypeId: map.MapTypeId.HYBRID,
                  labels: true,
                  // restriction: {
                  //   latLngBounds: bounds,
                  //   strictBounds: true,
                  // },
                }}
              >
                <div style={{position: 'absolute', top: '11px', left: '185px', padding: '0px'}}>
                  <button
                    className='btn btn-sm btn-flex bg-body btn-color-gray-700 btn-active-color-primary fw-semibold gap-3 align-items-center'
                    style={{borderRadius: 0, height: '39px'}}
                  >
                    <img src={toAbsoluteUrl('/media/svg/shapes/marker.svg')} alt='img' />
                    Suppliers ({supData.length})
                  </button>
                </div>
                {show && <KmlLayer url={selectedUrl} />}

                {!!supData?.length && (
                  <MarkerClusterer
                    gridSize={240} // Adjust this value based on your desired clustering density
                    averageCenter
                    enableRetinaIcons
                    minimumClusterSize={2}
                    styles={[
                      {
                        url: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m3.png',
                        textColor: '#FFFFFF',
                        textSize: 14,
                        backgroundPosition: '0 0',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: 'blue',
                        width: 48,
                        height: 48,
                      },
                    ]}
                  >
                    {(clusterer) =>
                      supData?.map((item, i) => {
                        if (item?.latitude !== '' && item?.longitude !== '') {
                          return (
                            <Marker
                              icon={{
                                url: toAbsoluteUrl('/media/svg/shapes/marker.svg'),
                                size: new window.google.maps.Size(45, 45),
                              }}
                              key={i}
                              position={{
                                lat: parseInt(item?.latitude),
                                lng: parseInt(item?.longitude),
                              }}
                              clusterer={clusterer}
                              onClick={() => handleMarkerClick(item, 'suppliers')}
                            />
                          )
                        }
                        return null
                      })
                    }
                  </MarkerClusterer>
                )}
                {type === 'suppliers' && isInfoWindow && (
                  <InfoWindow
                    // onLoad={onLoad}
                    onCloseClick={() => {
                      setIsInfoWindow(false)
                      setMkrItem({})
                    }}
                    position={{
                      lat: parseInt(mkrItem.latitude),
                      lng: parseInt(mkrItem.longitude),
                    }}
                  >
                    <InfoCard item={mkrItem} handleAddItem={() => {}} />
                  </InfoWindow>
                )}
              </GoogleMap>
            )
          )}
        </div>
      </div>
      {/* <BeneMapFiltterDrawer
          handleChange={handleChange}
          cData={cData}
          cause={state.causes}
          handleCauses={handleCauses}
          handleSelectors={handleSelectors}
          handleProfession={handleProfession}
          getFilterData={handleSubmitFilter}
          filter={isFilter}
          state={state}
          professionList={professionList}
        /> */}
    </div>
  )
}
export default React.memo(MapViewList)
