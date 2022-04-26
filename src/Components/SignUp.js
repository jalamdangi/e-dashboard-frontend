import React, {useState} from 'react'

const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const getData = (e) => {
        e.preventDefault();
        console.log(name,email,password);
    }
    return (
        <div>
            <div className="container w-50">
                <h4 className='py-3' >User Registration Page</h4>
                <form>
                    <div className="form-group">
                        <label>Your Name</label>
                        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className="form-control" />
                        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className="form-control" />
                    </div>
                    <button onClick={getData} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp