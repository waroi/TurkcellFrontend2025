export default function PersonForm({ handlePersonSubmit, setPersonQuery }) {
  return (
    <form onSubmit={handlePersonSubmit} className='col-12 col-md-4 mb-3'>
      <div className='mb-3'>
        <input
          type='text'
          className='form-control'
          id='movieSearchInput'
          aria-label='Search'
          placeholder='Oyuncu Ara...'
          onChange={(e) => setPersonQuery(e.target.value)}
        />
      </div>
      <button type='submit' className='btn btn-primary w-100'>
        Oyuncu Ara
      </button>
    </form>
  );
}
