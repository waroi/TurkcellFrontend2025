import { useEffect } from "react"
import { useParams } from "react-router"
import { newsService } from "../api/newService"

const NewsDetailVİew = () => {
    const { newsId } = useParams()

    useEffect(() => {
        newsService.getTopHeadlines()
        const s = newsService.getNewsById(newsId)
    }, [newsId])
    return (
        <div>NewsDetailVİew</div>
    )
}

export default NewsDetailVİew