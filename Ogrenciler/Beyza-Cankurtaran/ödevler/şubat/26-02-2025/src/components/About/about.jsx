import React from "react";
import gazete from "../../assets/gazete-1.webp";

const About = () => {
  return (
    <>
      <section className="about-us bg-light" id="aboutUs">
        <div className="container mx-auto py-3">
          <h2 className="text-center mb-2">Hakkımızda</h2>
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6 prophet-au">
              <img src={gazete} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 col-md-6 au-text overflow-y-scroll">
              <p className="mb-2">
                Sihirli Dükkan, büyü dünyasının sihrini günlük yaşamınıza
                taşımak için kurulan bir e-ticaret platformudur. Harry Potter
                evrenine duyduğumuz büyük hayranlıkla, bu büyülü dünyanın
                benzersiz objelerini size ulaştırmayı amaçlıyoruz.
              </p>
              <p className="mb-2">
                Platformumuzda, Hogwarts evreninin en popüler büyülü eşyalarını
                bulabilirsiniz. Amacımız, her yaştan Harry Potter hayranının
                kalbinde özel bir yer edinmek ve bu büyüleyici dünyanın parçası
                olmanızı sağlamak.
              </p>
              <p className="mb-2">
                Sihirli Dükkan, sadece bir alışveriş sitesi değil, aynı zamanda
                büyü dünyasına açılan bir kapıdır. Burada, hem kendinize hem de
                sevdiklerinize unutulmaz hediyeler bulabilir, sihir dolu anılar
                yaratabilirsiniz. Siz de bu maceraya katılmak ister misiniz?
              </p>
              <p>
                Her siparişinizle, büyü dünyasını biraz daha gerçek kılıyoruz.
                Hadi, kendi büyü hikayenizi yazmaya başlayın! ✨
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
