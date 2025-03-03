import {NavLink} from 'react-router'

const Categories = () => {
  return (
    <div className='container d-flex flex-column flex-md-row align-items-center gap-3 mt-5 justify-content-center'>
        <NavLink to="/news/general" className="btn btn-primary rounded-pill px-4 py-3 w-100 fw-bold">General</NavLink>
        <NavLink to="/news/health" className="btn btn-danger rounded-pill px-4 py-3 w-100 fw-bold">Health</NavLink>
        <NavLink to="/news/sports" className="btn btn-warning rounded-pill px-4 text-white py-3 w-100 fw-bold">Sports</NavLink>
        <NavLink to="/news/tech" className="btn btn-info rounded-pill px-4 text-white py-3 w-100 fw-bold">Technology</NavLink>
        <NavLink to="/news/business" className="btn btn-success rounded-pill px-4 py-3 w-100 fw-bold">Business</NavLink>
    </div>
  )
}

export default Categories