export default function CategoryNav() {
  return (
    <div className='mb-3'>
      <h1 className='fs-2 mb-3'>OVERVIEW</h1>
      <div className='categoryNav d-flex flex-column flex-md-row fs-5 gap-2'>
        <span className='btn rounded-pill text-bg-warning '>All Books</span>
        <span className='btn rounded-pill text-bg-secondary'>Fiction</span>
        <span className='btn rounded-pill text-bg-secondary'>Non-Fiction</span>
        <span className='btn rounded-pill text-bg-secondary'>Biography</span>
        <span className='btn rounded-pill text-bg-secondary'>History</span>
        <span className='btn rounded-pill text-bg-secondary'>
          Romance Novel
        </span>
        <span className='btn rounded-pill text-bg-secondary'>Horror</span>
        <span className='btn rounded-pill text-bg-secondary'>Crime</span>
      </div>
    </div>
  );
}
