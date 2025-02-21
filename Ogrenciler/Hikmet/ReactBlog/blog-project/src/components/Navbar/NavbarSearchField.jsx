import React, { useState } from "react";
import styles from "./Navbar.module.css";
import CreateBlogModal from "../CreateBlog/CreateBlogModal"; // Modal bileşenini içe aktar

function NavbarSearchField() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleButtonClick() {
    setIsModalOpen(true);
  }

  return (
    <>
      <button className="badge" onClick={handleButtonClick}>
        Create Blog
      </button>
      {isModalOpen && <CreateBlogModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

export default NavbarSearchField;
