import React from 'react'
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Home() {

        return (
            <div>
                <Row>
                <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"></button>
  </div>
 
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.postimg.cc/tJdQX88L/carousal2.jpg" class="d-block w-100" style={{height:'400px'}} alt="Slide 1"/>
    </div>
    <div class="carousel-item">
      <img src=" https://i.postimg.cc/FHTvk51v/carousal1.jpg" style={{height:'400px'}} class="d-block w-100" alt="Slide 2"/>
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/Fz56FJG3/login2.jpg" style={{height:'400px'}} class="d-block w-100" alt="Slide 3"/>
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>

                </Row>

                <Row>
                    
                        

                        <div style={{ backgroundColor: '#e6f0e8' }} className='mt-5 p-3'>
                <h1 className='text-center'>TOP MENUS</h1>
                <div className='w-75 container'>
                    <marquee scrollOver={25}>
                        <div className='d-flex justify-content-evenly'>
                      
                           <img src="https://i.postimg.cc/cLLyS9hb/topmenu1.webp" style={{height:'400px', width:'400px'}} alt="" />

                        </div>
                    </marquee>
                    <p className='text-center text-danger mt-4'>View more Products <i class="fa-solid fa-arrow-right"></i> </p>

                </div>
                {/* <Link style={{ textDecoration: 'none' }} to={'/Allprojects'}> */}
                    

                {/* </Link>             */}
                </div>





                

                </Row>

                <Row>
                <h1>hai</h1>
                </Row>
            </div>

        );
    }

    export default Home