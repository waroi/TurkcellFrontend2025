import React from 'react'
import Hazal from '../assets/hazall.jpg';
import Beyza from '../assets/beyza.jpg';
import Oğuzhan from '../assets/oğuzhan.jpg';
const Author = () => {
    return (
        <div className='container my-3 pb-5 mb-5'>
            <h1 className="text-center pt-5 pb-5">Hakkımızda</h1>
            <div className="card-group">
                <div className="card">
                    <img src={Hazal} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Hazal's Journey</h5>
                        <p className="card-text">This is Hazal.She is a traveller and a blogger.She want sto the travel the world.Follow her journey!</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src={Beyza} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Beyza's Journey</h5>
                        <p className="card-text">This is Beyza.She is a traveller and a blogger.She want sto the travel the world.Follow her journey!</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 weeks ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src={Oğuzhan} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Oğuzhan's Journey</h5>
                        <p className="card-text">This is Oğuzhan.He is a blogger and an erasmus student.He likes to take pictures of the wild.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Author;