import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Productdetail = () => {
  useEffect(() => {
    getProductDetail()
  }, [])
  const [data, setData] = useState('')
  const { id } = useParams()
  const getProductDetail = async () => {
    let result = await fetch(`http://localhost:5000/fetchproductbyid/${id}`)
    result = await result.json()
    setData(result)
  }
  const { _id, productname, productprice, productcategory, productbrand } = data
  return (
    <div>
      <div className="container-fluid bg-light" style={{ height: '100vh' }}>
        <div className="row">
          <div className="col-md-12 p-2">
            <h3>{productname}</h3>
          </div>
          <div className="col-md-12">
            <p className="text-justify" style={{ fontSize: '18px' }}>
              About Product : Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Odio sint doloremque ipsum error dolorem, perferendis beatae
              corrupti ullam illo cum voluptates fuga, facilis minus facere
              explicabo quibusdam magni culpa commodi dolor ea eius neque nemo.
              Velit ipsa excepturi porro, deserunt dolores aliquid neque
              corporis voluptatibus quam odit? Quasi repellat harum accusamus
              laboriosam qui commodi autem sit veniam reprehenderit, dolore
              exercitationem temporibus. Beatae praesentium veniam velit
              asperiores et porro dolore sed eligendi laboriosam, cumque, facere
              labore id expedita minus hic molestias voluptatum quam vel quos
              sequi quasi nam possimus, accusamus explicabo. Mollitia excepturi
              sunt doloremque itaque aut? Dolor minima voluptatem architecto.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              molestiae quaerat, iusto asperiores delectus nobis repellat hic
              quia blanditiis quasi ea ut iste dignissimos nostrum nesciunt,
              odio eum laudantium non id neque quidem reprehenderit culpa quas!
              Nostrum quo et rem suscipit itaque.
            </p>
            <h5 className="mt-3">{productprice}</h5>
          </div>
          <div className="col-md-2 mt-3">
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productdetail
