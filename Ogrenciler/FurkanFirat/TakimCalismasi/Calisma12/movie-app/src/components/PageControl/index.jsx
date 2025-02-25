import Pagination from 'react-bootstrap/Pagination';

export default function PageControl({
  currentPage,
  totalPages,
  handlePageChange,
}) {
  return (
    <div className='d-flex justify-content-center'>
      <Pagination>
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />

        {[...Array(totalPages).keys()].slice(0, 2).map((num) => (
          <Pagination.Item
            key={num + 1}
            active={num + 1 === currentPage}
            onClick={() => handlePageChange(num + 1)}
          >
            {num + 1}
          </Pagination.Item>
        ))}
        {totalPages > 2 ? (
          <>
            <Pagination.Ellipsis />
            <Pagination.Item onClick={() => handlePageChange(totalPages)}>
              {totalPages}
            </Pagination.Item>
          </>
        ) : (
          <></>
        )}

        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
}
