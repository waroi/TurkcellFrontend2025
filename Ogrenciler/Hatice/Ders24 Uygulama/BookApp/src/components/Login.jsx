import { useNavigate } from "react-router";
import { login } from "../firebase/authService"
import { useState } from 'react';



const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    const onSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)
        navigate("/")
    }

    return (
        <>
            <h1>Login</h1>
            <form
                onSubmit={onSubmit}
            >
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }} />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        value={password} onChange={(e) => { setPassword(e.target.value) }}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </>
    )
}

export default Login;