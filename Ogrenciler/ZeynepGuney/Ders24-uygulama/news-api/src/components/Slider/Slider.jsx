const Slider = ({ news }) => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            {/* <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div> */}
            <div className="carousel-inner w-100">
                {news.map((neww, index) => (
                    <div key={index} className="carousel-item active">
                        <img src={neww.image} className="d-block h-100" alt={neww.name} />
                        <div className="position-absolute start-0 top-0 m-3 bg-dark text-white px-3 py-1 rounded">
                            <h4 className="m-0">{neww.source}</h4>
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className='mt-5'>{neww.name}</h1>
                        </div>
                        {/* <button>
                            <a href={neww.url}>Detaylar İçin Tıklayın</a>
                        </button> */}
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

export default Slider