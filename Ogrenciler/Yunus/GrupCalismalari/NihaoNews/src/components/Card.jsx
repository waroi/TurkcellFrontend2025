import { NavLink } from 'react-router'



const Card = ({item}) => {
const defaultImgUrl =
        "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1740909615~exp=1740913215~hmac=e24e8489fcda35d4d46b0bab5e7e7c30b3b2975224599f03f94e00f11eddf16c&w=2000";
  return (
    <>
      	<NavLink
										to={`/news/${item.id}`}
										className="h-100 d-flex flex-column"
									>
										<div className="new-image">
											<img
												src={item.urlToImage}
												onError={({ currentTarget }) => {
													currentTarget.onerror = null;
													currentTarget.src = defaultImgUrl;
												}}
												className="img-fluid h-100 w-100 object-fit-cover"
												alt={item.title}
											/>
										</div>
										<h4 className="my-3">{item.title}</h4>
										<p className="new-description">
											{item.description.split("").slice(0, 40).join("")}
										</p>
									</NavLink>
    </>
  )
}

export default Card
