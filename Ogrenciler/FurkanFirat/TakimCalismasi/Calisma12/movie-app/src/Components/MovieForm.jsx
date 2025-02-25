export default function MovieForm({ setMovieQuery, handleMovieSubmit }) {
  return (
    <form onSubmit={handleMovieSubmit} className='col-12 col-md-8 mb-3'>
      <div className='mb-3'>
        <input
          type='text'
          className='form-control'
          id='movieSearchInput'
          aria-label='Search'
          placeholder='Film ara...'
          onChange={(e) => setMovieQuery(e.target.value)}
        />
      </div>
      <button type='submit' className='btn btn-primary w-100'>
        Film Ara
      </button>
    </form>
  );
}
