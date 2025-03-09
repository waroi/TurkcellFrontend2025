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
                            {(publisherName == 'publisher' || publisherName === 'admin') && <li className="nav-item">
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
                                    <a className="nav-link d-flex gap-2 active" href="#" onClick={signOut}>Çıkış
                                        <svg width={15} fill='#1A5F7A' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg>
                                    </a>
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