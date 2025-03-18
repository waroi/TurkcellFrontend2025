export default function BlogUpdateForm({ formData, handleChange, handleUpdate, loading }) {
    if (loading) {
      return <h1 className='mb-4 py-5 text-center'>Güncelleniyor...</h1>;
    }
  
    return (
      <div className='container mt-5'>
        <h1 className='mb-4 py-4'>Blog Güncelle</h1>
        
        {["title", "content", "detail", "date", "author", "image"].map((field, index) => (
          <div key={index} className='mb-3'>
            <label className='form-label'>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            {field === "content" ? (
              <textarea className='form-control' rows={5} name={field} value={formData[field]} onChange={handleChange}></textarea>
            ) : (
              <input type='text' className='form-control' name={field} value={formData[field]} onChange={handleChange} />
            )}
          </div>
        ))}
  
        <button className='btn btn-orange' onClick={handleUpdate}>
          Güncelle
        </button>
      </div>
    );
  }
  