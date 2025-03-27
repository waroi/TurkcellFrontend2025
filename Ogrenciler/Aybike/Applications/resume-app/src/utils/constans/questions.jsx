export const allQuestions = {
    easy: [
        {
            text: "JavaScript'te değişken tanımlamak için hangi anahtar kelime kullanılmaz?",
            options: ["var", "let", "const", "function"],
            correctAnswer: "function"
        },
        {
            text: "React'ta state güncellemek için hangi hook kullanılır?",
            options: ["useState", "useEffect", "useContext", "useReducer"],
            correctAnswer: "useState"
        },
        {
            text: "CSS'te bir elementin genişliğini ve yüksekliğini içeriğine göre ayarlamak için hangi özellik kullanılır?",
            options: ["width", "height", "fit-content", "auto"],
            correctAnswer: "auto"
        },
        {
            text: "Bootstrap grid sisteminde bir satır kaç sütuna bölünmüştür?",
            options: ["6", "10", "12", "16"],
            correctAnswer: "12"
        },
        {
            text: "JavaScript'te dizi elemanlarını birleştirmek için hangi metot kullanılır?",
            options: ["concat()", "join()", "merge()", "combine()"],
            correctAnswer: "join()"
        }
    ],
    medium: [
        {
            text: "React'ta props ile ilgili doğru olmayan ifade hangisidir?",
            options: [
                "Props, bileşenler arası veri aktarımı sağlar",
                "Props, bileşen içinde değiştirilebilir",
                "Props, üst bileşenden alt bileşene aktarılır",
                "Props, obje olarak alınır"
            ],
            correctAnswer: "Props, bileşen içinde değiştirilebilir"
        },
        {
            text: "HTML semantik etiketlerinden hangisi yanlıştır?",
            options: ["<header>", "<footer>", "<content>", "<article>"],
            correctAnswer: "<content>"
        },
        {
            text: "JavaScript'te asenkron işlemler için kullanılan yapı hangisi değildir?",
            options: ["Promise", "async/await", "setTimeout", "forEach"],
            correctAnswer: "forEach"
        },
        {
            text: "CSS'te z-index özelliği neyi kontrol eder?",
            options: [
                "Elementin genişliğini",
                "Elementin yüksekliğini",
                "Elementin konumunu",
                "Elementin yığın sırasını"
            ],
            correctAnswer: "Elementin yığın sırasını"
        },
        {
            text: "JavaScript'te 'this' anahtar kelimesi neyi ifade eder?",
            options: ["Global nesneyi", "Mevcut fonksiyonu", "Mevcut nesneyi", "Üst nesneyi"],
            correctAnswer: "Mevcut nesneyi"
        }
    ],
    hard: [
        {
            text: "React'ta performansı artırmak için kullanılan memoization tekniği hangi hook ile sağlanır?",
            options: ["useMemo", "useCallback", "useEffect", "useRef"],
            correctAnswer: "useMemo"
        },
        {
            text: "JavaScript'te event delegation (olay yetkilendirme) nasıl çalışır?",
            options: [
                "Etkinlikleri bir ebeveyn elementte dinleyerek",
                "Her bir alt öğeye ayrı event listener ekleyerek",
                "Sadece doğrudan tıklanan öğeye event listener ekleyerek",
                "Etkinlikleri tamamen engelleyerek"
            ],
            correctAnswer: "Etkinlikleri bir ebeveyn elementte dinleyerek"
        },
        {
            text: "Web uygulamalarında istemci tarafı önbellekleme için kullanılan HTTP başlığı hangisidir?",
            options: ["Cache-Control", "Authorization", "Content-Type", "Expires"],
            correctAnswer: "Cache-Control"
        },
        {
            text: "React'ta context API kullanırken varsayılan değeri hangi metodla sağlayabiliriz?",
            options: ["React.createContext()", "React.useContext()", "React.Provider", "React.Consumer"],
            correctAnswer: "React.createContext()"
        },
        {
            text: "CSS'te bir öğeyi tam ekran yapmak için hangi özellik kullanılır?",
            options: ["fullscreen: true;", "position: fullscreen;", "display: full;", "width: 100vw; height: 100vh;"],
            correctAnswer: "width: 100vw; height: 100vh;"
        }
    ]
};
