
import React from 'react';
import { CheckCircle, Circle, AlertCircle } from 'lucide-react';
import { Question, useQuiz } from './QuizContext';

interface QuestionCardProps {
  question: Question;
  showResults?: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, showResults = false }) => {
  const { answers, selectAnswer, isCompleted } = useQuiz();
  const selectedAnswerId = answers[question.id];
  
  const handleSelectAnswer = (answerId: string) => {
    if (!isCompleted) {
      selectAnswer(question.id, answerId);
    }
  };
  
  return (
    <div className="question-card animate-fade-in">
      <h3 className="text-xl font-medium text-ash-800 mb-4">
        {question.id}. {question.text}
      </h3>
      
      <div className="space-y-3 mt-4">
        {question.answers.map((answer) => {
          const isSelected = selectedAnswerId === answer.id;
          const isCorrect = answer.id === question.correctAnswerId;
          const isIncorrect = isSelected && !isCorrect && showResults;
          
          let className = "answer-option";
          if (showResults && isCorrect) className += " correct";
          else if (isIncorrect) className += " incorrect";
          else if (isSelected) className += " selected";
          
          return (
            <button
              key={answer.id}
              className={className}
              onClick={() => handleSelectAnswer(answer.id)}
              disabled={isCompleted}
            >
              {showResults ? (
                isCorrect ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : isIncorrect ? (
                  <AlertCircle className="h-5 w-5 text-red-500" />
                ) : (
                  <Circle className="h-5 w-5 text-ash-300" />
                )
              ) : (
                <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center
                  ${isSelected ? 'border-lava-500 bg-lava-50' : 'border-ash-300'}`}>
                  {isSelected && <div className="h-2.5 w-2.5 rounded-full bg-lava-500"></div>}
                </div>
              )}
              <span>{answer.text}</span>
            </button>
          );
        })}
      </div>
      
      {showResults && (
        <div className="mt-6 p-4 bg-ash-50 rounded-lg border border-ash-200">
          <h4 className="font-medium text-ash-800 mb-2">Объяснение:</h4>
          <p className="text-ash-700">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
