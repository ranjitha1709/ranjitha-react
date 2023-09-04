import React from "react";
import './Header.css'
import { Button, Form, Row, Col, Image } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Sign from './Sign';
function Header() {

     const navigate = useNavigate();

  return (
    <div className="bg">
      <div>
   
        <Form >
              <Button className="form-button" variant="primary" onClick={()=>navigate('/login')}>Login</Button>{' '}
              <Button className="form-button" variant="secondary"onClick={()=>navigate('/Sign')}>Register</Button>
            </Form>
      </div>  
    </div>
  )  
}
export default Header;