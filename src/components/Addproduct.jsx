import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';
import { Col, Nav, Row } from 'react-bootstrap';




function Addproduct() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



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
    if (products.image) {
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
      <>

            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
             > 
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title className='text-danger'>Add Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
    
    
                            <Col>
    
                                <label>
                                    {/* Category: */}
                                    <select value={selectedCatgoryId} onChange={(e) => setSelectedCatgoryId(e.target.value)} required>
                                        <option value="">Select category</option>
                                        {catgory.map(cat => (
                                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                                        ))}
                                    </select>
                                </label>
    
    
                                <input onChange={(e) => setProductData(e)} className='m-2' type="text" name='prodname' placeholder='Enter product name'></input>
                                <input onChange={(e) => setProductData(e)} className='m-2' type="text" name='prodescription' placeholder='Enter product description'></input>
                                <input onChange={(e) => setProductData(e)} className='m-2' type="text" name='prodprice' placeholder='Enter product price'></input>
                                <input onChange={(e) => setProductData(e)} className='m-2' type="text" name='prodstock' placeholder='prodstock'></input>
                            </Col>
                            <Col>
                                {/* <label htmlFor="image" className='text-center m-2'>
                                        <input type="file" id='image' style={{ display: 'none' }} />
                                        <img src="https://i.postimg.cc/SstSwQ7B/cartdummy.jpg" className='w-100 text-black' alt="" />
                                    </label> */}
                                <label htmlFor="img1" className='text-center'>
                                    {/* <input type="file" onChange={(e) => setProjectData({ ...projectData, ["proImg"]: e.target.files[0] })} id='img1' style={{ display: 'none' }} /> */}
    
                                    <input type="file" onChange={(e) => setProducts({ ...products, ["image"]: e.target.files[0] })} id='img1' style={{ display: 'none' }} />
    
                                    <img src={preview ? preview : "https://i.postimg.cc/y6fkGYfK/dummyimage-removebg-preview.png"} className='w-100 text-black' alt="" />
    
    
                                </label>
                            </Col>
    
    
    
                        </Row>
                    </Modal.Body>
    
                    <Modal.Footer>
                        <Button variant="secondary"onClick={handleClose}>Close</Button>
                        <Button onClick={(e) => handleProduct(e)} variant="primary">Save</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div> 
      </>
    )
}

export default Addproduct