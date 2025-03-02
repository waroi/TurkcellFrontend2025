import { Outlet } from "react-router"

const NewsView = () => {
    return (
        <>
            <div className="container">
                <h3 className="display-3">Haberler</h3>
            </div>
            <Outlet />

        </>
    )
}

export default NewsView