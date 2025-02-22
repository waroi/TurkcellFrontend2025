import React from 'react'

function MusicCard({ id, img, title, description, category }) {
    
    
    return (
        <div className="card">
            <img src={img} alt="music" />
            <div className="card-info">
                <h2>{title}</h2>
                <p>{description}</p>
                <span>{category}</span>
            </div>
        </div>
    )
    
}
