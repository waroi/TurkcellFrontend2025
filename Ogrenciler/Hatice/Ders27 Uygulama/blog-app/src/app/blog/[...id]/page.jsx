const BlogItem = ({ params }) => {
  if (!params || !params.id) {
    return <div>Geçersiz Blog ID</div>;
  }

  return <div>Blog ID: {params.id}</div>;
};

export default BlogItem;
