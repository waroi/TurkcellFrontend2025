export default function SearchForm({
  searchValue,
  setSearchValue,
  fetchUserAndRepoData,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserAndRepoData();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='row mt-3 mb-3 g-1'>
          <div className='col-12 col-md-10'>
            <input
              type='text'
              className='form-control'
              id='username'
              value={searchValue}
              aria-describedby='usernameHelp'
              placeholder='Search...'
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <div className='col-12 col-md-2'>
            <button type='submit' className='btn btn-outline-primary w-100'>
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
