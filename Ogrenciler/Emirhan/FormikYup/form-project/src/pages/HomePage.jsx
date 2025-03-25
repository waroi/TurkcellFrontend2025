import React from 'react';
import Navbar from '../components/Navbar';

function HomePage() {
  return (
    <div >
      <Navbar />
      <header className="bg-dark text-white text-center py-10">
        <div className="container">
          <h1 className="display-4">ZenCode - Modern Yazılım Çözümleri</h1>
          <p className="lead">Yenilikçi, güvenilir ve sürdürülebilir yazılım hizmetleri sunuyoruz.</p>
          <a href="#services" className="btn btn-primary btn-lg mt-3">Hizmetlerimizi Keşfedin</a>
        </div>
      </header>


      <section id="services" className="container my-5">
        <h2 className="text-center mb-4 text-primary font-weight-bold">Hizmetlerimiz</h2>
        <p className="text-center mb-5 text-muted">İhtiyaçlarınıza özel çözümlerle, dijital dünyada güçlü bir varlık oluşturmanıza yardımcı oluyoruz.</p>
        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded-3">
              <img src="https://bairesdev.mo.cloudinary.net/blog/2023/09/How-Many-Web-Developers-in-the-World-1.jpg?tx=w_1920,q_auto" alt="Web Geliştirme" className="card-img-top rounded-3" />
              <div className="card-body text-center">
                <h4 className="card-title text-dark">Web Geliştirme</h4>
                <p className="card-text text-muted">Özel tasarlanmış, mobil uyumlu ve hızlı web siteleri geliştiriyoruz. Kullanıcı odaklı, SEO uyumlu çözümler sunarak, çevrimiçi varlığınızı güçlendiriyoruz.</p>
                <a href="#web" className="btn btn-primary">Detayları Gör</a>
              </div>
            </div>
          </div>


          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded-3">
              <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Building-a-career-in-Mobile-App-Development.jpg" alt="Mobil Uygulamalar" className="card-img-top rounded-3" />
              <div className="card-body text-center">
                <h4 className="card-title text-dark">Mobil Uygulamalar</h4>
                <p className="card-text text-muted">iOS ve Android platformlarında kullanıcı dostu uygulamalar oluşturuyoruz. Hem işlevsel hem de şık tasarımlar ile mobil deneyimi mükemmelleştiriyoruz.</p>
                <a href="#mobile" className="btn btn-primary">Detayları Gör</a>
              </div>
            </div>
          </div>


          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded-3">
              <img src="https://www.devopsinstitute.com/wp-content/uploads/2021/05/iStock-1277731016-scaled.jpg" alt="Bulut Çözümleri" className="card-img-top rounded-3" />
              <div className="card-body text-center">
                <h4 className="card-title text-dark">Bulut Çözümleri</h4>
                <p className="card-text text-muted">Güvenli ve ölçeklenebilir bulut altyapıları sağlıyoruz. İş süreçlerinizi hızlandıracak ve verilerinizi güvenli bir şekilde yönetebileceksiniz. Hizmetimize göz atın!</p>
                <a href="#cloud" className="btn btn-primary">Detayları Gör</a>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="display-4 text-primary font-weight-bold mb-4">Hakkımızda</h2>
          <p className="lead text-muted mb-5">ZenCode, modern yazılım teknolojileriyle işletmelere değer katan çözümler sunan bir teknoloji şirketidir. Yılların deneyimi ve uzman ekibimizle, en iyi çözümleri sağlamak için çalışıyoruz.</p>

          <div className="row mt-4">

            <div className="col-md-6 mb-4">
              <div className="card shadow-sm border-0 rounded-3">
                <div className="card-body">
                  <h4 className="card-title text-primary">Vizyonumuz</h4>
                  <p className="card-text text-muted">Dijital dünyada sürdürülebilir ve yenilikçi yazılım çözümleri geliştirerek teknolojiye yön vermek.</p>
                </div>
              </div>
            </div>


            <div className="col-md-6 mb-4">
              <div className="card shadow-sm border-0 rounded-3">
                <div className="card-body">
                  <h4 className="card-title text-primary">Misyonumuz</h4>
                  <p className="card-text text-muted">İş ortaklarımıza en yüksek kaliteli yazılım hizmetlerini sunarak, iş süreçlerini dijitalleştirmek ve verimliliği artırmak.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section class="container my-5">
        <h2 class="text-center mb-4 text-primary font-weight-bold">Müşteri Yorumları</h2>


        <div id="customerReviewsCarousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">


            <div class="carousel-item active">
              <div class="card p-4 shadow-sm border-0 rounded-3 text-center">
                <p class="text-muted">"ZenCode ekibi sayesinde işletmemizin dijital dönüşümünü başarıyla tamamladık! Profesyonel ve güvenilir bir ekip."</p>
                <h5 class="font-weight-bold">- Cansu Çevik</h5>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card p-4 shadow-sm border-0 rounded-3 text-center">
                <p class="text-muted">"Hızlı, kaliteli ve müşteri odaklı bir hizmet anlayışları var. Harika bir deneyimdi!"</p>
                <h5 class="font-weight-bold">- Emirhan Körhan</h5>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card p-4 shadow-sm border-0 rounded-3 text-center">
                <p class="text-muted">"Mobil uygulamamız için harika bir iş çıkardılar. Kullanıcı deneyimi mükemmel!"</p>
                <h5 class="font-weight-bold">- Sedanur Ceylan</h5>
              </div>
            </div>

          </div>
          <a class="carousel-control-prev" href="#customerReviewsCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Önceki</span>
          </a>
          <a class="carousel-control-next" href="#customerReviewsCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Sonraki</span>
          </a>
        </div>
      </section>


      <section class="container my-5">
        <h2 class="text-center mb-4 text-primary font-weight-bold">Bize Ulaşın</h2>
        <form class="w-75 mx-auto p-4 border rounded shadow-sm bg-light">

          <div class="mb-3">
            <label class="form-label" for="name">Adınız</label>
            <input type="text" class="form-control form-control-lg" id="name" placeholder="Adınızı girin" />
          </div>

          <div class="mb-3">
            <label class="form-label" for="email">E-posta</label>
            <input type="email" class="form-control form-control-lg" id="email" placeholder="E-posta adresinizi girin" />
          </div>

          <div class="mb-3">
            <label class="form-label" for="message">Mesajınız</label>
            <textarea class="form-control form-control-lg" id="message" rows="4" placeholder="Mesajınızı yazın"></textarea>
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary btn-lg w-100">Gönder</button>
          </div>
        </form>
      </section>



    </div>
  );
}

export default HomePage;
