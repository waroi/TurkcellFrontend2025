import { Button } from '../atoms/Button';

export const ExamForm = () => {
  const reactQuiz = [
    {
      question: "React'te bileşenler (components) nasıl tanımlanır?",
      options: [
        'A) Sadece fonksiyonlarla',
        'B) Sadece sınıflarla',
        'C) Hem fonksiyon hem de sınıf bileşenleri olarak',
        'D) Sadece JSX kullanarak',
      ],
      correctAnswer: 'C',
    },
    {
      question: "React'te `useState` hook'u ne için kullanılır?",
      options: [
        'A) HTTP istekleri yapmak için',
        'B) Bileşenlerin yaşam döngüsünü yönetmek için',
        'C) Yerel state (durum) yönetimi için',
        'D) Router işlemlerini yönetmek için',
      ],
      correctAnswer: 'C',
    },
    {
      question: "React'te hangi ifade 'sanal DOM'u tanımlar?",
      options: [
        "A) React'in HTML elementlerini tarayıcıya direkt olarak eklemesi",
        "B) Gerçek DOM'un hafif bir kopyasını oluşturarak performansı artırması",
        'C) JavaScript kullanmadan DOM manipülasyonu yapması',
        'D) CSS değişikliklerini otomatik olarak takip etmesi',
      ],
      correctAnswer: 'B',
    },
    {
      question:
        "React Router'da sayfa yönlendirmesi için hangi bileşen kullanılır?",
      options: ['A) <Navigate>', 'B) <Link>', 'C) <Route>', 'D) <Switch>'],
      correctAnswer: 'A',
    },
    {
      question:
        "React'te bir bileşen ilk kez ekranda render edildiğinde hangi useEffect bağımlılık dizisi kullanılmalıdır?",
      options: [
        'A) useEffect(() => {}, [])',
        'B) useEffect(() => {}, [state])',
        'C) useEffect(() => {})',
        'D) useEffect(() => {}, [props])',
      ],
      correctAnswer: 'A',
    },
  ];

  return (
    <form>
      {reactQuiz.map((quiz, index) => (
        <div key={index} className='mb-5'>
          <h6>
            {index + 1}. {quiz.question}
          </h6>
          {quiz.options.map((option, optIndex) => {
            const inputId = `question-${index}-option-${optIndex}`;
            return (
              <div key={optIndex}>
                <input
                  type='radio'
                  id={inputId}
                  name={`question-${index}`}
                  value={option[0]}
                />
                <label htmlFor={inputId}>{option}</label>
              </div>
            );
          })}
        </div>
      ))}
      <Button type='submit' className='btn btn-success'>
        Submit Test
      </Button>
    </form>
  );
};
