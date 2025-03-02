import React from 'react'
import { NavLink } from 'react-router'



const Card = (item) => {
    console.log(item)
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
