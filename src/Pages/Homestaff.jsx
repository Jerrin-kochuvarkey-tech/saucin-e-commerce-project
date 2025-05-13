import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Col, Nav, Row } from 'react-bootstrap';
import { useState } from 'react';



function Homestaff() {

   

        const [products, setProducts] = useState({
            category: "",
            name: "",
            description: "",
            price: "",
            stock: "",
            image: ""
    
        })
        const[preview,setPreview]=useState("")
        const [catgory, setCatgory] = useState([]);
        const [selectedCatgoryId, setSelectedCategoryId] = useState("");
        
    
        const getCategory=async()=>{
          const catdata=await getCategoryApi()
          setCatgory(catdata.data)
        }
        //fetch category
        useEffect(() => {
           getCategory();
        }, []);
    
        const setProductData = (e) => {
            const { name, value } = e.target
            setProducts({ ...product, [name]: value })
        }
    
    
          //to create link 
      useEffect(() => {
        if (products.proImg) {
          setPreview(URL.createObjectURL(products.image))
        }
        else {
          setPreview("")
        }
      }, [products.image])
    
        const handleProduct = async (e) => {
            const { category, name, description, price, stock } = products
            if (!category || !name || !description || !price || !stock) {
                alert("Please fill all fields")
            }
            else {
                const result = await addProductApi(products)
                console.log(result);
                if (result.status == 200) {
                    alert(result.data)
                    setUser({ category: "", name: "", description: "", price: "", stock: "", image: "" })
                }
    
            }
        }


    return (

        <div>
            <Navbar style={{ backgroundColor: 'black', height: '110px' }}>
                <Container style={{ margin: 0, padding: 0 }}>
                    <Navbar.Brand href="/" style={{ textDecoration: 'none' }} className='ms-5' >
                        <img
                            alt=""
                            src="https://i.postimg.cc/rFFJgd3Q/logo-removebg-preview.png"
                            width="100"
                            height="90"
                            className="d-inline-block align-bottom mt-3"
                        />{' '}
                        <span style={{ fontSize: "60px", color: 'red', fontFamily: 'Fraunces' }}>Saucin</span>


                    </Navbar.Brand>


                    < Nav className='align-items-right gap-2'>
                        {/* <Nav.Link href='/staff/addproduct' > */}
                      <Nav.Link href='/staff/addproduct'  >

                            <p className='text-danger fs-5' style={{ fontFamily: 'Fraunces' }} >Add Product</p>
                        </Nav.Link>

                        <Nav.Link href='/staff/addcategory' >
                            <p className='text-danger fs-5' style={{ fontFamily: 'Fraunces' }} >Add Category</p>
                        </Nav.Link>

                        
                        <Nav.Link>
                            <p className='text-danger fs-5' style={{ fontFamily: 'Fraunces' }}>Manage Products</p>
                        </Nav.Link>
                        <Nav.Link >
                            <p className='text-danger fs-5' style={{ fontFamily: 'Fraunces' }}>Manage staff</p>
                        </Nav.Link>

                         <Nav.Link >
                            <p className='text-danger fs-5' style={{ fontFamily: 'Fraunces' }}>Logout</p>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}

export default Homestaff