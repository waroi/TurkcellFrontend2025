import React, { useState, useEffect } from 'react';
import { Button } from '../atoms/Button';
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { useAuth } from '../../context/AuthContext';
import { db } from '../../firebase/config';

export const ExamForm = () => {
  const { currentUser } = useAuth();

  const allQuestions = [
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
      options: ['A) <Fragment>', 'B) <Link>', 'C) <Route>', 'D) <Switch>'],
      correctAnswer: 'B',
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
    {
      question: "React'in temel amacı nedir?",
      options: [
        'A) Veri tabanı yönetimi yapmak',
        'B) Kullanıcı arayüzleri oluşturmak',
        'C) CSS stillerini optimize etmek',
        'D) Sunucu yönetimi yapmak',
      ],
      correctAnswer: 'B',
    },
    {
      question: "React'te `props` nedir?",
      options: [
        'A) Bileşenin iç durumu',
        'B) Bileşenler arası veri iletimi için kullanılan mekanizma',
        'C) Sadece class bileşenlerinde kullanılan bir özellik',
        'D) React uygulamalarında stil yönetimi için kullanılan bir yapı',
      ],
      correctAnswer: 'B',
    },
    {
      question: "React'te hangi hook global state yönetimi için kullanılır?",
      options: ['A) useState', 'B) useEffect', 'C) useContext', 'D) useRef'],
      correctAnswer: 'C',
    },
    {
      question: '`useEffect` ne zaman çalıştırılır?',
      options: [
        'A) Sadece bileşen ilk render edildiğinde',
        'B) Bileşen her güncellendiğinde',
        'C) Bağımlılık dizisindeki değerler değiştiğinde',
        'D) Hiçbir zaman otomatik çalışmaz, manuel çalıştırılmalıdır',
      ],
      correctAnswer: 'C',
    },
    {
      question:
        "React'te hangi yapı bileşenleri birbirine bağlamak için kullanılır?",
      options: ['A) Redux', 'B) React Router', 'C) useState', 'D) useEffect'],
      correctAnswer: 'B',
    },
  ];

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  useEffect(() => {
    const shuffled = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 5);
    setQuestions(shuffled);
  }, []);

  const handleAnswerChange = (questionIndex, selectedAnswer) => {
    setAnswers({ ...answers, [questionIndex]: selectedAnswer });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let correctCount = 0;

    questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        correctCount++;
      }
    });

    const passed = correctCount >= 4;
    setResult(passed);

    if (currentUser) {
      try {
        const applicationsQuery = query(
          collection(db, 'applications'),
          where('email', '==', currentUser.email)
        );

        const querySnapshot = await getDocs(applicationsQuery);
        if (!querySnapshot.empty) {
          const applicationDoc = querySnapshot.docs[0];
          const applicationRef = doc(db, 'applications', applicationDoc.id);

          await updateDoc(applicationRef, {
            status: passed ? 'exam passed' : 'exam failed',
          });

          console.log(
            `test tamamlandı: ${passed ? 'exam passed' : 'exam failed'}`
          );
        }
      } catch (error) {
        console.error('testte hata:', error);
      }
    }
  };

  return (
    <div className='container my-4'>
      {result === null ? (
        <form onSubmit={handleSubmit}>
          {questions.map((quiz, index) => (
            <div key={index} className='card mb-3'>
              <div className='card-body'>
                <h5 className='card-title'>
                  {index + 1}. {quiz.question}
                </h5>
                {quiz.options.map((option, optIndex) => {
                  const inputId = `question-${index}-option-${optIndex}`;
                  return (
                    <div key={optIndex} className='form-check'>
                      <input
                        type='radio'
                        id={inputId}
                        name={`question-${index}`}
                        value={option[0]}
                        onChange={() => handleAnswerChange(index, option[0])}
                        className='form-check-input'
                      />
                      <label htmlFor={inputId} className='form-check-label'>
                        {option}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          <Button type='submit' className='btn btn-success w-100'>
            Submit Test
          </Button>
        </form>
      ) : result ? (
        <p className='text-success text-center'>
          Congrats! You have passed the exam. We will contact you soon...
        </p>
      ) : (
        <p className='text-danger text-center'>
          You have failed the test. Unfortunately, we will not be moving
          forward.
        </p>
      )}
    </div>
  );
};
