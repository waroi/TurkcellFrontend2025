import { NavLink } from "react-router"
import { signOut } from "../../../firebase/authControl"
import { useSelector } from "react-redux"



const Navbar = () => {
    const button = useSelector((state) => state.button.button);
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand d-flex align-items-center" href="#"><img src="/cat.png" width={"70px"}></img><h2 className="">Book</h2></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <NavLink to="/login" className={`btn btn-primary ${button == "d-none"? "d-flex":"d-none" }`}>
                            Login
                        </NavLink>
                        <NavLink to={"/"} className={`btn btn-outline-danger ${button}`} type="submit" onClick={signOut}>Log Out</NavLink>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar