import { Outlet, NavLink } from 'react-router'

const NewView = () => {
    return (
        <div>
            <h1>Haberler</h1>
            <Outlet />
            <ul>
                <li>
                    <NavLink to="/news/economy">Ekonomi Haberleri</NavLink>
                </li>
                <li>
                    <NavLink to="/news/sport">Spor Haberleri</NavLink>
                </li>
            </ul>
            <p>FOOOOOOOOTERRRRRRRRR</p>
        </div>
    )
}

export default NewView