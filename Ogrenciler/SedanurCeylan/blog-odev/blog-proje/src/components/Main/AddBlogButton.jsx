import React from 'react';

function AddBlogButton({ toggleModal }) {
    return (
        <div className="text-center mb-4">
            <button onClick={toggleModal} className="btn btn-primary">
                Blog Ekle
            </button>
        </div>
    );
}

export default AddBlogButton;
