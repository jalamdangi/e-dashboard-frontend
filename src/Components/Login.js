import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  useEffect(()=>{
    const auth = localStorage.getItem("user")
    if(auth){
      navigate('/')
    }
  },[])
  const handleLogin = async (e) => {
    e.preventDefault()
    // console.log(email, password)
    let result = await fetch('http://localhost:5000/login', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    result = await result.json()
    console.log(result)
    if (result.name){
      localStorage.setItem('user', JSON.stringify(result));
      navigate('/')
    }else{
      alert('please enter correct details')
    }
  }
  return (
    <div>
      <div className="container w-80 bg-light">
        <h4 className="py-3">Login Page</h4>
        <form>
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
          <button onClick={handleLogin} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
