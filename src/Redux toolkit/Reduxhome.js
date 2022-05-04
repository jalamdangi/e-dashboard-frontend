import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Reduxhome = (props) => {
    const dispatch = useDispatch();
    const {value} = useSelector(state => state.custom)
    const increment = () =>{
        dispatch({
            type:"increment"
        })  
    } 
    const decrement = () =>{
        dispatch({
            type:"decrement"
        })

    } 
    const incrementByVal = () =>{
        dispatch({
            type:"incrementByVal",
            payload:30
        })

    } 
  return (
    <div>
        <h3 className='text-center p-3'>Welcome To Redux..</h3>
        <div className="row text-center mb-4">
            <div className="col-md-12"><h4>{value}</h4></div>
        </div>
        <div className="row">
            <div className="col-md-4"><button onClick={increment} className='btn-info w-100 p-3'>Increment</button></div>
            <div className="col-md-4"><button onClick={decrement} className='btn-info w-100 p-3'>Decrement</button></div>
            <div className="col-md-4"><button onClick={incrementByVal} className='btn-info w-100 p-3'>Increment By Value</button></div>
        </div>
    </div>
  )
}

export default Reduxhome