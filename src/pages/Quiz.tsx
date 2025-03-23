
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import Layout from '../components/Layout';
import QuestionCard from '../components/QuestionCard';
import { useQuiz } from '../components/QuizContext';

const Quiz = () => {
  const navigate = useNavigate();
  const { 
    questions, 
    currentQuestionIndex, 
    setCurrentQuestionIndex, 
    answers, 
    completeQuiz, 
    isCompleted 
  } = useQuiz();
  
  const currentQuestion = questions[currentQuestionIndex];
  const hasAnsweredCurrent = answers[currentQuestion.id] !== undefined;
  const totalQuestions = questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        setIsAnimating(false);
      }, 300);
    }
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsAnimating(false);
      }, 300);
    }
  };
  
  const handleComplete = () => {
    completeQuiz();
    navigate('/results');
  };
  
  const allQuestionsAnswered = questions.every(q => answers[q.id] !== undefined);
  
  useEffect(() => {
    // Прокрутка вверх при изменении вопроса
    window.scrollTo(0, 0);
  }, [currentQuestionIndex]);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12 page-transition">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold lava-gradient-text">Physics Quiz</h2>
            <span className="text-lg font-medium">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
          </div>
          
          {/* Progress bar */}
          <div className="w-full h-2 bg-ash-200 rounded-full mb-8">
            <div 
              className="h-full bg-gradient-lava rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Question card with animation */}
          <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            {currentQuestion && <QuestionCard question={currentQuestion} />}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className={`ash-button flex items-center gap-2 ${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <ArrowLeft className="h-5 w-5" /> Previous
            </button>
            
            {currentQuestionIndex < totalQuestions - 1 ? (
              <button 
                onClick={handleNext}
                disabled={!hasAnsweredCurrent}
                className={`lava-button flex items-center gap-2 ${!hasAnsweredCurrent ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Next <ArrowRight className="h-5 w-5" />
              </button>
            ) : (
              <button 
                onClick={handleComplete}
                disabled={!hasAnsweredCurrent}
                className={`ember-button flex items-center gap-2 ${!hasAnsweredCurrent ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Complete Quiz <Check className="h-5 w-5" />
              </button>
            )}
          </div>
          
          {/* Question navigation */}
          <div className="mt-12">
            <p className="text-center mb-4 text-ash-700">Jump to question:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {questions.map((q, index) => (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`
                    w-10 h-10 flex items-center justify-center rounded-full font-medium
                    transition-all duration-200
                    ${currentQuestionIndex === index 
                      ? 'bg-gradient-lava text-white' 
                      : answers[q.id] !== undefined 
                        ? 'bg-ash-200 text-ash-800' 
                        : 'bg-white border border-ash-300 text-ash-600'
                    }
                  `}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
          
          {/* Complete button at bottom if all questions answered */}
          {allQuestionsAnswered && !isCompleted && currentQuestionIndex !== totalQuestions - 1 && (
            <div className="mt-8 text-center">
              <button onClick={handleComplete} className="ember-button">
                Complete Quiz <Check className="inline ml-2 h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Quiz;
