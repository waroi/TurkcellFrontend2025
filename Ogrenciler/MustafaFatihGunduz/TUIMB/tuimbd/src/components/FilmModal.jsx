import React from 'react'

const FilmModal = ({ isOpen, closeModal, movies }) => {
    return (
        <>
            <div className={`modal secondary fade ${isOpen ? "show d-block" : "d-none"}`} id="filmModal" tabIndex="-1" aria-labelledby="filmModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-3" id="filmModalLabel">
                                {movies?.name} Filmleri
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body">
                            {movies?.known_for?.map((movie, index) => (
                                <div className='d-flex mb-3 gap-3 border border-white' key={movie.id || index}>
                                    <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="Film Posteri" />
                                    <div className='d-flex flex-column align-items-start justify-content-center text-start'>
                                        <h5 className='fs-3 mb-4 '>{movie.title}</h5>
                                        <p>{movie.overview}</p>
                                    </div>
                                </div>

                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilmModal