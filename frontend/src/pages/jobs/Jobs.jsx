import React from 'react';

// Local imports
import "./jobs.scss";
import JobsLeft from './jobsLeft/JobsLeft';
import JobsCenter from './jobsCenter/JobsCenter';
import JobsRight from './jobsRight/JobsRight';

function Jobs() {
  return (
    <div className='jobs'>
      <div className="jobs-left">
        <JobsLeft/>
      </div>
      <div className="jobs-center">
        <JobsCenter/>
      </div>
      <div className="jobs-right">
        <JobsRight/>
      </div>
    </div>
  )
}

export default Jobs
