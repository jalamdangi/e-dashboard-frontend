import React, { useState, useEffect } from 'react'

const Product = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getProduts()
  }, [])
  const getProduts = async () => {
    let result = await fetch('http://localhost:5000/productlist')
    result = await result.json()
    setProducts(result)
  }
  // console.log(products);
  const deleteProduct = async (id) => {
    // alert(id);
    let result = await fetch(`http://localhost:5000/deleteproduct/${id}`, {
      method: 'delete',
    })
    result = await result.json()
    if (result) {
      getProduts()
    }
  }

  return (
    <>
      <div className="container-fluid bg-light">
        <h2 className="text-center p-2">E - Dashboard</h2>
        <div className="row">
          {products.map((item, index) => {
            return (
              <div className="col-sm-4 p-2" key={index.toString()}>
                <div className="card bg-info">
                  <div className="card-body">
                    <h5 className="text-capitalize">
                      {index + 1} {item.productname}
                    </h5>
                    <p className="text-capitalize pl-2">
                      Brand : {item.productbrand}
                    </p>
                    <p className="pl-2">Price : {item.productprice}</p>
                    <div className="row">
                      <div className="col-md-6">
                        <a href="#" className="btn btn-warning">
                          Chek More
                        </a>
                      </div>
                      <div className="col-md-6 text-right mt-2 text-capitalize">
                        Category : {item.productcategory}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteProduct(item._id)}
                    className="btn btn-danger"
                  >
                    Delete Product
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Product
