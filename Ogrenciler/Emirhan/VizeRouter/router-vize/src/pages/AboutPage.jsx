import React from "react";

const AboutPage = () => {
  return (
    <div>
      <main>
        <section class="container">
          <nav aria-label="breadcrumb" class="mt-4">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="../index.html" class="text-decoration-none text-black">
                  Ana Sayfa
                </a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Hakkımızda
              </li>
            </ol>
          </nav>
          <h4 class="mb-4 fw-semibold my-5">Hakkımızda</h4>
          <div class="container py-4">
            <div class="row align-items-center">
              <div class="col-md-6 col-sm-12 px-0">
                <p>
                  Biz, sıradanın ötesinde ürünlerle hayatınıza neşe katmayı
                  hedefleyen bir ekibiz. Dünyanın ciddiyetine biraz mola vermek
                  isteyenlere özel, mizah dolu ve eğlenceli ürünler sunuyoruz.
                  Çünkü hayatın en güzel anları, bir kahkaha kadar yakın!
                  Amacımız, yalnızca alışveriş yapabileceğiniz bir yer olmak
                  değil, aynı zamanda yüzünüzde tebessüm oluşturacak bir deneyim
                  sunmak. Siz de bu keyifli yolculuğa katılmaya hazır mısınız?
                  Unutmayın, bizde her ürün bir hikaye, her sipariş bir mutluluk
                  sebebi!
                </p>
              </div>
            </div>
            <hr class="my-5" />
            <div class="row text-center">
              <h4 class="mb-4 fw-semibold my-5">Ekibimiz</h4>
            </div>

            <div class="row text-center py-4">
              <div class="col-md-4">
                <img
                  src="../assets/pp.jpg"
                  class="team-member rounded-circle mb-3"
                  alt="Team Member"
                />
                <h4>Emirhan Körhan</h4>
                <p>CEO & Founder</p>
              </div>
              <div class="col-md-4">
                <img
                  src="../assets/pp.jpg"
                  class="team-member rounded-circle mb-3"
                  alt="Team Member"
                />
                <h4>Emirhan Körhan</h4>
                <p>Lead Developer</p>
              </div>
              <div class="col-md-4">
                <img
                  src="../assets/pp.jpg"
                  class="team-member rounded-circle mb-3"
                  alt="Team Member"
                />
                <h4>Emirhan Körhan</h4>
                <p>Project Manager</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
