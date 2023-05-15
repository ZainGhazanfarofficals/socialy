import React from 'react';
import axios from 'axios';

function RightInvitation({invitation}) {
    const user = invitation.sender;
    // console.log(invitation);
    const [isStateChanged,setIsStateChanged] = React.useState(false);
    // Handle accept and ignore
    const handleAccept = () => {
        axios.get(process.env.REACT_APP_API_URL+'api/connection/accept-request/'+invitation._id)
        .then(res => {
            console.log(res);
            setIsStateChanged(true);
        })
        .catch(err => {
            console.log(err);
        });
    }
    const handleIgnore = () => {
        axios.get(process.env.REACT_APP_API_URL+'api/connection/reject-request/'+invitation._id)
        .then(res => {
            console.log(res);
            setIsStateChanged(true);
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <>
        {!isStateChanged && <div className='network-invitations-body-item'>
            <div className='network-invitations-body-item-left'>
                <img src={process.env.REACT_APP_API_URL+user.profileImg} alt="profile"/>
            </div>
            <div className='network-invitations-body-item-center'>
                <h4>{user.name}</h4>
                <p>{user.description}</p>
                <div className='network-organization'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                    <path d="M13 13V2a1 1 0 00-1-1H4a1 1 0 00-1 1v11H2v2h12v-2h-1zm-2 0H9v-2H7v2H5V9h6v4zm0-5H5V6h6v2zm0-3H5V3h6v2z"></path>
                </svg>
                <span>Coding Ninjas</span>
                </div>
            </div>
            <div className='network-invitations-body-item-right'>
                <button className='network-accept-btn' onClick={handleIgnore}>Ignore</button>
                <button className='network-decline-btn' onClick={handleAccept}>Accept</button>
            </div>

        </div>}
        </>
    )
}

export default RightInvitation
