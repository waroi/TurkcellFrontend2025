import React from 'react';

const DeleteBlogButton = ({ DeletePost, id }) => {
    console.log("DeleteBlogButton render edildi! ID:", id);
    return (
        <button
            onClick={() => {
                console.log("Butona tıklandı! ID:", id);
                DeletePost(id);
            }}
            className="btn btn-danger mb-2"
        >
            Sil
        </button>
    );
};

export default DeleteBlogButton;