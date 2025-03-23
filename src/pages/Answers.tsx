
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import Layout from '../components/Layout';
import { useQuiz } from '../components/QuizContext';
import QuestionCard from '../components/QuestionCard';

const Answers = () => {
  const { questions, answers } = useQuiz();
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12 page-transition">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center gap-2 text-ash-700 hover:text-lava-600 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Вернуться на главную</span>
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg mb-8">
            <h1 className="text-3xl font-bold mb-6 lava-gradient-text">Ответы на тест</h1>
            <p className="text-ash-700 mb-4">
              Здесь вы можете увидеть все вопросы теста и правильные ответы на них.
            </p>
            <div className="flex items-center gap-2 text-ash-500 text-sm">
              <BookOpen className="h-4 w-4" />
              <span>Всего вопросов: {questions.length}</span>
            </div>
          </div>
          
          <div className="space-y-8">
            {questions.map((question) => (
              <QuestionCard 
                key={question.id} 
                question={question} 
                showResults={true} 
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/quiz" className="lava-button">
              Пройти тест снова
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Answers;
