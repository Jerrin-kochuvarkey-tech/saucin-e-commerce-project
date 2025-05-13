import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { loginApi } from '../service/Allapis';
import Header from '../components/Header';





function Login() {
  const navigate=useNavigate()
//to store role
// const[role,setRole]=useState(null) 
//To store login data
const[login,setLogin]=useState({
  uname:"",
  password:""
})
const setData=(e)=>{
  const{name,value}=e.target
  setLogin({...login,[name]:value})
}
console.log(login);

const handleLogin=async(e)=>{
  e.preventDefault()
  const{uname,password}=login
  if(!uname||!password){
    alert("please fill all fields")
  }
  else if(uname=='staff'&& password=='staff')
  {
    navigate('/staff/home')
    // setRole(admin)
    
  }
  else{
    const result = await loginApi(login)
    console.log(result);
      if (result.status == 200) {
      setLogin({ email: "", password: "" })
      localStorage.setItem("currentUser",JSON.stringify(result.data.login))
      localStorage.setItem("accesstoken",result.data.accesstoken)
      localStorage.setItem("refreshtoken",result.data.refreshtoken)
      alert(`${result.data.login.uname} login successfull`)
      navigate('/') 
  }


}

}
// console.log(role);

  return (
    <>
    <Header></Header>
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
              
              <FloatingLabel controlId="floatinguname" label="username" className="mb-3 mt-3">
              <Form.Control onChange={(e)=>setData(e)}  type="email" name='uname'  placeholder="Enter username"  />
              </FloatingLabel> 
  
              <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control onChange={(e)=>setData(e)} type="password" name='password'  placeholder="Password"  />
              </FloatingLabel>
              <Button onClick={(e)=>handleLogin(e)}  className='px-3 m-4 rounded-pill' variant="danger">Login</Button>
              <p>Dont you have an account.?<Link to={'/signup'} ><span style={{textDecoration:'none'}}>sign up here..</span></Link></p>
 
  
              </div>
  
              </Col>
          </Row>
         
  
  
      </div>
    </>
  )
}

export default Login