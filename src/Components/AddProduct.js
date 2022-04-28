import React, { useState } from "react";
import addproduct_image from '../images/addproduct_image.svg'
const AddProduct = () => {
    const [productname, setProductname] = useState("")
    const [productprice, setProductprice] = useState("")
    const [productcategory, setProductcategory] = useState("")
    const [productbrand, setProductbrand] = useState("")
    const addProduct = async (e) => {
        e.preventDefault()
        // console.log(productname, productprice, productcategory, productbrand)
        const userid = JSON.parse(localStorage.getItem('user'))._id;
        // console.log(userid);
        if (!productname || !productprice || !productcategory || !productbrand) {
            alert("all field are required");
        }else{
            let result = await fetch('http://localhost:5000/addproduct', {
                method: 'post',
                body: JSON.stringify({ productname, productprice, productcategory, productbrand, userid }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json()
            console.log(result);
            setProductname("")
            setProductprice("")
            setProductcategory("")
            setProductbrand("")
        }
    }
    return (
        <>
            <div className="container bg-light border">
                <div className="row">
                    <div className="col-md-5 pt-5">
                        <h4 className="addproduct-head">Add Your Product Here</h4>
                        <form>
                            <div className="form-group">
                                <label>Product Name</label>
                                <input
                                    type="text"
                                    onChange={(e) => setProductname(e.target.value)}
                                    value={productname}
                                    className="form-control"
                                />
                                <small className="form-text text-muted">
                                    We'll never share your email with anyone else.
                                </small>
                            </div>
                            <div className="form-group">
                                <label>Product Price</label>
                                <input
                                    type="text"
                                    onChange={(e) => setProductprice(e.target.value)}
                                    value={productprice}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Product Category</label>
                                <input
                                    type="text"
                                    onChange={(e) => setProductcategory(e.target.value)}
                                    value={productcategory}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Company/Brand</label>
                                <input
                                    type="text"
                                    onChange={(e) => setProductbrand(e.target.value)}
                                    value={productbrand}
                                    className="form-control"
                                />
                            </div>
                            <button onClick={addProduct} type="submit" className="btn btn-success">
                                Add Product
                            </button>
                        </form>
                    </div>
                    <div className="col-md-7">
                        <img src={addproduct_image} className="addproduct-image" alt="error" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct;