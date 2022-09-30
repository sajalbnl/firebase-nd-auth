import React,{useState} from "react";
import { Form ,Alert} from "react-bootstrap";
import { Button } from "react-bootstrap";
import {Link,useNavigate} from "react-router-dom"
import GoogleButton from "react-google-button";
import { UseUserAuth } from "../context/userAuthContext";

const Login = () => {
  const {LogIn,googleSignIn} =UseUserAuth();
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [error,seterror]=useState();
  const navigate = useNavigate();
  const handleSubmit =async(e)=>{
      e.preventDefault();
      seterror('');
      try{
          await LogIn(email,password)
          
      }catch(err){
          seterror(err.message)
      }
  }
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Login</h2>
        {error&&<Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e)=>setemail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e)=>setpassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
};

export default Login;