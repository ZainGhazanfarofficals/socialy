import React from 'react';

// Local imports
import "./network.scss";
import NetworkLeft from './left/NetworkLeft';
import NetworkRight from './right/NetworkRight';
// import router outlet from react router dom
import {Outlet} from "react-router-dom";

function Network() {
  return (
    <div className='network'>
      <div className="network-left">
        <NetworkLeft/>
      </div>
      <div className="network-right">
        {/* <NetworkRight/> */}
        <Outlet/>
      </div>
    </div>
  )
}

export default Network
