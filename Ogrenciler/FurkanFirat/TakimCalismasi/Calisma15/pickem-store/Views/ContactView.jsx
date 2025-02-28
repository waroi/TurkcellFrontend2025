import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';

export default function ContactView() {
  return (
    <>
      <Navbar />
      <main class='main-section'>
        <header class='mt-20'>
          <div class='container-fluid text-white p-5 text-center'>
            <h1 class='fw-bold'>
              <i class='bi bi-envelope'></i> İLETİŞİM
            </h1>
          </div>
        </header>
        <div class='container-fluid text-white'>
          <div class='d-flex align-items-center justify-content-center flex-column'>
            <form
              class='contact-us-form needs-validation col-10 col-sm-8 col-xxl-6 p-5 bg-extra-dark-purple rounded shadow'
              novalidate
            >
              <h4 class='mb-4 p-2'>
                İLETİŞİM <span class='text-header-purple'>FORMU</span>{' '}
              </h4>
              <div class='row m-0 p-0'>
                <div class='col-12 col-md-6 p-2'>
                  <label for='firstName'>Ad</label>
                  <input
                    class='col-12 form-control'
                    type='text'
                    id='firstName'
                    required
                  />
                  <div class='valid-feedback'>İyi görünüyor!</div>
                  <div class='invalid-feedback'>Bu alan boş bırakılamaz.</div>
                </div>
                <div class='col-md-6 col-12 p-2'>
                  <label for='lastName'>Soyad</label>
                  <input
                    class='col-12 form-control'
                    type='text'
                    id='lastName'
                    required
                  />
                  <div class='valid-feedback'>İyi görünüyor!</div>
                  <div class='invalid-feedback'>Bu alan boş bırakılamaz.</div>
                </div>
              </div>
              <div class='col-md-12 col-12 p-2'>
                <label for='email'>Email</label>
                <input
                  class='col-12 form-control'
                  type='email'
                  id='email'
                  required
                />
                <div class='valid-feedback'>İyi görünüyor!</div>
                <div class='invalid-feedback'>Bu alan boş bırakılamaz.</div>
              </div>
              <div class='col-md-12 col-12 p-2'>
                <label for='subject'>Konu</label>
                <input
                  class='col-12 form-control'
                  type='subject'
                  id='subject'
                  required
                />
                <div class='valid-feedback'>İyi görünüyor!</div>
                <div class='invalid-feedback'>Bu alan boş bırakılamaz.</div>
              </div>
              <div class='col-md-12 col-12 p-2'>
                <label for='txtMessage'>Mesaj</label>
                <textarea
                  name='message'
                  cols='30'
                  rows='7'
                  class='col-12 form-control'
                  type='text'
                  id='txtMessage'
                  placeholder='Mesajınızı buraya yazın...'
                  required
                ></textarea>
                <div class='valid-feedback'>İyi görünüyor!</div>
                <div class='invalid-feedback'>Bu alan boş bırakılamaz.</div>
              </div>
              <div class='col-12 p-2'>
                <button
                  class='py-2 px-3 btn btn-primary text-white'
                  type='submit'
                >
                  Mesaj Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
