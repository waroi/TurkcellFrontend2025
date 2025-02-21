import React, { useState } from "react";
import styles from "./CreateBlogModal.module.css";

function CreateBlogModal({ onClose }) {
  function handleSubmit(event) {
    event.preventDefault();
    onClose();
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Create Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Category</label>
            <input type="text" required />
          </div>
          <div className={styles.formGroup}>
            <label>Description</label>
            <input type="text" required />
          </div>
          <div className={styles.formGroup}>
            <label>Title</label>
            <input type="text" required />
          </div>
          <div className={styles.formGroup}>
            <label>Image</label>
            <input type="text" required />
          </div>
          <div className={styles.formGroup}>
            <label>Avatar</label>
            <input type="text" required />
          </div>
          <div className={styles.formGroup}>
            <label>Blog Content</label>
            <input type="text" required />
          </div>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text" required />
          </div>
          <button type="submit" className={styles.submitButton}>
            Create
          </button>
        </form>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default CreateBlogModal;
