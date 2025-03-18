import FormButon from '../../../../component/atoms/FormButon';
import FormInput from '../../../../component/atoms/FormInput';
import FormTextArea from '../../../../component/atoms/FormTextArea';

export default function BlogUpdateForm({
  formData,
  handleChange,
  handleUpdate,
  loading,
}) {
  if (loading) {
    return <h1 className='mb-4 py-5 text-center'>Güncelleniyor...</h1>;
  }

  return (
    <div className='container mt-5'>
      <h1 className='mb-4 py-4'>Blog Güncelle</h1>

      <form onSubmit={handleUpdate}>
        {Object.keys(formData).map((field, index) => (
          <div key={index} className='mb-3'>
            <label className='form-label'>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            {field === 'content' ? (
              <FormTextArea
                name={field}
                value={formData[field]}
                onChange={handleChange}
              />
            ) : (
              <FormInput
                type='text'
                name={field}
                value={formData[field]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <div className='mx-auto w-25'>
          <FormButon text='Güncelle' />
        </div>
      </form>
    </div>
  );
}
