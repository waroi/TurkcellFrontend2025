import React, { useState, useEffect } from 'react'
import { fetchTime } from "../../services/service";
import "./Time.css"
const Time = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const fetch = await fetchTime("balikesir");
                setData(fetch);
                console.log("ff", fetch);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);
    return (
        <div className='time d-flex justify-content-center bg-success text-center text-white rounded mt-5 pt-4'>
            <img src="https://static.hurriyet.com.tr/static/images/redesign/ramadan-2025-bg-left-2.png" alt="" />
            <div className=''>
                <h4 className='p-5'>İftar Vakti : </h4>
            </div>
            <div>
                <h4 className='p-5'>{data.length > 4 ? data[4].saat : "Yükleniyor..."}</h4>
            </div>
            <img src="https://static.hurriyet.com.tr/static/images/redesign/ramadan-2025-bg-left-2.png" alt="" />
        </div>
    )
}

export default Time;