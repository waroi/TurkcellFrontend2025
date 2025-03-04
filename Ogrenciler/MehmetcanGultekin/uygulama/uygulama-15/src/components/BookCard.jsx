import React, { useState } from "react";
import "../components/BookCard.css";
const BookCard = () => {
    const [isFlipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!isFlipped);
    };

    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-4">
                        <div
                            className={`flip-card ${isFlipped ? "flipped" : ""
                                }`}
                        >
                            <div onClick={handleFlip} className="flip-card-inner">

                                <div className="flip-card-front">
                                    <div className="card-content">
                                        <img className="w-100 h-100 img-fluid object-fit-cover" src="https://i.idefix.com/resize/800/0/cache/600x600-0/originals/0000000105599-1.jpg" alt="felsefe" />
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="card-content">
                                        <p>Harry Potter ve Felsefe Taşı</p>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    );

}

export default BookCard