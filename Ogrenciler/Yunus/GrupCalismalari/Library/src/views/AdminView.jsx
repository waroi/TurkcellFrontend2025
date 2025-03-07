import React, { useEffect, useState } from 'react'
import { FireStore } from '../api/fireStore'

const AdminView = () => {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        const getAllUsers = async () => {
            const ullist = await FireStore.getAllUsers()
            setUserList(ullist)
            console.log(ullist)
        }
        getAllUsers()
    }, [])


    return (
        <div className="container">

            {/* <li class="list-group-item">An item</li> */}

            {userList && userList.map(user => (
                <ul class="list-group mt-5  ">
                    <li className="list-group-item">
                        Email: {user.email}
                    </li>
                    <li className="list-group-item">
                        Yayınevi İsmi: {user.publisherName}
                    </li>
                    <li className="list-group-item">
                        UID: {user.uid}
                    </li>
                    <li className="list-group-item">
                        Kullanıcı Durumu: <span className="fw-bold">
                            {user.state}
                        </span>
                    </li>
                    <li className="list-group-item gap-3 d-flex flex-wrap">
                        Kullanıcı Durumunu değiştir:
                        <button
                            className={`btn ${user.state === 'admin' ? 'btn-primary' : 'btn-outline-primary'}`}>
                            Admin yap
                        </button>
                        <button
                            className={`btn ${user.state === 'publisher' ? 'btn-primary' : 'btn-outline-primary'}`}>
                            Yayınevi ata
                        </button>
                        <button
                            className={`btn ${user.state === 'user' ? 'btn-primary' : 'btn-outline-primary'}`}>
                            User durumuna getir
                        </button>
                    </li>
                </ul>
            ))}

        </div>

    )
}

export default AdminView