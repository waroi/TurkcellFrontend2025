import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const Hero = ({ posts }) => {
    // posts gelmiyor, boş dönüyor burayı kontrol edelim
    //randomPosts'u useState ile tanımlayınca geldi veriler çok anlamadım ama sorun buymuş?
    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                {posts.map((post, index) => (
                    <div key={index} className="carousel-item active">
                        <img src={post.image_url} className="d-block w-100" alt={post.title} />
                        <div className="position-absolute start-0 top-0 m-3 bg-dark text-white px-3 py-1 rounded">
                            <h4 className="m-0">{post.category}</h4>
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className='mt-5'>{post.title}</h1>
                            <div className="d-flex gap-3 justify-content-center">
                                <p className='bg-secondary text-white px-3 py-1 rounded'><span className='me-2'><FontAwesomeIcon icon={faUser} /></span>{post.author}</p>
                                <p className='bg-secondary text-white px-3 py-1 rounded'><span className='me-2'><FontAwesomeIcon icon={faCalendarDays} /></span>{post.date}</p>
                            </div>
                            <p>{post.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}

export default Hero