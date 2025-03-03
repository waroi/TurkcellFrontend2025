import NavBar from "./Navbar"
import CategoryBar from "./CategoryBar"

const Header = () => {
  return (
    <>
    <div className="navbar-news position-sticky sticky-top ">
      <NavBar />
      <hr />
      <CategoryBar />
    </div>
    </>
  )
}

export default Header