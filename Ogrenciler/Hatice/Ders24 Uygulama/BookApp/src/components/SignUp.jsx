import { createUser } from "../firebase/authService"
import { useState } from 'react';



const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const onSubmit = async (e) => {
        e.preventDefault()
        await createUser(email, password)
    }

    return (
        <>
            <h1>SignUp</h1>
            <form
                onSubmit={onSubmit}
            >

                <div className="mb-3">
                    <label for="name" className="form-label">Ad</label>
                    <input type="text" className="form-control" id="name" aria-describedby="nameHelp" />

                </div>
                <div className="mb-3">
                    <label for="surname" className="form-label">Soyad</label>
                    <input type="text" className="form-control" id="surname" aria-describedby="surnameHelp" />

                </div>
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

export default SignUp