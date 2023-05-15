import React from 'react';
import axios from 'axios';

// Local imports
import "./jobsLeft.scss";
import Modal from '../../../components/modal/Modal';
import {useInputChange,useInputFileChange} from "../../../customHooks/HandleInputChange";

function JobsLeft() {
    const onPostNewJob = () => {
        console.log('Post new job');
    }
    // Modal State
    const [showModal, setShowModal] = React.useState(false);
    const handleModalClose = () => {
        setShowModal(false);
    }
    const handleModalOpen = () => {
        setShowModal(true);
    }
    
    // Jobs State
    const [title, handleTitleChange] = useInputChange("");
    const [company, handleCompanyChange] = useInputChange("");
    const [location, handleLocationChange] = useInputChange("");
    const [description, handleDescriptionChange] = useInputChange("");
    const [salary, handleSalaryChange] = useInputChange("");
    const [experience, handleExperienceChange] = useInputChange("");
    const [logo, handleLogoChange] = useInputFileChange("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const fromData = new FormData();
        fromData.append("title", title);
        fromData.append("company", company);
        fromData.append("location", location);
        fromData.append("description", description);
        fromData.append("salary", salary);
        fromData.append("experience", experience);
        fromData.append("logo", logo);
        // console.log(fromData);

        axios.post(process.env.REACT_APP_API_URL+"api/job/create", fromData,{
            headers:{
                "Content-Type": "multipart/form-data"
            }
        })
        .then((res) => {
            // console.log(res);
            handleModalClose();
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className='jobs-left-wrapper'>
            <div className="jobs-left-links">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
                    </svg>
                    <span>My Jobs</span>
                </a>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                    </svg>
                    <span>Jobs Alert</span>
                </a>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M14.73 10H17l-5.5 8L8 14.5l1.34-1.34L11.21 15zM20 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V3h5.69l.52-1A2 2 0 0112 1a2 2 0 011.76 1l.52 1zm-2 2h-2.6l.6 1.1V7H8v-.9L8.6 5H6v14a1 1 0 001 1h10a1 1 0 001-1z"></path>
                    </svg>
                    <span>Skills Assessment</span>
                </a>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z"></path>
                    </svg>
                    <span>Interview Prep</span>
                </a>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M15.5 2H4v20h16V6.5zM6 20V4h8v4h4v12z"></path>
                    </svg>
                    <span>Resume Builder</span>
                </a>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                    </svg>
                    <span>Jobs Seeker Guidance</span>
                </a>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M9.18 2l-4.3 2.52L6.22 8l-.52.91-3.7.55v5l3.64.54.54.93-1.34 3.53L9.14 22l2.29-2.9h1.09l2.3 2.9 4.32-2.52L17.79 16l.53-.93 3.68-.53v-5L18.32 9l-.51-.9 1.36-3.51L14.86 2l-2.33 3h-1zM12 9a3 3 0 11-3 3 3 3 0 013-3z"></path>
                    </svg>
                    <span>Application Setting</span>
                </a>
            </div>

            <div className="jobs-left-footer">
                <button onClick={handleModalOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M19 12h2v6a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h6v2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1zm4-8a2.91 2.91 0 01-.87 2l-8.94 9L7 17l2-6.14 9-9A3 3 0 0123 4zm-4 2.35L17.64 5l-7.22 7.22 1.35 1.34z"></path>
                    </svg>
                    <span>Post a free job 🚀</span>
                </button>
                {showModal && <Modal onClose={handleModalClose}>
                    <div className='jobs__modal'>
                        <div className="jobs__modal-header">
                            <h2>Post a free job</h2>
                        </div>
                        <div className="jobs__modal-body">
                            <div className="jobs__modal-body-left">
                                <div className="jobs__modal-body-left-input">
                                    <label htmlFor="job-title">Job Title</label>
                                    <input value={title} onChange={handleTitleChange} type="text" id="job-title" placeholder="Enter job title" />
                                </div>
                                <div className="jobs__modal-body-left-input">
                                    <label htmlFor="job-location">Job Location</label>
                                    <input value={location} onChange={handleLocationChange} type="text" id="job-location" placeholder="Enter job location" />
                                </div>
                                <div className="jobs__modal-body-left-input">
                                    <label htmlFor="job-description">Job Description</label>
                                    <input value={description} onChange={handleDescriptionChange} type="text" id="job-description" placeholder="Enter job description" />
                                </div>
                                
                            </div>
                            <div className="jobs__modal-body-right">
                                <div className="jobs__modal-body-left-input">
                                    <label htmlFor="job-company">Company Name</label>
                                    <input value={company} onChange={handleCompanyChange} type="text" id="job-company" placeholder="Enter company name" />
                                </div>
                                <div className="jobs__modal-body-left-input">
                                    <label htmlFor="job-salary">Salary</label>
                                    <input value={salary} onChange={handleSalaryChange} type="text" id="job-salary" placeholder="Enter salary" />
                                </div>
                                <div className="jobs__modal-body-left-input">
                                    <label htmlFor="job-experience">Experience Required</label>
                                    <input value={experience} onChange={handleExperienceChange} type="text" id="job-experience" placeholder="Enter experience required" />
                                </div>
                                
                            </div>
                        </div>
                        <div className='company-logo'>
                            <label htmlFor="job-logo">Company Logo</label>
                            <input onChange={handleLogoChange} type="file" id="job-logo" />
                        </div>
                        <div className="jobs__modal-footer">
                            <button onClick={handleModalClose}>Cancel</button>
                            <button onClick={handleSubmit}>Post</button>
                        </div>
                    </div>
                </Modal>}
            </div>

        </div>
    )
}

export default JobsLeft
