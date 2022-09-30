import React,{useState} from "react";
import { Alert, Form } from "react-bootstrap";
import {Link,useNavigate} from "react-router-dom"
import { Button } from "react-bootstrap";
import { UseUserAuth } from "../context/userAuthContext";

const Signup = () => {
    const {signUp} =UseUserAuth();
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [error,seterror]=useState();
    const Navigate= useNavigate();
    const handleSubmit =async(e)=>{
        e.preventDefault();
        seterror('');
        try{
            await signUp(email,password)
            Navigate('/')
        }catch(err){
            seterror(err.message)
        }
    }

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Signup</h2>
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
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account <Link to="/">Log In</Link>
      </div>
    </>
  );
};

export default Signup;