
import React, { useEffect } from 'react';
import "./userConnections.scss";
import axios from 'axios';

function UserConnections() {
    const [connections, setConnections] = React.useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL+'api/connection/all')
        .then(res => {
            console.log(res.data);
            setConnections(res.data.connections);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);
  return (
    <div className="network-right-wrapper">
        <div className='connections'>
            <h2>Connections</h2>
            <div className='connections-body'>
                {connections.map((user, index) => {
                    return (
                        <div key={index} className='connections-body-item'>
                            <div className='connections-body-item-img'>
                                <img src={process.env.REACT_APP_API_URL+user.profileImg} alt="user"/>
                            </div>
                            <div className='connections-body-item-name'>
                                <h3>{user.name}</h3>
                                <p>{user.description}</p>
                            </div>
                            <div className='connections-body-item-btn'>
                                <button>Message</button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                                </svg>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default UserConnections
