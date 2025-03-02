import CategoryBar from "./CategoryBar"
import NavBar from "./Navbar"

const Header = () => {
  return (
    <>
    <div className="position-sticky sticky-top bg-body-tertiary">
      <NavBar />
      <CategoryBar />
    </div>
    </>
  )
}

export default Header