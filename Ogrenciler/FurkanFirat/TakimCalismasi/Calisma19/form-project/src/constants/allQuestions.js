export const allQuestions = [
  {
    question: "React'te bileşenler (components) nasıl tanımlanır?",
    options: [
      "A) Sadece fonksiyonlarla",
      "B) Sadece sınıflarla",
      "C) Hem fonksiyon hem de sınıf bileşenleri olarak",
      "D) Sadece JSX kullanarak",
    ],
    correctAnswer: "C",
    difficulty: "kolay",
  },
  {
    question: "React'te `useState` hook'u ne için kullanılır?",
    options: [
      "A) HTTP istekleri yapmak için",
      "B) Bileşenlerin yaşam döngüsünü yönetmek için",
      "C) Yerel state (durum) yönetimi için",
      "D) Router işlemlerini yönetmek için",
    ],
    correctAnswer: "C",
    difficulty: "kolay",
  },
  {
    question: "React'te hangi ifade 'sanal DOM'u tanımlar?",
    options: [
      "A) React'in HTML elementlerini tarayıcıya direkt olarak eklemesi",
      "B) Gerçek DOM'un hafif bir kopyasını oluşturarak performansı artırması",
      "C) JavaScript kullanmadan DOM manipülasyonu yapması",
      "D) CSS değişikliklerini otomatik olarak takip etmesi",
    ],
    correctAnswer: "B",
    difficulty: "orta",
  },
  {
    question:
      "React Router'da sayfa yönlendirmesi için hangi bileşen kullanılır?",
    options: ["A) <Fragment>", "B) <Link>", "C) <Route>", "D) <Switch>"],
    correctAnswer: "B",
    difficulty: "kolay",
  },
  {
    question:
      "React'te bir bileşen ilk kez ekranda render edildiğinde hangi useEffect bağımlılık dizisi kullanılmalıdır?",
    options: [
      "A) useEffect(() => {}, [])",
      "B) useEffect(() => {}, [state])",
      "C) useEffect(() => {})",
      "D) useEffect(() => {}, [props])",
    ],
    correctAnswer: "A",
    difficulty: "orta",
  },
  {
    question: "React'in temel amacı nedir?",
    options: [
      "A) Veri tabanı yönetimi yapmak",
      "B) Kullanıcı arayüzleri oluşturmak",
      "C) CSS stillerini optimize etmek",
      "D) Sunucu yönetimi yapmak",
    ],
    correctAnswer: "B",
    difficulty: "kolay",
  },
  {
    question: "React'te `props` nedir?",
    options: [
      "A) Bileşenin iç durumu",
      "B) Bileşenler arası veri iletimi için kullanılan mekanizma",
      "C) Sadece class bileşenlerinde kullanılan bir özellik",
      "D) React uygulamalarında stil yönetimi için kullanılan bir yapı",
    ],
    correctAnswer: "B",
    difficulty: "kolay",
  },
  {
    question: "React'te hangi hook global state yönetimi için kullanılır?",
    options: ["A) useState", "B) useEffect", "C) useContext", "D) useRef"],
    correctAnswer: "C",
    difficulty: "orta",
  },
  {
    question: "`useEffect` ne zaman çalıştırılır?",
    options: [
      "A) Sadece bileşen ilk render edildiğinde",
      "B) Bileşen her güncellendiğinde",
      "C) Bağımlılık dizisindeki değerler değiştiğinde",
      "D) Hiçbir zaman otomatik çalışmaz, manuel çalıştırılmalıdır",
    ],
    correctAnswer: "C",
    difficulty: "orta",
  },
  {
    question:
      "React'te hangi yapı bileşenleri birbirine bağlamak için kullanılır?",
    options: ["A) Redux", "B) React Router", "C) useState", "D) useEffect"],
    correctAnswer: "B",
    difficulty: "kolay",
  },

  {
    question: "JSX nedir?",
    options: [
      "A) JavaScript kodlarını HTML'e dönüştüren bir dil",
      "B) React bileşenlerinin HTML benzeri söz dizimiyle yazılmasını sağlayan bir sözdizimi uzantısı",
      "C) Bir CSS çerçevesidir",
      "D) JSON tabanlı bir yapılandırma dosyasıdır",
    ],
    correctAnswer: "B",
    difficulty: "kolay",
  },
  {
    question: "`useRef` hook'u ne için kullanılır?",
    options: [
      "A) State yönetimi için",
      "B) DOM elementlerine doğrudan erişim için",
      "C) Router işlemleri için",
      "D) Veri tabanı bağlantısı için",
    ],
    correctAnswer: "B",
    difficulty: "orta",
  },
  {
    question: "React'te `key` prop'u neden kullanılır?",
    options: [
      "A) Performans ölçmek için",
      "B) Bileşenlerin stillerini kontrol etmek için",
      "C) Liste öğelerinin kimliklerini tanımlamak ve performansı artırmak için",
      "D) State güncellemelerini engellemek için",
    ],
    correctAnswer: "C",
    difficulty: "orta",
  },
  {
    question: "Hangi durum `React.memo` kullanmak için uygundur?",
    options: [
      "A) Bileşen sık sık değişen props alıyorsa",
      "B) Bileşenin props'ları nadiren değişiyorsa ve yeniden render'dan kaçınılmak isteniyorsa",
      "C) useEffect kullanmak isteniyorsa",
      "D) Sadece class bileşeni varsa",
    ],
    correctAnswer: "B",
    difficulty: "zor",
  },
  {
    question: "`useCallback` hook'u ne işe yarar?",
    options: [
      "A) Yeni bileşen oluşturmak için",
      "B) Bir fonksiyonu memorization (önbellekleme) ile optimize etmek için",
      "C) Router işlemi başlatmak için",
      "D) CSS stilleri oluşturmak için",
    ],
    correctAnswer: "B",
    difficulty: "zor",
  },
];
