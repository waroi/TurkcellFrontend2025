import { useState } from "react"
import { NavLink, useNavigate } from "react-router"
import { Auth } from "../../api/auth";
import { userInitialState } from "../../utils/variables";

const Login = () => {
    const [user, setUser] = useState(userInitialState)
    const navigate = useNavigate()
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        });
    };

    const login = (event) => {
        event.preventDefault()
        if (user.password.length < 6) {
            alert('Şifreniz en az 6 karakterden oluşturmalıdır')
        } else {
            Auth.signIn(user.email, user.password)
            navigate('/')
        }
    }

    return (
        <>
            <div className="container">
                <form className="form-signin" onSubmit={login}>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="Bootstrap" width="72" height="72" />

                    <div className="mt-3">
                        <label htmlFor="inputEmail" className="sr-only">Email adresiniz</label>
                        <input onChange={handleInputChange} name="email" type="email" id="inputEmail" className="form-control" placeholder="Email adresiniz" required="" autoFocus="" />

                    </div>
                    <div className="mt-3">
                        <label htmlFor="inputPassword" className="sr-only">Şifre</label>
                        <input onChange={handleInputChange} name="password" type="password" id="inputPassword" className="form-control" placeholder="Şifre" required="" />
                    </div>
                    <div className='my-3'>
                        <NavLink to={'/login'}>Hesabınız var mı? Giriş yapın</NavLink>
                    </div>
                    <button className="btn btn-primary btn-block mt-3" type="submit">Giriş yap</button>
                </form>
            </div>
        </>
    )
}

export default Login