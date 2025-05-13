import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi } from '../service/Allapis';




function Addcategory() {
    const [category, setCategory] = useState({
        image: "",
        catname: "",
        description: ""
    })

    const [preview, setPreview] = useState("")

    const setData = (e) => {
        const { name, value } = e.target
        setCategory({ ...category, [name]: value })
    }
    console.log(category);

    useEffect(() => {
        if (category.image) {
            setPreview(URL.createObjectURL(category.image))
        }
        else {
            setPreview("")
        }
    }, [category.image])
    console.log(preview);


    const handleCategory =async (e) => {
        const { image,catname,description} = category
        if (!image || !catname || !description) {
            alert("Please fill all fields")
        }
        else {
            //localStorage.setItem("category", JSON.stringify(category))
            const result = await addCategoryApi(category)
            console.log(result);
            if (result.status == 200) {
                alert(result.data)
                setUser({ image: "", catname: "", description: ""})
            }
          }



        }
     
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: 'red' }}>Add category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                 <Row className='container w-100'>
                                                
                          <Col className='container w-50'>
                                <label htmlFor="image" className='text-center'>
                                <input type="file" onChange={(e) => setCategory({ ...category, ["image"]: e.target.files[0] })} id='image' style={{ display: 'none' }} />
                                <img src={preview ? preview : "https://i.postimg.cc/SstSwQ7B/cartdummy.jpg"} className='w-100 text-black m-2' alt="" />
                                </label>
                          </Col>
    
                           <Col className='container w-50'>
                                    <input onChange={(e) => setData(e)} type="text" id="catname" name="catname" placeholder='Enter category name' className='m-2' />
                                    <textarea onChange={(e) => setData(e)} id='description' name="description" placeholder='Description' className='m-2'></textarea>
        
                                 
                           </Col>
                 </Row>                  
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger">Close</Button>
                    <Button onClick={(e) => handleCategory(e)} variant="danger">Save</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default Addcategory