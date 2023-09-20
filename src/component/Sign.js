import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {Navigate,
  useNavigate
} from 'react-router-dom'
function Sign() {
  const [email, setEmail] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userName, setUserName] = useState('')
  const [Password, setPassword] = useState('')
    const [message, setMessage] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('')
   const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [userNameError, setUserNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [PasswordError, setPasswordError] = useState('')
      const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [showPassword, setShowPassword] = useState(false);

   const validate = () => {
  let formValid = true;

  // Validate email
  if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
    setEmailError("Email not valid");
    formValid = false;
  } else {
    setEmailError('');
  }

  // Validate password
  if (!Password.match(/^[a-zA-Z0-9@$!%*?&]{5,22}$/)) {
    setPasswordError("Only Letters and length must be at least 5 characters and at most 22 characters");
    formValid = false;
  } else {
    setPasswordError('');
  }

  // Validate first name
  if (!firstName.match(/^[A-Za-z]\w{2,29}$/)) {
    setFirstNameError("First name cannot be empty");
    formValid = false;
  } else {
    setFirstNameError('');
  }

  // Validate last name
  if (!lastName.match(/^[A-Za-z]\w{0,29}$/)) {
    setLastNameError("Last name cannot be empty");
    formValid = false;
  } else {
    setLastNameError('');
  }

  // Validate username
  if (!userName.match(/^[A-Za-z]\w{2,29}$/)) {
    setUserNameError("Username cannot be empty");
    formValid = false;
  } else {
    setUserNameError('');
  }
  if (Password !== confirmPassword) {
    setPasswordError("Passwords do not match");
    setConfirmPasswordError("Passwords do not match");
    formValid = false;
  } else {
    setPasswordError('');
    setConfirmPasswordError('');
  }
  return formValid;
};
    const navigate = useNavigate()

    const onSubmit=async(e) => {
      e.preventDefault()
      if (validate()) {
        try {
          const response = await axios.post('http://localhost:8080/register', {
            fullname: firstName,
            lastname: lastName,
            email: email,
            username: userName,
            password: Password,
            confirmpassword: Password
          });
          console.log(response.data.message);
          if (response.data.message === "user exist") {
    setMessage("User already exists");
          }
          else if (response.data.message === "Success") {
            navigate("/login", { state: { id: email } })
          }
        }
        catch (error) {
          console.error('Error sending data:', error);
        }
      }  }
     const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    return (
        <div className="login">
            <div className="container ">
                <div className="row d-flex justify-content-center ">
                <div className="col-md-4">
                        <form className="loginform" onSubmit={onSubmit}>
                             <div className="form-group" >
                <label>Fist Name</label>
                <input
                  type="text"
                  className="form-control "
                    onChange={(e) => { setfirstName(e.target.value); setFirstNameError('') }}
                />
                <small  className="text-danger form-text">
                  {firstNameError}
                </small>
                </div>
                <div>
              <label>Last Name</label>
                <input
                    type="text"
                    className="form-control "
                    onChange={(e) => { setLastName(e.target.value);setLastNameError('') }}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {lastNameError}
                </small>
                            </div>
              
                <div className="form-group" >
                <label>Email</label>
                <input
                    type="email"
                    id="EmailInput"
                    name="EmailInput"
                    className="form-control "
                    onChange={(e) => { setEmail(e.target.value);setEmailError('') }}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small>
                </div>
                <div>
                 <label>Username</label>
                <input
                    type="text"
                    className="form-control "
                    onChange={(e) => { setUserName(e.target.value); setUserNameError('') }}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {userNameError}
                </small>
                            </div>
                             <div  className="form-group">
                <label>Password</label>
                <input
                    type={showPassword ? 'text' : 'password'}
                    id="EmailInput"
                    name="EmailInput"
                    className="form-control "
                    onChange={(e) => { setPassword(e.target.value); setPasswordError(''); }}
                />
                <button className="toggle-passwords" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </button>  
                   <small id="passworderror" className="text-danger form-text">
                  {PasswordError}
                </small>
                </div>
                <div  className="form-group">
                <label>Confirm Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="EmailInput"
                  name="EmailInput"
                  className="form-control "
                  onChange={(e)=>{setConfirmPassword(e.target.value); setConfirmPasswordError('');}}
                />
                <button className="toggle-passwords" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </button>  
                     <small id="passworderror" className="text-danger form-text">
                  {confirmPasswordError}
                </small>
                </div>
                      {message && <div className="text-danger">{message}</div>}

            <button type="submit" className="btn btn-primary submit">
                Register
              </button>
                    </form>                   
                    </div>
                </div>
            </div>
            </div>
    )
}
export default Sign