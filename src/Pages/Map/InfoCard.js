import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'universal-cookie'
import {useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {Dropdown, Modal} from 'react-bootstrap'
import {KTSVG} from '../../../_metronic/helpers'

function InfoCard({item}) {
  const cookies = new Cookies()
  const location = useLocation()

  const [chatRoomId, setChatRoomId] = useState()
  const [inbox, setInbox] = useState([location?.state])
  const [counter, setCounter] = useState(0)
  const [modal, setModal] = useState(false)
  const [filterData, setFilterData] = useState()
  const [receiver, setReceiver] = useState(location?.state)
  const [isGroup, setIsGroup] = useState(false)
  const [memberStatus, setMemberStatus] = useState([])

  const handleDetails = (item) => {
    if (item.role === 'Beneficiary') {
      cookies.set('state', item?.id, {
        path: '/beneficiaryProfile',
        expires: new Date(Date.now() + 86400000),
      })
    } else if (item.role === 'Supplier') {
      cookies.set('state', item?.id, {
        path: '/supplierProfile',
        expires: new Date(Date.now() + 86400000),
      })
    } else if (item?.role === 'Volunteer') {
      cookies.set('state', item?.id, {
        path: '/volunteerProfile',
        expires: new Date(Date.now() + 86400000),
      })
    }
  }

  const handleCloseModal = () => {
    setModal(!modal)
  }

  return (
    <div className={`card w-200px`}>
      {/* begin::Body */}
      <div className='card-body p-0'>
        {/* begin::Header */}
        <div className='d-flex align-items-center mb-5'>
          {/* begin::User */}
          <div className='d-flex align-items-center flex-grow-1'>
            {/* begin::Avatar */}
            <div className='symbol symbol-45px me-5'>
              <img src={item?.profile_pic} alt={item?.display_name} />
            </div>
            {/* end::Avatar */}

            {/* begin::Info */}
            <div className='d-flex flex-column'>
              <div className='text-gray-800 text-hover-primary fs-6 fw-semibold'>
                {item?.display_name}
              </div>

              <span className='text-gray-400 fw-semibold'>{item?.email}</span>
            </div>
            {/* end::Info */}
          </div>
          {/* end::User */}

          {/* begin::Menu */}
          {/* <div className='my-0'>
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
       
        </div> */}
          {/* end::Menu */}
        </div>
        {/* end::Header */}

        {/* begin::Post */}
        <div className='mb-2'>
          {/* begin::Image */}

          {/* end::Image */}

          {/* begin::Text */}
          <div className='text-gray-800 mb-5'>
            {item?.location?.address_line_one}
            {', '}
            {item?.location?.country}
          </div>
          {/* end::Text */}

          {/* begin::Toolbar */}
          <div className='d-flex align-items-center mb-5'>
            {item?.role === 'Supplier' ? (
              <div className='d-flex'>
                <Link onClick={() => handleDetails(item)} target={'_blank'} to='/supplierProfile'>
                  <div className='btn btn-sm btn-light btn-active-light-success px-2 py-2 me-4 text-center'>
                    <KTSVG
                      path='/media/icons/duotune/files/fil001.svg'
                      className='svg-icon-2 m-0 svg-icon-primary'
                    />
                  </div>
                </Link>
              </div>
            ) : null}
          </div>
          {/* end::Toolbar */}
        </div>
        {/* end::Post */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export default React.memo(InfoCard)
