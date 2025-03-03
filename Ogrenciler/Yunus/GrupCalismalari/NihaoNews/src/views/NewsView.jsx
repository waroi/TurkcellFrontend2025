import { Outlet } from "react-router"
import TopHeadlinesComponent from "../components/TopHeadlines/TopHeadlinesComponent"

const NewsView = () => {
    return (
        <>
            <Outlet />
            <TopHeadlinesComponent/>
        </>
    )
}

export default NewsView