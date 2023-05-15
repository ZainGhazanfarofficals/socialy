import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Local imports
import "./auth.scss";
import { NavLink } from 'react-router-dom';
import { useInputChange, useInputFileChange } from '../../customHooks/HandleInputChange';
import { LOGIN_SUCCESS } from '../../app/actions/authActions';

function Signup() {
    // Navigation
    const navigate = useNavigate();

    // Error handling
    const [error,setError] = useState("");  

    // Redux Dispatch
    const dispatch = useDispatch();

    // Custom hooks
    const [name,onNameChange] = useInputChange("");
    const [username,onUsernameChange] = useInputChange("");
    const [email,onEmailChange] = useInputChange("");
    const [phone,onPhoneChange] = useInputChange("");
    const [password,onPasswordChange] = useInputChange("");
    const [confirmPassword,onConfirmPasswordChange] = useInputChange("");
    const [description,onDescriptionChange] = useInputChange("");
    const [profileImg,onProfileImgChange,profileImgPreview] = useInputFileChange(process.env.REACT_APP_API_URL+"uploads/userImages/defaultProfile.png");
    const [coverImg,onCoverImgChange,coverImgPreview] = useInputFileChange(process.env.REACT_APP_API_URL+"uploads/userImages/defaultCover.png");
    
    const onFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name",name);
        formData.append("username",username);
        formData.append("email",email);
        formData.append("phone",phone);
        formData.append("password",password);
        formData.append("coverImg",coverImg);
        formData.append("profileImg",profileImg);
        formData.append("description",description);
      
        axios.post(process.env.REACT_APP_API_URL+'api/signup',formData,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          console.log(response.data);
          dispatch({type:LOGIN_SUCCESS,payload:response.data.data});
          navigate('/');
        })
        .catch(error => {
          console.log(error);
          setError(error.response.data.message);
        });
        
        console.log(name,username,email,phone,password,confirmPassword,description,profileImg,coverImg);
      }
      

    return (
    <div className='auth'>
      <div className='auth-header'>
        <svg xmlns="http://www.w3.org/2000/svg"  width="200px" height="150px" viewBox="0 -192 512 512" >
    <g>
        <path d="M202.057143,74.9714286 L230.308571,109.714286 L208,109.714286 L182.857143,77.8057143 L182.857143,109.714286 L164.571429,109.714286 L164.571429,18.2857143 L182.857143,18.2857143 L182.857143,72.0457143 L206.08,45.7142857 L229.394286,45.7142857 L202.057143,74.9714286 Z M128.914286,43.8857143 C120.787189,44.0072946 113.236551,48.1071889 108.708571,54.8571429 L108.708571,45.7142857 L91.4285714,45.7142857 L91.4285714,109.714286 L109.714286,109.714286 L109.714286,79.8171429 C109.228856,75.4306044 110.587451,71.0395336 113.465306,67.6935939 C116.343161,64.3476542 120.481628,62.3475617 124.891429,62.1714286 C135.497143,62.1714286 137.142857,72.5942857 137.142857,79.8171429 L137.142857,109.714286 L155.428571,109.714286 L155.428571,75.7942857 C155.428571,55.68 148.754286,43.8857143 129.28,43.8857143 L128.914286,43.8857143 L128.914286,43.8857143 Z M292.571429,79.1771429 C292.641384,80.5171829 292.641384,81.85996 292.571429,83.2 L244.571429,83.2 L244.571429,83.84 C246.180812,91.7157313 253.271666,97.2566715 261.302857,96.9142857 C267.534814,97.1852048 273.608543,94.9075564 278.125714,90.6057143 L290.285714,99.7485714 C282.492218,107.701692 271.697708,111.986282 260.571429,111.542857 C251.352,112.12578 242.332413,108.684541 235.84426,102.108711 C229.356108,95.5328807 226.036241,86.4679167 226.742857,77.2571429 C226.553601,68.1728489 230.14904,59.4186661 236.668659,53.0897809 C243.188278,46.7608958 252.045327,43.4268918 261.12,43.8857143 C278.308571,43.8857143 292.571429,56.0457143 292.571429,79.1771429 L292.571429,79.1771429 Z M275.565714,71.3142857 C275.429974,67.6543136 273.796386,64.2108816 271.047593,61.7905603 C268.298799,59.3702389 264.676286,58.1856575 261.028571,58.5142857 C252.988748,57.6450726 245.707994,63.3078811 244.571429,71.3142857 L275.565714,71.3142857 Z M18.2857143,18.2857143 L0,18.2857143 L0,109.714286 L54.8571429,109.714286 L54.8571429,91.4285714 L18.2857143,91.4285714 L18.2857143,18.2857143 Z M347.428571,18.2857143 L365.714286,18.2857143 L365.714286,109.714286 L348.434286,109.714286 L348.434286,103.314286 C343.984638,108.796268 337.202524,111.848219 330.148571,111.542857 C321.559196,111.322256 313.441626,107.566635 307.712892,101.162914 C301.984158,94.7591935 299.152166,86.2751236 299.885714,77.7142857 C299.012676,69.1378257 301.783463,60.5891918 307.521582,54.1555424 C313.259702,47.7218931 321.437059,43.995336 330.057143,43.8857143 C336.471312,43.6048667 342.729753,45.9106081 347.428571,50.2857143 L347.428571,18.2857143 L347.428571,18.2857143 Z M348.8,77.7142857 C349.381889,73.4426146 348.085439,69.1282627 345.245304,65.8848994 C342.40517,62.6415361 338.299673,60.7869982 333.988571,60.7999321 C325.241789,61.4350869 318.614232,68.9571605 319.085714,77.7142857 C318.614232,86.4714109 325.241789,93.9934846 333.988571,94.6286393 C338.299673,94.6415732 342.40517,92.7870353 345.245304,89.543672 C348.085439,86.3003087 349.381889,81.9859569 348.8,77.7142857 L348.8,77.7142857 Z M73.1428571,16.4571429 C67.0426002,16.5439794 62.0499364,21.3369367 61.7142857,27.4285714 C61.7142857,33.7403971 66.8310314,38.8571429 73.1428571,38.8571429 C79.4546829,38.8571429 84.5714286,33.7403971 84.5714286,27.4285714 C84.2357779,21.3369367 79.2431141,16.5439794 73.1428571,16.4571429 L73.1428571,16.4571429 Z M64,109.714286 L82.2857143,109.714286 L82.2857143,45.7142857 L64,45.7142857 L64,109.714286 Z M512,9.14285714 L512,118.857143 C512,123.906603 507.906603,128 502.857143,128 L393.142857,128 C388.093397,128 384,123.906603 384,118.857143 L384,9.14285714 C384,4.09339657 388.093397,-3.55271368e-15 393.142857,-3.55271368e-15 L502.857143,-3.55271368e-15 C507.906603,-3.55271368e-15 512,4.09339657 512,9.14285714 Z M420.571429,45.7142857 L402.285714,45.7142857 L402.285714,109.714286 L420.571429,109.714286 L420.571429,45.7142857 Z M422.857143,27.4285714 C422.857143,21.1167457 417.740397,16 411.428571,16 C405.116746,16 400,21.1167457 400,27.4285714 C400,33.7403971 405.116746,38.8571429 411.428571,38.8571429 C417.740397,38.8571429 422.857143,33.7403971 422.857143,27.4285714 Z M493.714286,75.7942857 C493.714286,55.68 487.04,43.8857143 467.565714,43.8857143 C459.308825,43.8867299 451.594988,48.0007766 446.994286,54.8571429 L446.994286,45.7142857 L429.714286,45.7142857 L429.714286,109.714286 L448,109.714286 L448,79.8171429 C447.51457,75.4306044 448.873165,71.0395336 451.75102,67.6935939 C454.628875,64.3476542 458.767343,62.3475617 463.177143,62.1714286 C473.782857,62.1714286 475.428571,72.5942857 475.428571,79.8171429 L475.428571,109.714286 L493.714286,109.714286 L493.714286,75.7942857 Z" fill="#0A66C2">

</path>
    </g>
        </svg>
      </div>
      <div className='auth-heading'><p>Make the most of your professional life</p></div>
      <div className='auth-form'>
        <form>
            <div className='auth-form-img'>
                <div className='auth-profile-img'>
                    <img src={`${profileImgPreview}`} alt="" />
                </div>
                <div className='auth-cover-img' style={{backgroundImage:`url(${coverImgPreview})`}}></div>
            </div>
            {error.length>0 && <p className='error-msg'>{error}</p>}
            <div className='auth-form-input'>
                <input type='text' placeholder='Name' name='name' 
                value={name} onChange={onNameChange} />
                <input type='text' placeholder='Username' name='username'
                value={username} onChange={onUsernameChange} />
            </div>
            <div className='auth-form-input'>
                <input type='text' placeholder='Email' name='email' 
                value={email} onChange={onEmailChange}/>
                <input type='text' placeholder='Phone Number' name='phone'
                value={phone} onChange={onPhoneChange} />
            </div>
            <div className='auth-form-input'>
                <input type='text' placeholder='Password' 
                value={password} onChange={onPasswordChange}/>
                <input type='text' placeholder='Confirm Password' 
                value={confirmPassword} onChange={onConfirmPasswordChange}/>
            </div>
            <div className='auth-textarea'>
                <textarea id="" cols="30" rows="10" placeholder='Description' name="description"
                value={description} onChange={onDescriptionChange}></textarea>
            </div>
            <div className='auth-image-input'>
                <label htmlFor="image">
                    <p>Choose profile picture!</p>
                </label>
                <input type="file" name="image" id="image" accept='.jpg,.png,.jpeg' 
                onChange={onProfileImgChange}  />
                <label htmlFor="cover-image">
                    <p>Choose cover image!</p>
                </label>
                <input type="file" name="cover-image" id="cover-image" accept='.jpg,.png,.jpeg' 
                onChange={onCoverImgChange} />
            </div>
            <div className='auth-links'>
                <a href="#">Forgot password?</a>
                <NavLink to={"/signin"}>Already have an account?</NavLink>
            </div>

            <div className='auth-form-btn'>
                <button type='button' onClick={onFormSubmit}>Sign Up</button>
            </div>

        </form>
      </div>
    </div>
  )
}

export default Signup
