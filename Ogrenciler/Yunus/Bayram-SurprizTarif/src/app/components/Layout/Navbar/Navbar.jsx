'use client'
import { useAuth } from "@/app/auth/hooks/useAuth"
import { useRequireAuth } from "@/app/lib/hooks/useRequireAuth"
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Navbar = () => {
    const { user, loading } = useRequireAuth()
    const { logout } = useAuth()

    return (
        <nav className="navbar navbar-expand-lg navbar-light py-3 shadow-sm">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" href="/">
                    <i className="fas fa-utensils me-2 text-warning"></i>
                    <span className="fw-bold fs-4">Sürpriz Tarif</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto me-auto">
                        <li className="nav-item">
                            <Link href='/' className="nav-link">Ana Sayfa</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/recipes">Tarifler</Link>
                        </li>
                    </ul>
                    {loading && (
                        <AiOutlineLoading3Quarters />

                    ) || user && (
                        <div className="d-flex">
                            <Link className="btn btn-warning me-2 text-white" href='/add/new'>Tarif Ekle</Link>
                            <button className="btn btn-outline-danger me-2" onClick={logout}>Çıkış Yap</button>
                        </div>
                    ) || (
                            <div className="d-flex">
                                <Link href={'/login'} className="btn btn-outline-warning me-2">Giriş Yap</Link>
                                <Link href={'/register'} className="btn btn-warning text-white">Kayıt Ol</Link>
                            </div>
                        )}

                </div>
            </div>
        </nav >
    )
}

export default Navbar