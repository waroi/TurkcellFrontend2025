import { useState } from 'react';
import FormButon from '../../../component/atoms/FormButon';
import FormInput from '../../../component/atoms/FormInput';
import FormTextArea from '../../../component/atoms/FormTextArea';

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
          <label className='form-label'>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </label>
          {key === 'content' ? (
            <FormTextArea
              name={key}
              value={formData[key]}
              onChange={handleChange}
            />
          ) : (
            <FormInput
              type='text'
              name={key}
              value={formData[key]}
              onChange={handleChange}
            />
          )}
        </div>
      ))}
      <div className='mx-auto w-25'>
        <FormButon text='Blog Oluştur' />
      </div>
    </form>
  );
}
