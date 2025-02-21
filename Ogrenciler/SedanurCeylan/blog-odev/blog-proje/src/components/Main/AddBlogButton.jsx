import React from 'react';

function AddBlogButton({ toggleModal }) {
    return (
        <div className="text-center mb-4">
            <button onClick={toggleModal} className="btn btn-success">
                Blog Ekle
            </button>
        </div>
    );
}

export default AddBlogButton;
