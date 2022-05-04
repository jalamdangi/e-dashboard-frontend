import React, { useEffect, useState } from 'react'

const Userdata = () => {
  let [data, setData] = useState([])
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    let result = await fetch('https://jsonplaceholder.typicode.com/posts')
    result = await result.json()
    setData(result)
    // console.log(result.Countries[2].Country);
    // console.log(result.Global.NewConfirmed);
  }
  // console.log(data)

  return (
    <>
      <div className="container-fluid bg-light">
        <h4 className="p-3">Fetching user data</h4>
      </div>
      <div className="row">
        {data.map((item, index) => {
          return (
            <div className="col-md-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.id}</h5>
                  <p className="card-text">{item.tile}</p>
                  <p className="card-text">{item.body}</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Userdata
