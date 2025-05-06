import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';




function Login() {
  return (
    <div className='container w-50 shadow-lg border mb-5 mt-5'>
        <Link style={{textDecoration:'none'}} to="/"><p className='p-2 m-3'><i class="fa-solid fa-angles-left"></i>Back to home</p></Link>

        <Row>
            <Col>
                  <div className=' m-1'>
                    <img style={{ height: '400px', width: '90%' }} src="https://i.postimg.cc/Fz56FJG3/login2.jpg" alt="" />

                    </div>

            </Col>


            <Col style={{alignItems:'center'}}>
            <div className='text-center container w-100' >
            <h1><b>Login</b></h1>
            
            <FloatingLabel controlId="floatingEmail" label="email address" className="mb-3 mt-3">
            <Form.Control  type="email" name='email'  placeholder="Enter email address"  />
            </FloatingLabel> 

            <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control  type="password" name='password'  placeholder="Password"  />
            </FloatingLabel>
            <Button  className='px-3 m-4 rounded-pill' variant="danger">Login</Button>
            <p>Dont you have an account.?<Link to={'/signup'} ><span style={{textDecoration:'none'}}>sign up here..</span></Link></p>


            </div>

            </Col>
        </Row>
       


    </div>
  )
}

export default Login