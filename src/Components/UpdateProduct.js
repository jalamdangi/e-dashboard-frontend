import React, { useEffect,useState } from "react";
import addproduct_image from '../images/addproduct_image.svg'
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
    const { id } = useParams()
    const [productname, setProductname] = useState("")
    const [productprice, setProductprice] = useState("")
    const [productcategory, setProductcategory] = useState("")
    const [productbrand, setProductbrand] = useState("")

    useEffect(() => {
        // console.log(id);
        getProductById();
    }, [])
    const getProductById = async () =>{
        let result = await fetch(`http://localhost:5000/fetchproductbyid/${id}`);
        result = await result.json()
        // console.log(result);
        setProductname(result.productname)
        setProductprice(result.productprice)
        setProductcategory(result.productcategory)
        setProductbrand(result.productbrand)
    }
    return (
        <>
            <div className="container bg-light border">
                <div className="row">
                    <div className="col-md-5 pt-5">
                        <h4 className="addproduct-head">Update Your Product Here</h4>
                        <form>
                            <div className="form-group">
                                <label>Product Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e)=>setProductname(e.target.value)}
                                    value={productname}
                                />
                                <small className="form-text text-muted">
                                    We'll never share your email with anyone else.
                                </small>
                            </div>
                            <div className="form-group">
                                <label>Product Price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e)=>setProductprice(e.target.value)}
                                    value={productprice}
                                />
                            </div>
                            <div className="form-group">
                                <label>Product Category</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e)=>setProductcategory(e.target.value)}
                                    value={productcategory}
                                />
                            </div>
                            <div className="form-group">
                                <label>Company/Brand</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e)=>setProductbrand(e.target.value)}
                                    value={productbrand}
                                />
                            </div>
                            <button type="submit" className="btn btn-success">
                                Update Product
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

export default UpdateProduct;