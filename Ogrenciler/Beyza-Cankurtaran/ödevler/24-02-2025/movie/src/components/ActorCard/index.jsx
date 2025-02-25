import React from 'react'

const ActorCard = (props) => {
  return (
    <div>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.gender}</li>
          <li className="list-group-item">{props.known_for_department}</li>
          <li className="list-group-item">{props.popularity}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
    </div>
  )
}

export default ActorCard;