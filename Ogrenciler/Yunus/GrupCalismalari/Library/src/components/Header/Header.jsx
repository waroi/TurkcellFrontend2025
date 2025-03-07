import { onAuthStateChanged } from 'firebase/auth';
import { use, useEffect, useState } from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router'
import { auth } from '../../firebase/firebase';
import { Auth } from '../../api/auth';

const Header = () => {
    const [login, setLogin] = useState(false)
    const [publisherName, setPublisherName] = useState('')
    const [state, setState] = useState('user')

    const navigate = useNavigate()
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                setLogin(true)
                const userData = await Auth.fetchUserByUid(user.uid)
                setPublisherName(userData.publisherName)
                setState(userData.state)
                return navigate('/')
            }
        });
    }, [])

    const signOut = () => {
        Auth.signout()
        setLogin(false)
        navigate('/login')
    }

    return (
        <>
            <nav className="navbar py-3 navbar-expand-lg bg-body-tertiary">
                <div className="container flex-column">
                    <NavLink className="navbar-brand" to="/">
                        <img src="../logo.png" width={200} className='img-fluid' alt="Balığın Kütüphanesi" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Anasayfa</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/popular-books">Kitap Ara</NavLink>
                            </li>
                            {publisherName !== '' && <li className="nav-item">
                                <NavLink className="nav-link active" to="/publisher">Yayınevi Sayfası</NavLink>
                            </li>}
                            {!login ?
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" to="/login">Giriş yap</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" to="/register">Kayıt ol</NavLink>
                                    </li>
                                </> : <li className="nav-item">
                                    <a className="nav-link active" href="#" onClick={signOut}>ÇIKIŞ YAP BROOOOO</a>
                                </li>
                            }

                            {state === 'admin' && <li className="nav-item">
                                <NavLink className="nav-link active fw-bold" to='/admin'>Kullanıcı Listesi</NavLink>
                            </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header