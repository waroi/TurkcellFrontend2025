import CategoryBar from "./CategoryBar"
import NavBar from "./Navbar"

const Header = () => {
  return (
    <>
    <div className="navbar-news position-sticky sticky-top ">
      <NavBar />
      <CategoryBar />
    </div>
    </>
  )
}

export default Header