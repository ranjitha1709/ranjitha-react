import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Sign() {
  const [email, setEmail] = useState('')
      const [name, setName] = useState('')
  const [Password, setPassword] = useState('')
        const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [PasswordError, setPasswordError] = useState('')
  const [showPassword, setShowPassword] = useState(false);

    const validate = (e) => {
        // alert(1)
        let formValidate = true;
        if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            formValidate = false;
            setEmailError("Email not valid")
            return false
        }
        else {
            setEmailError('')
            formValidate = true;
        }
            if (!Password.match(/^[a-zA-Z0-9@$!%*?&]{5,22}$/)) {
            formValidate = false;
            setPasswordError("Only Letters and length must best min 5 Chracters and Max 22 Chracters")
            return false
        }
        else {
            setPasswordError('')
            formValidate = true;
      }
          if (!name.match(/^[A-Za-z]\\w{5,29}$/)) {
            formValidate = false;
            setNameError("length must best min 5 Chracters and Max 22 Chracters")
            return false
        }
        else {
            setNameError('')
            formValidate = true;
        }
        return formValidate;
    }
    const onSubmit=(e) => {
        e.preventDefault()
        validate()
    }
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
                <label>fist Name</label>
                <input
                  type="email"
                  id="EmailInput"
                  name="EmailInput"
                  className="form-control "
                  onChange={(e)=>setName(e.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {nameError}
                </small>
                </div>
                <div>
              <label>last Name</label>
                <input
                  type="email"
                  id="EmailInput"
                  name="EmailInput"
                  className="form-control "
                  onChange={(e)=>setName(e.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {nameError}
                </small>
                            </div>
              
                <div className="form-group" >
                <label>Email</label>
                <input
                  type="email"
                  id="EmailInput"
                  name="EmailInput"
                  className="form-control "
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small>
                </div>
                <div>
                 <label>Username</label>
                <input
                  type="text"
                  id="EmailInput"
                  name="TextInput"
                  className="form-control "
                  onChange={(e)=>setName(e.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {nameError}
                </small>
                            </div>
                             <div  className="form-group">
                <label>Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="EmailInput"
                  name="EmailInput"
                  className="form-control "
                  onChange={(e)=>setPassword(e.target.value)}
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
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="toggle-passwords" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </button>  
                     <small id="passworderror" className="text-danger form-text">
                  {PasswordError}
                </small>
                </div>
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