export default function ErrorAlert() {
    return (
      <div className="container my-5 text-center">
        <div className="alert alert-warning py-4">
          <h1 className="display-5">Blog Bulunamadı!</h1>
          <p className="lead mt-3">The requested blog post could not be found.</p>
          <a href="/" className="btn btn-outline-warning mt-3">
            Ana Sayfaya Dön
          </a>
        </div>
      </div>
    );
  }
  