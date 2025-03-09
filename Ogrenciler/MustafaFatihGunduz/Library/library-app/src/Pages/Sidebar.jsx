import React from 'react'
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { ThemeContext } from "../context/ThemeContext";
import { getCurrentUser, logOut } from "../controller/AuthController";
import { readUser } from "../controller/DBController";

const Sidebar = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
	const books = useSelector((state) => state.book.books);
	const publishers = [...new Set(books.map((book) => book.publishing))];

	const [user, setUser] = useState(null);
	const navigate = useNavigate();
	useEffect(() => {
		handleUser();
	}, []);
	const handleUser = async () => {
		const currentUser = getCurrentUser();
		if (currentUser !== null) {
			const user = await readUser(currentUser.uid);
			setUser(user);
		}
	};
	const handleLogOut = async () => {
		try {
			await logOut();
			navigate("/login");
			setUser(null);
		} catch (error) {
			console.log("Error in handleLogOut: ", error);
		}
	};

  return (
    <aside className='left-side'>
        <div className="container py-5 px-3 mt-5 mb-5 d-flex flex-column">
          <ul className='nav flex-column'>
            <li className="nav-item"><a href="#" className="nav-link text-gray"><i className='fa fa-home  me-2 py-2 px-3 mb-2 mt-4'></i>Anasayfa</a></li>
            <li className="nav-item"><a href="#" className="nav-link"><i className='fa fa-book  me-2 py-2 px-3 mb-2'></i>Books</a></li>
            <li className="nav-item"><a href="#" className="nav-link"><i className='fa fa-heart  me-2 py-2 px-3 mb-2'></i>Favoriler</a></li>
            <li className="nav-item"><a href="#" className="nav-link"><i className='fa fa-newspaper  me-2 py-2 px-3 mb-2'></i>Yayın Evleri</a></li>
            <hr  className='ms-3 me-3'/>
            <li className="nav-item"><a href="#" className="nav-link"><i className='fa fa-address-card  me-2 py-2 px-3 mb-2'></i>İletişim</a></li>
            <li className="nav-item"><a href="#" className="nav-link"><i className='fa fa-info  me-2 py-2 px-3 mb-2'></i>Hakkımızda</a></li>
            <li className="nav-item"><a href="#" className="nav-link"><i className='fa fa-gear  me-2 py-2 px-3 mb-2'></i>Ayarlar</a></li>
            
          </ul>
          <ul className='nav flex-column'>
          <li className="nav-item"><a href="#" className="nav-link"><i class="fa-solid fa-right-from-bracket me-2 py-2 px-3 mb-2"></i>Çıkış yap</a></li>
          </ul>
        </div>
    </aside>
  )
}

export default Sidebar