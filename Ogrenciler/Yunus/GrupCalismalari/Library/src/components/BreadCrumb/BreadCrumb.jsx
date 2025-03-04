import { NavLink } from "react-router"

const BreadCrumb = ({ path, last }) => {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><NavLink to="/">Anasayfa</NavLink></li>
                    {path.map((path, index) => <li key={index} className="breadcrumb-item">
                        <NavLink to={path.toLowerCase() === 'kitaplar' ? '/books' : '/' + path}> {path} </NavLink></li>)}
                    <li className="breadcrumb-item active" aria-current="page">
                        {last}
                    </li>

                </ol>
            </nav >
        </>
    )
}

export default BreadCrumb