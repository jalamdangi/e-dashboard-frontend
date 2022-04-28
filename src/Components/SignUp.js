import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const Navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  useEffect(()=>{
    const auth = localStorage.getItem("user")
    if(auth){
      Navigate('/')
    }
  })
  const getData = async (e) => {
    e.preventDefault()
    // console.log(name,email,password);
    // setName(""),setEmail(""),setPassword("")
    let result = await fetch('http://localhost:5000/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    result = await result.json()
    localStorage.setItem('user', JSON.stringify(result))
    // console.log(result)
    if (result) {
        Navigate('/')
    }
  }
  return (
    <div>
      <div className="container w-80 bg-light">
        <h4 className="py-3">User Registration Page</h4>
        <form>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-control"
            />
            <small className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="form-control"
            />
          </div>
          <button onClick={getData} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
