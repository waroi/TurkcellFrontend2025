import { useState } from 'react';

export default function BlogForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    date: '',
    detail: '',
    image: '',
    author: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className='container mt-5' onSubmit={handleSubmit}>
      <h1 className='mb-4 py-4'>Yeni Blog Oluştur</h1>

      {Object.keys(formData).map((key) => (
        <div className='mb-3' key={key}>
          <label className='form-label'>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
          <input
            type='text'
            className='form-control'
            name={key}
            value={formData[key]}
            onChange={handleChange}
          />
        </div>
      ))}

      <button type='submit' className='btn btn-orange'>
        Blog Oluştur
      </button>
    </form>
  );
}
