import React from 'react';

const DeleteBlogButton = ({ DeletePost, postId }) => {
    return <button onClick={() => DeletePost(postId)} className="btn btn-danger mb-2">Sil</button>;
};

export default DeleteBlogButton;