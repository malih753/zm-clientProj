import React, {useEffect, useState} from 'react'
import MapViewList from './MapViewList'
import {GetSuppliers} from '../../api_functions'
import {useAuth} from '../../modules/auth'
import OffcanvusDrawer from '../../../_metronic/helpers/OffcanvusDrawer'
import SupplierDrrawer from '../../../_metronic/helpers/suppliersDrawer'
import {KTSVG} from '../../../_metronic/helpers'

function VeiwSupplier() {
  const {organization} = useAuth()
  const [supplierData, setSupplierData] = useState([])
  const [latLng, setLatLng] = useState(null)
  const [isMapLoading, setIsMapLoading] = useState(false)
  const [totalRecord, setTotalRecord] = useState(0)
  const [showDrawer, setShowDrawer] = useState(false)
  const [isFilter, setIsFilter] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [isClear, setIsClear] = useState(false)
  const [state, setState] = React.useState({
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    country: '',
    state: '',
    city: '',
    zip_code: '',
    range: [
      {
        greaterThanEqualTo: null,
        lessThanEqualTo: null,
        name: 'date_of_birth',
      },
    ],
  })
  console.log('latLng', latLng)
  console.log('supplierData', supplierData)

  useEffect(() => {
    getSupData()
  }, [refresh])

  useEffect(() => {
    if (organization?.latitude && organization?.longitude) {
      setLatLng({lat: organization.latitude, lng: organization.longitude})
    } else {
      // Set default lat/lng for Kabul, Afghanistan
      setLatLng({lat: 34.5553, lng: 69.2075})
    }
  }, [organization])

  const getSupData = async () => {
    setIsMapLoading(true)
    let obj = {}
    for (const key in state) {
      if (key === 'range') {
        state[key].forEach((el) => {
          if (el.lessThanEqualTo !== null || el.greaterThanEqualTo !== null) {
            obj[key] = state[key]
          }
        })
      } else if (state[key] !== '' && (Array.isArray(state[key]) ? state[key].length > 0 : true)) {
        obj[key] = state[key]
      }
    }
    const filter_data = JSON.stringify({
      filters: {
        ...obj,
      },
    })

    const response = await GetSuppliers(filter_data)
    // Filter suppliers that have both latitude and longitude
    const filteredSuppliers = response?.data?.filter((item) => item?.latitude && item?.longitude)
    setShowDrawer(false)
    setIsMapLoading(false)
    setSupplierData(filteredSuppliers)
    setTotalRecord(response.totalRecords)
  }

  const handleChange = async (evt) => {
    const value = evt.target.value
    setState({
      ...state,
      [evt.target.name]: value,
    })
  }

  const handleSubmitFilter = async () => {
    setRefresh(!refresh)
    setIsClear(true)
    // setLoading(true)
    // setIsFilter(true)
  }
  const handleClear = () => {
    setRefresh(!refresh)
    setIsClear(false)
    setState({
      first_name: '',
      last_name: '',
      email: '',
      gender: '',
      country: '',
      state: '',
      city: '',
      zip_code: '',
      range: [
        {
          greaterThanEqualTo: null,
          lessThanEqualTo: null,
          name: 'date_of_birth',
        },
      ],
    })
  }

  return (
    <>
      <div id='kt_content_container' className='container' style={{position: 'relative'}}>
        <div className='d-flex flex-wrap flex-stack mb-6'>
          <h3 className='fw-semibold my-2'>
            Supplier
            {/* <span className='fs-6 text-gray-400 fw-semibold ms-1'>Active</span> */}
          </h3>
          <div className='d-flex'>
            <ul className='nav nav-pills mb-2 mb-sm-0 align-items-center'>
              {isClear && (
                <li>
                  <button
                    type='button'
                    className='btn btn-sm btn-flex bg-body btn-color-gray-700 btn-active-color-primary fw-semibold mx-4'
                    onClick={() => handleClear()}
                  >
                    <KTSVG path='/media/icons/duotune/general/gen031.svg' className='svg-icon-2' />
                    Clear Filter
                  </button>
                </li>
              )}
              <li>
                <button
                  // disabled={isLoading}
                  type='button'
                  className='btn btn-sm btn-flex bg-body btn-color-gray-700 btn-active-color-primary fw-semibold'
                  onClick={() => setShowDrawer(true)}
                >
                  <KTSVG path='/media/icons/duotune/general/gen031.svg' className='svg-icon-2' />
                  Filter
                </button>
              </li>
            </ul>
          </div>
        </div>

        <MapViewList
          isMapLoading={isMapLoading}
          latLng={latLng}
          supData={supplierData}
          totalRecord={totalRecord}
        />
      </div>
      <OffcanvusDrawer
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        children={
          <SupplierDrrawer
            handleChange={handleChange}
            handleSubmitFilter={handleSubmitFilter}
            filter={isFilter}
            state={state}
          />
        }
      />
    </>
  )
}

export default VeiwSupplier
