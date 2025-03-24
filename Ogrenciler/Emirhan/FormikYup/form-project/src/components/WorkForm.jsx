import { Form, Formik } from "formik";
import { basicSchema } from "../schema";
import FormInput from "./FormInput";
import ArrayInput from "./ArrayInput";
import SelectInput from "./SelectInput";
import { uploadJobForm } from "../firebase/firebaseUpload";
import Navbar from "./Navbar";

function WorkForm() {
  const initialValues = {
    name: "",
    surname: "",
    birthyear: null,
    gender: "",
    phonenumber: "",
    address: "",
    salary: "",
    motivation: "",
    email: "",
    status: "Beklemede",
    school: "",
    department: "",
    grade: "",
    position: "",
    foreignlanguage: [],
    experience: [],
    technologies: [],
    projects: [],
    certificates: [],
    volunteerwork: [],
    socialmedia: [],
    references: [],
  };
  const singleFields = [
    { name: "name", type: "text", label: "Ad" },
    { name: "surname", type: "text", label: "Soyad" },
    { name: "birthyear", type: "date", label: "Doğum Tarihi" },
    { name: "phonenumber", type: "number", label: "Telefon Numarası" },
    { name: "address", type: "text", label: "Adres" },
    { name: "salary", type: "number", label: "Maaş Beklentisi" },
    { name: "motivation", type: "text", label: "Başvuru Motivasyonu" },
    { name: "email", type: "email", label: "Email" },
  ];
  const arrayFields = [
    { name: "foreignlanguage", label: "Yabancı Dil" },
    { name: "experience", label: "Deneyim" },
    { name: "technologies", label: "Kullandığınız Teknoloji(ler)" },
    { name: "projects", label: "Proje" },
    { name: "certificates", label: "Sertifika" },
    { name: "volunteerwork", label: "Gönüllü Çalışma" },
    { name: "socialmedia", label: "Sosyal Medya" },
    { name: "references", label: "Referans" },
  ];
  const selectFields = [
    {
      name: "gender",
      label: "Cinsiyet",
      options: [
        "Cinsiyet Seçiniz...",
        "Erkek",
        "Kadın",
        "Belirtmek istemiyorum",
      ],
    },
    {
      name: "school",
      label: "Üniversite Adı",
      options: [
        "Üniversite Adı Seçiniz...",
        "Boğaziçi Üniversitesi",
        "Orta Doğu Teknik Üniversitesi (ODTÜ)",
        "İstanbul Teknik Üniversitesi (İTÜ)",
        "Koç Üniversitesi",
        "Sabancı Üniversitesi",
        "Bilkent Üniversitesi",
        "Hacettepe Üniversitesi",
        "Ankara Üniversitesi",
        "Ege Üniversitesi",
        "İstanbul Üniversitesi",
        "Yıldız Teknik Üniversitesi",
        "Marmara Üniversitesi",
        "Gazi Üniversitesi",
        "Çukurova Üniversitesi",
        "Dokuz Eylül Üniversitesi",
        "İzmir Yüksek Teknoloji Enstitüsü (İYTE)",
        "Gebze Teknik Üniversitesi",
        "Atatürk Üniversitesi",
        "Erciyes Üniversitesi",
        "Selçuk Üniversitesi",
        "Akdeniz Üniversitesi",
        "Uludağ Üniversitesi",
        "Fırat Üniversitesi",
        "Karadeniz Teknik Üniversitesi",
        "Sakarya Üniversitesi",
        "Eskişehir Teknik Üniversitesi",
        "Samsun Üniversitesi",
        "Balıkesir Üniversitesi",
        "Süleyman Demirel Üniversitesi",
        "Pamukkale Üniversitesi",
      ],
    },
    {
      name: "department",
      label: "Bölüm Adı",
      options: [
        "Bölüm Adı Seçiniz...",
        "Bilgisayar Mühendisliği",
        "Yazılım Mühendisliği",
        "Elektrik-Elektronik Mühendisliği",
        "Makine Mühendisliği",
        "İnşaat Mühendisliği",
        "Endüstri Mühendisliği",
        "Mekatronik Mühendisliği",
        "Otomotiv Mühendisliği",
        "Gıda Mühendisliği",
        "Metalurji ve Malzeme Mühendisliği",
        "Çevre Mühendisliği",
        "Havacılık ve Uzay Mühendisliği",
        "Enerji Sistemleri Mühendisliği",
        "Jeoloji Mühendisliği",
        "Petrol ve Doğal Gaz Mühendisliği",
        "Harita Mühendisliği",
        "Biyomedikal Mühendisliği",
        "Telekomünikasyon Mühendisliği",
        "Tıp",
        "Diş Hekimliği",
        "Eczacılık",
        "Hemşirelik",
        "Fizyoterapi ve Rehabilitasyon",
        "Beslenme ve Diyetetik",
        "Veterinerlik",
        "Sağlık Yönetimi",
        "Biyoteknoloji",
        "Odyoloji",
        "Biyoloji",
        "Kimya",
        "Fizik",
        "Matematik",
        "Astronomi ve Uzay Bilimleri",
        "Moleküler Biyoloji ve Genetik",
        "İstatistik",
        "Genetik ve Biyomühendislik",
        "Psikoloji",
        "Sosyoloji",
        "Felsefe",
        "Tarih",
        "Coğrafya",
        "Antropoloji",
        "Arkeoloji",
        "İlahiyat",
        "Sanat Tarihi",
        "Türk Dili ve Edebiyatı",
        "Halkla İlişkiler ve Tanıtım",
        "Radyo, Televizyon ve Sinema",
        "Hukuk",
        "Uluslararası İlişkiler",
        "Siyaset Bilimi ve Kamu Yönetimi",
        "İşletme",
        "İktisat",
        "Maliye",
        "Kamu Yönetimi",
        "Çalışma Ekonomisi ve Endüstri İlişkileri",
        "Lojistik Yönetimi",
        "Sınıf Öğretmenliği",
        "Okul Öncesi Öğretmenliği",
        "İngilizce Öğretmenliği",
        "Matematik Öğretmenliği",
        "Fen Bilgisi Öğretmenliği",
        "Türkçe Öğretmenliği",
        "Tarih Öğretmenliği",
        "Coğrafya Öğretmenliği",
        "Özel Eğitim Öğretmenliği",
        "Rehberlik ve Psikolojik Danışmanlık",
        "Grafik Tasarım",
        "İç Mimarlık",
        "Mimarlık",
        "Moda Tasarımı",
        "Görsel İletişim Tasarımı",
        "Endüstriyel Tasarım",
        "Seramik ve Cam Tasarımı",
        "Tiyatro",
        "Sinema ve Televizyon",
        "Müzik",
        "Resim",
        "Beden Eğitimi ve Spor Öğretmenliği",
        "Antrenörlük Eğitimi",
        "Rekreasyon Yönetimi",
        "Spor Yöneticiliği",
        "Gastronomi ve Mutfak Sanatları",
        "Turizm ve Otelcilik",
        "Havacılık Yönetimi",
        "Pilotaj",
        "Yeni Medya ve İletişim",
        "Adalet Meslek Yüksekokulu",
        "Çocuk Gelişimi",
        "Sosyal Hizmet",
        "İnsan Kaynakları Yönetimi",
        "Bilgi ve Belge Yönetimi",
      ],
    },
    {
      name: "grade",
      label: "Sınıf Bilgisi",
      options: [
        "Sınıf Bilgisi Seçiniz...",
        "Mezun",
        "Hazırlık",
        "1. Sınıf",
        "2. Sınıf",
        "3. Sınıf",
        "4. Sınıf",
        "5. Sınıf",
        "6. Sınıf",
        "Yüksek Lisans",
        "Doktora",
      ],
    },
    {
      name: "position",
      label: "Pozisyon Seçimi",
      options: [
        "Başvurduğunuz pozisyonu seçiniz...",
        "Yapay Zeka Mühendisi",
        "Makine Öğrenimi Mühendisi",
        "Veri Bilimci",
        "Veri Analisti",
        "Doğal Dil İşleme (NLP) Uzmanı",
        "Front-End Geliştirici",
        "Back-End Geliştirici",
        "AI Destekli Pazarlama Uzmanı",
        "Genel Başvuru",
      ],
    },
  ];
  return (
    <div className="container py-10">
      <Navbar />
      <Formik
        initialValues={initialValues}
        validationSchema={basicSchema}
        onSubmit={async (values, { resetForm }) => {
          const filteredValues = Object.fromEntries(
            Object.entries(values).filter(([key]) => !key.endsWith("Input"))
          );
          await uploadJobForm(filteredValues);
          resetForm();
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form className="my-5 d-flex flex-column align-items-center">
            {singleFields.map((item) => (
              <FormInput
                key={item.name}
                label={item.label}
                field={item.name}
                type={item.type}
              />
            ))}
            {selectFields.map((item) => (
              <SelectInput
                key={item.name}
                field={item.name}
                label={item.label}
                options={item.options}
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
              />
            ))}
            {arrayFields.map((item) => (
              <ArrayInput
                key={item.name}
                field={item.name}
                label={item.label}
                errors={errors}
                values={values}
                touched={touched}
                setFieldValue={setFieldValue}
              />
            ))}
            <button className="primary-button inline-button mt-5" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default WorkForm;
