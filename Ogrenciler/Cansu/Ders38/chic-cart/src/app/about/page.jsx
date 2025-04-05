import React from 'react';
import '../../styles/main.scss'; 




const About = () => {
  return (
 
    <div className="about-container">

    
      <section className="hero-section bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4">Hakkımızda</h1>
          <p className="lead">Chic-Cart, şıklığı ve uygun fiyatı buluşturan online alışveriş platformudur.</p>
        </div>
      </section>


      <section className="story-section py-5">
        <div className="container">
          <div className="section-title text-center mb-4">
            <h2>Hikayemiz</h2>
          </div>
          <div className="row">
            <div className="col-md-8">
              <p>
                Chic-Cart, 2020 yılında kaliteli ve şık giyim ürünlerini her bütçeye uygun fiyatlarla
                sunma amacıyla kuruldu. Moda dünyasında adım atarken, müşteri memnuniyeti, hızlı teslimat
                ve güvenli alışveriş ilkelerimizle sektördeki yerimizi aldık.
              </p>
              <p>
                Başlangıcımızdan bu yana, şeffaflık, güven ve müşteri odaklı hizmet anlayışımızla büyüdük.
                Chic-Cart olarak modayı herkesin ulaşabileceği bir fiyatla sunmayı hedefliyoruz.
              </p>
            </div>
            <div className="col-md-4">
              <img src="/images/team.jpg" alt="Team" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>


      <section className="values-section py-5 bg-light">
        <div className="container">
          <div className="section-title text-center mb-4">
            <h2>Değerlerimiz</h2>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <i className="fas fa-cogs fa-3x mb-3"></i>
              <h3>Kalite</h3>
              <p>Ürünlerimizde kaliteyi her zaman ön planda tutuyoruz.</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-heart fa-3x mb-3"></i>
              <h3>Müşteri Memnuniyeti</h3>
              <p>Müşterilerimizin memnuniyeti, bizim için her şeyden daha önemli.</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-truck fa-3x mb-3"></i>
              <h3>Hızlı Teslimat</h3>
              <p>Ürünleriniz en kısa sürede kapınıza gelir.</p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="team-section py-5">
        <div className="container">
          <div className="section-title text-center mb-4">
            <h2>Ekibimiz</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="team-member text-center">
                <img src="/images/team-member1.jpg" alt="Team Member 1" className="img-fluid rounded-circle mb-3" />
                <h5>John Doe</h5>
                <p>Kurucu & CEO</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member text-center">
                <img src="/images/team-member2.jpg" alt="Team Member 2" className="img-fluid rounded-circle mb-3" />
                <h5>Jane Smith</h5>
                <p>Baş Tasarımcı</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member text-center">
                <img src="/images/team-member3.jpg" alt="Team Member 3" className="img-fluid rounded-circle mb-3" />
                <h5>Emily White</h5>
                <p>Pazarlama Müdürü</p>
              </div>
            </div>
          </div>
        </div>
      </section>

 
      <section className="promise-section py-5 bg-primary text-white">
        <div className="container text-center">
          <h2>Vaadimiz</h2>
          <p>
            Chic-Cart olarak, modayı hızlı, güvenli ve kaliteli bir şekilde size sunuyoruz. Satın aldığınız her
            ürünün arkasındayız ve müşteri memnuniyetini en yüksek önceliğimiz olarak kabul ediyoruz.
          </p>
        </div>
      </section>

    </div>

  );
};

export default About;
