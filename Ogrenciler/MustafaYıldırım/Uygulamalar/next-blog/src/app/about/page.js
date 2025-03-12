import Link from "next/link";

const About = () => {
  const team = [
    {
      name: "Mustafa Yıldırım",
      role: "Frontend Developer",
      bio: "Mustafa'nın web geliştirme ve teknik yazım alanında 2 yılı aşkın deneyimi bulunmaktadır.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQHglhvi6WZ0GQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1657990625696?e=1747267200&v=beta&t=L1-ztaqx10d7p_pGTKdptH7iVEYzsaw1U13fLIrhDic",
      social: {
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Berfin Ela Kılıç",
      role: "Frontend Developer",
      bio: "Berfin Ela, Forntend geliştirme konusunda uzmanlaşmıştır ve çok sayıda açık kaynaklı projeye katkıda bulunmuştur.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQHGEWxP5zW_uQ/profile-displayphoto-shrink_400_400/B4DZUgoo2GHkAg-/0/1740009279730?e=1747267200&v=beta&t=LlI9Lls5IwoL01qQK4NZriUFrphD6TeUkxVpfQ1HmfI",
      social: {
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Mustafa Cenk Aydın",
      role: "UI/UX Designer",
      bio: "Mustafa Cenk, kullanıcı deneyimi ve erişilebilirliğe odaklanarak yaratıcı tasarım çözümleri getiriyor.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQHfbDK1UaPQEQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708073452241?e=1747267200&v=beta&t=DJxZeKhq-jKEszQqxWyPiL9yHjrII5OBuMEJTqDwVD8",
      social: {
        instagram: "#",
        linkedin: "#",
      },
    },
  ];
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h1 className="display-4 fw-bold mb-3">Hakkımızda</h1>
              <p className="lead text-muted mb-4">
                Biz, bilgi ve içgörüleri paylaşma konusunda tutkulu olan
                yazarlar, geliştiriciler ve dijital meraklılardan oluşan bir
                ekibiz.
              </p>
              <Link href="/contact" className="btn btn-dark">
                İletişime Geçin <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Our Mission */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="h2 fw-bold mb-4">Misyonumuz</h2>
              <p className="lead mb-4">
                Geliştiricileri ve tasarımcıları daha iyi dijital deneyimler
                oluşturmak için ihtiyaç duydukları bilgi ve kaynaklarla
                güçlendirmek.
              </p>
              <p className="text-muted mb-0">
                M&lt;ela&gt;M, 2025 yılında basit bir hedefle kuruldu: Bir
                bootcampde tanışan arkadaşlar yaptığı proje ıle teknoloji
                meraklılarının web geliştirme, tasarım ve dijital teknolojideki
                en son trendler ve en iyi uygulamalar hakkında güvenilir, güncel
                bilgiler bulabilecekleri bir platform yaratmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="h2 fw-bold text-center mb-5">Ekibimizle Tanışın</h2>
          <div className="row g-4 ">
            {team.map((member, index) => (
              <div className="m-auto col-md-6 col-lg-3" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="position-relative">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="card-body text-center p-4">
                    <h3 className="h5 fw-bold mb-1">{member.name}</h3>
                    <p className="text-dark mb-3">{member.role}</p>
                    <p className="text-muted small mb-3">{member.bio}</p>
                    <div className="d-flex justify-content-center gap-2">
                      <a
                        href={member.social.instagram}
                        className="btn btn-sm btn-outline-secondary"
                      >
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="btn btn-sm btn-outline-secondary"
                      >
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-5 ">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="h2 fw-bold mb-3">Hikayemiz</h2>
              <p className="text-muted">
                Mütevazı başlangıçlarımızdan bugün bulunduğumuz noktaya kadar
                yolculuğumuz tutku ve amaç tarafından yönlendirildi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="h2 fw-bold mb-3">Topluluğumuza Katılın</h2>
              <p className="mb-4">
                Bültenimize abone olun ve en son makalelerimizi, eğitimlerimizi
                ve içgörülerimizi ilk siz alın.
              </p>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      aria-label="Email"
                    />
                    <button className="btn btn-light" type="button">
                      Abone ol
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
