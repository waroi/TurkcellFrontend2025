export default function BlogList({ blogs, onDelete, onEdit }) {
    return (
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Başlık</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>{blog.id}</td>
              <td>{blog.title}</td>
              <td>
                <button className="btn btn-success me-2" onClick={() => onEdit(blog.id)}>
                  Düzenle
                </button>
                <button className="btn btn-danger" onClick={() => onDelete(blog.id)}>
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  