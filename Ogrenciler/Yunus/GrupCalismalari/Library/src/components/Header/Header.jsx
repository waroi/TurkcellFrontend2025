import { onAuthStateChanged } from 'firebase/auth';
import { use, useEffect, useState } from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router'
import { auth } from '../../firebase/firebase';
import { Auth } from '../../api/auth';

const Header = () => {
    const [login, setLogin] = useState(false)
    const [publisherName, setPublisherName] = useState('')
    const [state, setState] = useState('user')
    const [menuVisible, setMenuVisible] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                setLogin(true)
                const userData = await Auth.fetchUserByUid(user.uid)
                setPublisherName(userData.state)
                setState(userData.state)
            }
        });
    }, [navigate])

    const toggleMenu = () => {
        setMenuVisible(prev => !prev);
    };

    const signOut = () => {
        Auth.signout()
        setLogin(false)
        navigate('/login')
    }


    return (
        <>
            <nav className="navbar py-3 navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src="../logo.png" width={150} className='img-fluid' alt="Balığın Kütüphanesi" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Anasayfa</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/popular-books">Kitap Ara</NavLink>
                            </li>
                            {(publisherName == 'publisher' || publisherName === 'admin') && <li className="nav-item">
                                <NavLink className="nav-link active" to="/publisher">Yayınevi Sayfası</NavLink>
                            </li>}
                            {state === 'admin' && <li className="nav-item">
                                <NavLink className="nav-link active fw-bold" to='/admin'>Kullanıcı Listesi</NavLink>
                            </li>}
                            <li className="nav-item">
                                <div className="dropdown d-flex align-items-center">
                                    <a className="dropdown-toggle btn d-flex align-items-center" data-bs-toggle="dropdown" role='button' onClick={toggleMenu}>
                                        <i className="bi bi-person-circle" style={{ fontSize: '30px', color: '#1A5F7A', marginRight: '5px' }}></i>
                                        <span>Giriş Yap</span>
                                    </a>
                                    {menuVisible && (
                                        <div className="user-menu dropdown-menu">
                                            {!login ? (
                                                <>
                                                    <NavLink className="nav-link" to="/login" onClick={() => setMenuVisible(false)}>Giriş yap</NavLink>
                                                    <NavLink className="nav-link" to="/register" onClick={() => setMenuVisible(false)}>Kayıt ol</NavLink>
                                                </>
                                            ) : (
                                                <a className="nav-link" onClick={() => { signOut(); setMenuVisible(false); }}>Çıkış</a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header