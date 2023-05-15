import React from 'react';

// Local imports
import "./jobsCenter.scss";
import RecJobsItem from './RecJobsItem';

function JobsCenter() {
  return (
    <div className='jobs-center-wrapper'>
      <div className="jobs-recent-search">
        <h3><span> Recent job searches </span> <span>clear</span></h3>
        <div className="jobs-recent-search-list">
            <div className="jobs-recent-search-item">
                <h4>Frontend Developer <span>· 226 new</span></h4>
                <p>Location: <span>Remote</span></p>
            </div>
            <div className="jobs-recent-search-item">
                <h4>Web Developer Fresher <span>· 42 new</span></h4>
                <p>Location: <span>Gurugram, Haryana</span></p>
            </div>
      </div>
      </div>
      <div className="recommendation-jobs">
        <h3>Recommended jobs for you</h3>
        <p>Based on your profile and search history</p>
        <div className="recommendation-jobs-list">
            <RecJobsItem/>
            <RecJobsItem/>
            <RecJobsItem/>
            <RecJobsItem/>
        </div>
      </div>
    </div>
  )
}

export default JobsCenter;
