
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Award, RefreshCw, ExternalLink, BookOpen } from 'lucide-react';
import Layout from '../components/Layout';
import QuestionCard from '../components/QuestionCard';
import { useQuiz } from '../components/QuizContext';

const Results = () => {
  const navigate = useNavigate();
  const { questions, answers, score, resetQuiz } = useQuiz();
  const totalQuestions = questions.length;
  const percentage = (score / totalQuestions) * 100;
  
  const getFeedbackMessage = () => {
    if (percentage >= 90) return "Превосходно! Вы отлично знаете физику!";
    if (percentage >= 75) return "Очень хорошо! У вас солидные знания физики.";
    if (percentage >= 60) return "Хорошо! Вы знаете основы физики.";
    if (percentage >= 40) return "Неплохо, но есть над чем поработать.";
    return "Стоит больше изучать физику. Не отчаивайтесь!";
  };
  
  const getGradientClass = () => {
    if (percentage >= 90) return "bg-gradient-lava";
    if (percentage >= 70) return "bg-gradient-ember";
    return "bg-gradient-ash";
  };
  
  const handleTryAgain = () => {
    resetQuiz();
    navigate('/quiz');
  };
  
  // Группируем вопросы по темам
  const themesMap = {
    "Механические колебания": [1, 3, 5, 7, 11, 13],
    "Энергия электрического поля": [2, 8, 15],
    "Электрический ток в различных средах": [4, 6, 9, 10, 12, 14]
  };
  
  // Получаем вопросы по теме
  const getQuestionsByTheme = (themeIds: number[]) => {
    return questions.filter(q => themeIds.includes(q.id));
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12 page-transition">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 rounded-full bg-white shadow-lg mb-6">
              <Award className="h-12 w-12 text-lava-500" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Результаты теста</h1>
            
            <div className="mb-6">
              <div className="flex items-center justify-center">
                <div 
                  className={`w-32 h-32 rounded-full ${getGradientClass()} flex items-center justify-center mb-4 text-white text-3xl font-bold animate-pulse-soft`}
                >
                  {score}/{totalQuestions}
                </div>
              </div>
              <p className="text-xl font-medium mb-2">
                Результат: {percentage.toFixed(0)}%
              </p>
              <p className="text-lg text-ash-700">
                {getFeedbackMessage()}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleTryAgain} className="lava-button flex items-center justify-center gap-2">
                <RefreshCw className="h-5 w-5" /> Пройти тест снова
              </button>
              
              <Link to="/" className="ash-button flex items-center justify-center gap-2">
                <ExternalLink className="h-5 w-5" /> Вернуться на главную
              </Link>
            </div>
          </div>
          
          <div className="divider h-px bg-gradient-to-r from-transparent via-ash-300 to-transparent my-8"></div>
          
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Подробные объяснения</h2>
            <p className="text-ash-700 mb-4 text-center">
              Ниже представлены подробные объяснения всех ответов для лучшего понимания материала.
            </p>
            <div className="flex items-center gap-2 text-ash-500 text-sm justify-center">
              <BookOpen className="h-4 w-4" />
              <span>Всего вопросов: {questions.length}</span>
            </div>
          </div>
          
          {/* Отображаем вопросы по категориям */}
          {Object.entries(themesMap).map(([theme, ids]) => (
            <div key={theme} className="mb-12">
              <h3 className="text-xl font-bold mb-6 text-lava-600 border-b border-ash-200 pb-2">{theme}</h3>
              <div className="space-y-8">
                {getQuestionsByTheme(ids).map((question) => (
                  <QuestionCard 
                    key={question.id} 
                    question={question} 
                    showResults={true} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Results;
