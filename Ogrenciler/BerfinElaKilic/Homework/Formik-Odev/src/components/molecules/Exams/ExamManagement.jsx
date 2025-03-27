import React, { useState } from 'react';

const ExamManagement = () => {
  const [questionCounts, setQuestionCounts] = useState({
    JavaScript: { easy: 0, medium: 0, hard: 0 },
    TypeScript: { easy: 0, medium: 0, hard: 0 },
    React: { easy: 0, medium: 0, hard: 0 },
    Vuejs: { easy: 0, medium: 0, hard: 0 },
    CSS: {easy: 0, medium: 0, hard: 0},
  });

  const handleInputChange = (category, level, value) => {
    setQuestionCounts({
      ...questionCounts,
      [category]: {
        ...questionCounts[category],
        [level]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Seçilen soru sayıları:', questionCounts);
  };

  return (
    <div className="exam-management">
      <h2>Sınav Yönetimi</h2>
      <form onSubmit={handleSubmit}>
        <div className="category">
          <h3>JavaScript</h3>
          <div>
            <label>Kolay:</label>
            <input
              type="number"
              value={questionCounts.JavaScript.easy}
              onChange={(e) =>
                handleInputChange('JavaScript', 'easy', e.target.value)
              }
              min="0"
            />
          </div>
          <div>
            <label>Orta:</label>
            <input
              type="number"
              value={questionCounts.JavaScript.medium}
              onChange={(e) =>
                handleInputChange('JavaScript', 'medium', e.target.value)
              }
              min="0"
            />
          </div>
          <div>
            <label>Zor:</label>
            <input
              type="number"
              value={questionCounts.JavaScript.hard}
              onChange={(e) =>
                handleInputChange('JavaScript', 'hard', e.target.value)
              }
              min="0"
            />
          </div>
        </div>
        <div className="category">
          <h3>TypeScript</h3>
          <div>
            <label>Kolay:</label>
            <input
              type="number"
              value={questionCounts.TypeScript.easy}
              onChange={(e) =>
                handleInputChange('TypeScript', 'easy', e.target.value)
              }
              min="0"
            />
          </div>
          <div>
            <label>Orta:</label>
            <input
              type="number"
              value={questionCounts.TypeScript.medium}
              onChange={(e) =>
                handleInputChange('TypeScript', 'medium', e.target.value)
              }
              min="0"
            />
          </div>
          <div>
            <label>Zor:</label>
            <input
              type="number"
              value={questionCounts.TypeScript.hard}
              onChange={(e) =>
                handleInputChange('TypeScript', 'hard', e.target.value)
              }
              min="0"
            />
          </div>
        </div>
        <div className="category">
          <h3>React</h3>
          <div>
            <label>Kolay:</label>
            <input
              type="number"
              value={questionCounts.React.easy}
              onChange={(e) =>
                handleInputChange('React', 'easy', e.target.value)
              }
              min="0"
            />
          </div>
          <div>
            <label>Orta:</label>
            <input
              type="number"
              value={questionCounts.React.medium}
              onChange={(e) =>
                handleInputChange('React', 'medium', e.target.value)
              }
              min="0"
            />
          </div>
          <div>
            <label>Zor:</label>
            <input
              type="number"
              value={questionCounts.React.hard}
              onChange={(e) =>
                handleInputChange('React', 'hard', e.target.value)
              }
              min="0"
            />
          </div>
        </div>

        <div className="category">
          <h3>Vue.js</h3>
          <div>
            <label>Kolay:</label>
            <input
              type="number"
              value={questionCounts.Vuejs.easy}
              onChange={(e) =>
                handleInputChange('Vuejs', 'easy', e.target.value)
              }
              min="0"
            />
          </div>
          <div>
            <label>Orta:</label>
            <input
              type="number"
              value={questionCounts.Vuejs.medium}
              onChange={(e) =>
                handleInputChange('Vuejs', 'medium', e.target.value)
              }
              min="0"
            />
          </div>
          <div>
            <label>Zor:</label>
            <input
              type="number"
              value={questionCounts.Vuejs.hard}
              onChange={(e) =>
                handleInputChange('Vuejs', 'hard', e.target.value)
              }
              min="0"
            />
          </div>
        </div>
        <div className="category">
          <h3>CSS</h3>
          <div>
            <label>Kolay:</label>
            <input
              type="number"
              value={questionCounts.CSS.easy}
              onChange={(e) =>
                handleInputChange('CSS', 'easy', e.target.value)
              }
              min="0"
            />
          </div>
          <div>
            <label>Orta:</label>
            <input
              type="number"
              value={questionCounts.CSS.medium}
              onChange={(e) =>
                handleInputChange('CSS', 'medium', e.target.value)
              }
              min="0"
            />
          </div>
          <div>
            <label>Zor:</label>
            <input
              type="number"
              value={questionCounts.CSS.hard}
              onChange={(e) =>
                handleInputChange('CSS', 'hard', e.target.value)
              }
              min="0"
            />
          </div>
        </div>

        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default ExamManagement;
