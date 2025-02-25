import React from 'react'

const FilmModal = ({ isOpen, closeModal, movies }) => {
    return (
        <>

            <div className={`modal modal-lg fade ${isOpen ? "show d-block" : "d-none"}`} id="filmModal" tabIndex="-1" aria-labelledby="filmModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="filmModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body">
                            {movies?.known_for?.map((movie) => (
                                <div>
                                    <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="Film Posteri" />
                                    <h5>{movie.title}</h5>
                                    <p>{movie.overview}</p>
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