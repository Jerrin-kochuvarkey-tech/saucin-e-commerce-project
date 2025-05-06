import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    // className='fixed-bottom'
    <div >
   <div style={{backgroundColor:'black'}}>
            <Row>

                <Col className='p-4' lg={3} md={4}>
                    <h4 className='text-danger'>
                        Saucin
                    </h4>
                    <p className='text-danger mt-3'> User can add and manage their projects.
                        As well as access all Projects available in our website.
                    </p>
                </Col>

                <Col lg={3} md={4} className='p-4'>
                   <h4 className='text-danger'>Links</h4>
                   <ul id='ul' >
                    <Link style={{textDecoration:'none'}}><li className='text-danger mt-3' >Home</li></Link>
                    <Link style={{textDecoration:'none'}}><li className='text-danger' >Login</li></Link>
                    <Link style={{textDecoration:'none'}}><li className='text-danger' >Sign up</li></Link>
                   </ul>
                </Col>

                <Col lg={3} md={4} className='p-4'>
                <h4 className='text-danger'>Guides</h4>
                <h6  className='mt-3 text-danger'>React</h6>
                <h6 className='text-danger'>React Bootstrap</h6>
                <h6 className='text-danger' >Routing</h6>
                </Col>
                
                
                <Col lg={3} md={4}>
                <h4 className='text-danger'>Connect With us</h4>
                
                    <label htmlFor="">
                        <input className='form-control' placeholder='Email ' type="text" />
                    </label>
                    <i class="fa-solid fa-envelope fa-2x ms-2 p-3  text-danger mt-5" ></i>
                    <div>
                    <i class="fa-brands fa-instagram fa-2x text-danger ms-2"></i>
                    <i class="fa-brands fa-facebook fa-2x text-danger ms-2"></i>
                    <i class="fa-brands fa-twitter fa-2x text-danger ms-2"></i>
                    <i class="fa-brands fa-linkedin fa-2x text-danger ms-2"></i>
                    <i class="fa-brands fa-github fa-2x text-danger ms-2"></i>
  
                    </div>
    
                
                </Col>



            </Row>


        </div>

    </div>
  )
}

export default Footer