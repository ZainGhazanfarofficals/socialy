import React from 'react';
import axios from 'axios';

// Local imports
import "./networkRight.scss";
import RightInvitation from './rightInvitation/RightInvitation';
import RightRecItem from './rightRecommendation/RightRecItem';

function NetworkRight() {
  const [suggestion, setSuggestion] = React.useState([]);
  const [invitations, setInvitations] = React.useState([]);

  React.useEffect(() => {
    // For suggestions
    axios.get(process.env.REACT_APP_API_URL+'api/connection/suggestions')
    .then(res => {
      setSuggestion(res.data.users);
    })
    .catch(err => {
      console.log(err);
    });

    // For invitations
    axios.get(process.env.REACT_APP_API_URL+'api/connection/invitations')
    .then(res => {
      setInvitations(res.data.pendingConnections);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);
  
  return (
    <div className='network-right-wrapper'>
      <div className='network-invitations'>
        <div className='network-invitations-header'>
          <h3>Invitations</h3>
        </div>
        <div className='network-invitations-body'>
          {invitations.map((invitation, index) => {
            return <RightInvitation key={index} invitation={invitation}/>
          })}
        </div>
      </div>

      <div className='network-recommendation'>
        <div className='network-invitations-header'>
          <h3>People you may know</h3>
        </div>
        <div className='network-invitations-body'>
          <ul>
            {suggestion.map((user, index) => {
              return <RightRecItem key={index} user={user}/>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NetworkRight
