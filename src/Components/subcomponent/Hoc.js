import React, { useState } from 'react'

const Hoc = () => {
  return (
    <>
      <h4 className="p-2 text-green text-center">Welcome To Hoc Component..</h4>
      <Hocred cmp={Counter}></Hocred>
      <Hocgreen cmp={Counter}></Hocgreen>
      <Hocblue cmp={Counter}></Hocblue>
    </>
  )
}
const Hocred = (props) => {
  return (
    <h2 className="w-100 p-3 bg-danger text-center">
      <props.cmp />
    </h2>
  )
}
const Hocgreen = (props) => {
  return (
    <h2 className="w-100 p-3 bg-success text-center">
      <props.cmp />
    </h2>
  )
}
const Hocblue = (props) => {
  return (
    <h2 className="w-100 p-3 bg-dark text-center">
      <props.cmp />
    </h2>
  )
}
const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)} className="btn btn-info">
          update
        </button>
      </div>
    </>
  )
}

export default Hoc
