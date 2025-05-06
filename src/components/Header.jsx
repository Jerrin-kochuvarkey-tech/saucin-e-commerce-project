import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';


function Header() {
  return (
    <div>
        <Navbar  style={{backgroundColor:'black',height:'110px'}}>
        <Container style={{margin:0,padding:0}}>
          <Navbar.Brand href="/" style={{textDecoration:'none'}} className='ms-5' >
          <img
              alt=""
              src="https://i.postimg.cc/rFFJgd3Q/logo-removebg-preview.png"
              width="100"
              height="90"
              className="d-inline-block align-bottom mt-3"
            />{' '} 
            <span style={{fontSize:"60px",color:'red',fontFamily:'Fraunces'}}>Saucin</span>

           
          </Navbar.Brand>


< Nav className='align-items-right gap-2'>
           <Nav.Link href='/login'>
            <p className='text-danger fs-5'style={{fontFamily:'Fraunces'}} >LOG IN</p>
           </Nav.Link>
           
           
           <Nav.Link href='/signup'>
            <p className='text-danger fs-5' style={{fontFamily:'Fraunces'}} >SIGN UP</p>
           </Nav.Link>
           
           
           <Nav.Link href='/cart'>
            <p className='text-danger'><i class="fa-solid fa-cart-shopping fa-2x"></i></p>
           </Nav.Link>
           <Nav.Link href='/wishlist'>
            <p className='text-danger'><i class="fa-solid fa-heart fa-2x"></i></p>
           </Nav.Link>

         
 </Nav>



        </Container>
      </Navbar>
    </div>
  )
}

export default Header