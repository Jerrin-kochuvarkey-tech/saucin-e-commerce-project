import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';



function Registration() {

const[user,setUser]=useState({
   uname:"",
   email:"",
   phone:"",
   housename:"",
   district:"",
   city:"",
   pincode:"",
   password:"",
   confirm:""
})
const setData=(e)=>{

    const {name,value}=e.target
    setUser({ ...user, [name]: value })
}
console.log(user);

const handleSignup=(e)=>{
    e.preventDefault()
    const { uname, email, phone,housename,district,city,pincode,password,confirm } = user
    if (!uname || !email || !phone || !housename || !district || !city ||!pincode || !password ||!confirm) {
        alert("Please fill all the fields")
    }
    else {
        
        localStorage.setItem("user",JSON.stringify(user))
           
        }
    }


  return (
    <div className='container w-100 shadow-lg border mb-5 mt-5' style={{height:'500px'}}>
        <Row>
           <Col>
            <div className='container w-100'>
                <img src="https://i.postimg.cc/j29FJvpF/signup.avif" style={{height:'100%',width:'100%'}} alt="" />
            </div>
            </Col>

            <Col >
            <div className='container w-100'>
                <h2 className='mt-2 text-center text-danger'>Register Here</h2>
               <Row>
                   <Col>
                        <FloatingLabel controlId="floatingname" label="name" className='mt-3'>
                        <Form.Control onChange={(e)=>{setData(e)}}  type="text" name='uname'  placeholder="Enter your name here"  />
                        </FloatingLabel>
        
                       <FloatingLabel controlId="floatingEmail" label="email address" className="mb-3 mt-3">
                        <Form.Control onChange={(e)=>{setData(e)}} type="email" name='email'  placeholder="Enter email address"  />
                        </FloatingLabel> 
            
                        <FloatingLabel controlId="floatingPhone" label="Phone">
                        <Form.Control onChange={(e)=>{setData(e)}}  type="text" name='phone'  placeholder="Phone number"  />
                        </FloatingLabel>
                         
                        <FloatingLabel controlId="floatinghousename" label="housename" className="mb-3 mt-3" >
                        <Form.Control onChange={(e)=>{setData(e)}}  type="text" name='housename'  placeholder="Enter your housename here"  />
                        </FloatingLabel>
                         
                        <FloatingLabel controlId="floatingDistrict" label="district">
                        <Form.Control onChange={(e)=>{setData(e)}} type="text" name='district'  placeholder="Enter your district here"  />
                        </FloatingLabel>
                   </Col>
    
                    <Col>
                        <FloatingLabel controlId="floatingcity" label="city" className="mb-3 mt-3">
                        <Form.Control onChange={(e)=>{setData(e)}}  type="text" name='city'  placeholder="Enter your city"  />
                        </FloatingLabel>
        
                        <FloatingLabel controlId="floatingpincode" label="Pincode">
                        <Form.Control onChange={(e)=>{setData(e)}} type="text" name='pincode'  placeholder="Enter your pincode here"  />
                        </FloatingLabel>
        
                        <FloatingLabel controlId="floatingpassword" label="Password" className="mb-3 mt-3">
                        <Form.Control onChange={(e)=>{setData(e)}} type="password" name='password'  placeholder="Enter your password here"  />
                        </FloatingLabel>
        
                        <FloatingLabel controlId="floatingconfirm" label="confirm">
                        <Form.Control onChange={(e)=>{setData(e)}}  type="password" name='confirm'  placeholder="Confirm password"  />
                        </FloatingLabel>
                        <div className='text-center'>
                    <Button onClick={(e)=>handleSignup(e)} className='text-black mt-3 m-2 ' style={{backgroundColor:'red'}}>Save</Button>
                    <Button className='text-black mt-3 m-2' style={{backgroundColor:'red'}}>Cancel</Button>
                </div>
                    </Col>
               </Row>

               
            </div>

            
            </Col>
        </Row>
           
           
    </div>
  )
}

export default Registration