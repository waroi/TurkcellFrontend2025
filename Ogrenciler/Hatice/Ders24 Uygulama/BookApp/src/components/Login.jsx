import { useNavigate } from "react-router";
import { login, fetchUserPublisher } from "../firebase/authService";
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [publisher, setPublisher] = useState(null); 

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const loggedUser = await login(email, password); 
            const userPublisher = await fetchUserPublisher(loggedUser.uid);
            setPublisher(userPublisher);
            console.log("User Publisher:", userPublisher);

            navigate("/"); 
        } catch (error) {
            console.error("Error during login:", error.message);
        }
    };

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
};

export default Login;
