import React from 'react'

function RecJobsItem() {
  return (
    <div className="recommendation-jobs-item">
        <div className='jobs-item-left'>
            <img src="https://media.licdn.com/dms/image/C4D0BAQFxUdcG-60IrQ/company-logo_100_100/0/1678337758128?e=1688601600&v=beta&t=3K6ZmDZ4soJPC0UVKHuWdoeN091Kbvf43OiES6kVGMQ" alt="" />
        </div>
        <div className='jobs-item-center'>
            <a href="">Jr Nodejs backend developer</a>
            <h5>Turing</h5>
            <p>Hauz Khas, New Delhi</p>
        </div>
        <div className='jobs-item-right'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22zm-3-1a1 1 0 011 1v12.51L12 13l-5 4.51V4z"></path>
            </svg>
        </div>
    </div>
  )
}

export default RecJobsItem
