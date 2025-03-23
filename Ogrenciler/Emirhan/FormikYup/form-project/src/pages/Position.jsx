import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "../components/Navbar";

const Position = () => {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const fetchPositions = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "job"));
                const positionsList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setPositions(positionsList);
            } catch (error) {
                console.error("Veri çekme hatası:", error);
            }
        };

        fetchPositions();
    }, []);

    return (
        <div className='container'>
            <Navbar />
            <div className="mb-5">
                <h2 className="text-center my-5">Açık Pozisyonlar – Kariyerine Yeni Bir Adım At!</h2>
                <div className="fs-5">

                    Yeteneklerinizi gösterebileceğiniz, kendinizi geliştirebileceğiniz ve dinamik bir ekip içinde yer alabileceğiniz açık pozisyonlarımızı keşfedin. Her pozisyon, kariyerinizi bir adım öteye taşımanız için fırsatlar sunuyor.
                    <br /><br />

                    Sana uygun bir pozisyon bulduğunda hemen başvur ve kariyer yolculuğuna bizimle devam et! Yenilikçi projelerde yer alarak profesyonel dünyada iz bırakma şansını kaçırmayın.
                </div>
            </div>
            <div className="row">
                {positions.map((position) => (
                    <div className="col-sm-6" key={position.id}>
                        <div className="card p-2 mb-4">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h5 className="card-title">{position.title}</h5>
                                    <div className="d-flex gap-2 align-items-center">
                                        <i class="fa-solid fa-calendar-days text-danger"></i>
                                        <span className="text-danger fw-medium">{position.endDate}</span>
                                    </div>
                                </div>
                                <p className="card-text">{position.description}</p>

                                <div className="d-flex gap-3 mb-3 justify-content-between">
                                    <div className="d-flex gap-3">

                                        <div className="d-flex gap-2 align-items-center">
                                            <i class="fa-solid fa-location-dot"></i>
                                            <span>{position.location}</span>
                                        </div>
                                        <div className="d-flex gap-2 align-items-center">
                                            <i class="fa-solid fa-briefcase"></i>
                                            <span>{position.type}</span>
                                        </div>
                                    </div>
                                    <a href={`/position/${position.id}`} className="btn btn-primary">İncele</a>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Position;
