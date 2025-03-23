
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Типы для данных теста
export interface Answer {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
  correctAnswerId: string;
  explanation: string;
}

// Создаем данные для теста
export const quizQuestions: Question[] = [
  {
    id: 1,
    text: "Что такое полупроводник?",
    answers: [
      { id: "a", text: "Материал с нулевым сопротивлением." },
      { id: "b", text: "Материал, сопротивление которого больше, чем у проводников, но меньше, чем у изоляторов." },
      { id: "c", text: "Материал, проводящий ток только при низких температурах." },
      { id: "d", text: "Материал, который всегда имеет постоянное сопротивление." }
    ],
    correctAnswerId: "b",
    explanation: "Полупроводники (например, кремний Si, германий Ge) имеют удельное сопротивление между проводниками (медь, алюминий) и изоляторами (стекло, резина) Формула:ρ = R * S / l,где ρ — удельное сопротивление (Ом·м), R — сопротивление образца (Ом) S — площадь сечения (м²), l — длина (м)."
  },
  {
    id: 2,
    text: "Собственная проводимость полупроводников обусловлена:",
    answers: [
      { id: "a", text: "Добавлением примесей." },
      { id: "b", text: "Только электронами." },
      { id: "c", text: "Электронами и дырками." },
      { id: "d", text: "Ионами кристаллической решетки." }
    ],
    correctAnswerId: "c",
    explanation: "При разрыве ковалентных связей появляются свободные электроны и дырки."
  },
  {
    id: 3,
    text: "При нагревании сопротивление полупроводника:",
    answers: [
      { id: "a", text: "Увеличивается, как у металлов." },
      { id: "b", text: "Не изменяется." },
      { id: "c", text: "Уменьшается." },
      { id: "d", text: " Сначала увеличивается, потом уменьшается." }
    ],
    correctAnswerId: "c",
    explanation: "При нагреве растет концентрация носителей заряда (электронов и дырок), что снижает сопротивление."
  },
  {
    id: 4,
    text: "Какая примесь создаёт n-тип проводимости?",
    answers: [
      { id: "a", text: "Бор (акцептор)." },
      { id: "b", text: "Фосфор (донор)." },
      { id: "c", text: "Алюминий (акцептор)." },
      { id: "d", text: "Галлий (акцептор)." }
    ],
    correctAnswerId: "b",
    explanation: "Донорные примеси (например, фосфор в Si) добавляют свободные электроны."
  },
  {
    id: 5,
    text: "p-тип проводимости возникает при добавлении:",
    answers: [
      { id: "a", text: "Мышьяка." },
      { id: "b", text: "Алюминия." },
      { id: "c", text: "Германия" },
      { id: "d", text: "Фосфора." }
    ],
    correctAnswerId: "b",
    explanation: "Акцепторные примеси (алюминий, бор) создают дырочную проводимость."
  },
  {
    id: 6,
    text: "Что такое p-n переход?",
    answers: [
      { id: "a", text: "Граница между двумя проводниками." },
      { id: "b", text: "Граница между полупроводниками p- и n-типа." },
      { id: "c", text: "Переход между металлом и полупроводником." },
      { id: "d", text: "Область с высокой проводимостью." }
    ],
    correctAnswerId: "b",
    explanation: "В p-n переходе возникает электрическое поле, препятствующее диффузии носителей."
  },
  {
    id: 7,
    text: "Диод проводит ток:",
    answers: [
      { id: "a", text: "Только в прямом направлении." },
      { id: "b", text: "Только в обратном направлении." },
      { id: "c", text: "В обоих направлениях." },
      { id: "d", text: "Не проводит ток." }
    ],
    correctAnswerId: "a",
    explanation: "Прямое включение (плюс к p-области) уменьшает потенциальный барьер."
  },
  {
    id: 8,
    text: "Формула для прямого тока через диод:",
    answers: [
      { id: "a", text: "I= R/U" },
      { id: "b", text: "I = I₀ * (e^(eU / kT) - 1)." },
      { id: "c", text: "I = U * R." },
      { id: "d", text: "I = kT / e." }
    ],
    correctAnswerId: "b",
    explanation: "Формула Шокли описывает вольт-амперную характеристику диода."
  },
  {
    id: 9,
    text: "Температурный коэффициент сопротивления полупроводников:",
    answers: [
      { id: "a", text: "Положительный." },
      { id: "b", text: "Отрицательный." },
      { id: "c", text: "Нулевой." },
      { id: "d", text: "Зависит от примесей." }
    ],
    correctAnswerId: "b",
    explanation: "Сопротивление полупроводников падает с ростом температуры."
  },
  {
    id: 10,
    text: "Для чего используется транзистор?",
    answers: [
      { id: "a", text: "Для выпрямления тока." },
      { id: "b", text: "Для выпрямления тока." },
      { id: "c", text: "Для хранения заряда." },
      { id: "d", text: "Для генерации света." }
    ],
    correctAnswerId: "b",
    explanation: "Транзисторы управляют током через базу, усиливая сигнал."
  },
  {
    id: 11,
    text: "Зонная теория: чем объясняется проводимость полупроводников?",
    answers: [
      { id: "a", text: "Перекрытием валентной зоны и зоны проводимости." },
      { id: "b", text: "Узкой запрещённой зоной (1-3 эВ)." },
      { id: "c", text: "Широкой запрещённой зоной (>5 эВ)." },
      { id: "d", text: "Отсутствием запрещённой зоны." }
    ],
    correctAnswerId: "b",
    explanation: "Запрещённая зона полупроводников (~1 эВ) позволяет электронам преодолевать её при нагреве или освещении."
  },
  {
    id: 12,
    text: "Что такое электролиз?",
    answers: [
      { id: "a", text: "Прохождение тока через полупроводники" },
      { id: "b", text: "Прохождение тока через вакуум" },
      { id: "c", text: "Химические реакции при прохождении тока через растворы или расплавы электролитов" },
      { id: "d", text: "Прохождение тока через газы" }
    ],
    correctAnswerId: "c",
    explanation: "Электролиз — это физико-химический процесс, происходящий в растворе или расплаве электролита при прохождении через него электрического тока, сопровождающийся выделением веществ на электродах. При электролизе происходит превращение электрической энергии в химическую."
  },
  {
    id: 13,
    text: "Какой элемент НЕ является полупроводником?",
    answers: [
      { id: "a", text: "Кремний." },
      { id: "b", text: "Германий." },
      { id: "c", text: "Медь." },
      { id: "d", text: "Арсенид галлия." }
    ],
    correctAnswerId: "c",
    explanation: "Медь — проводник, а Si, Ge, GaAs — полупроводники."
  },
  {
    id: 14,
    text: "При прямом смещении p-n перехода:",
    answers: [
      { id: "a", text: "Ток почти отсутствует." },
      { id: "b", text: "Ток растёт экспоненциально." },
      { id: "c", text: "Ток линейно зависит от напряжения." },
      { id: "d", text: "Напряжение пробоя." }
    ],
    correctAnswerId: "b",
    explanation: "При прямом смещении потенциальный барьер уменьшается, и ток через диод описывается формулой:I = I₀ * (e^(eU / (kT)) — 1)"
  },
  {
    id: 15,
    text: "Формула концентрации электронов в собственном полупроводнике:",
    answers: [
      { id: "a", text: "n = p" },
      { id: "b", text: "n = sqrt(Nc * Nv) * e^(-Eg / (2kT))" },
      { id: "c", text: "n = Eg / (kT)" },
      { id: "d", text: "n = p * e^(Eg / kT)" }
    ],
    correctAnswerId: "b",
    explanation: "Концентрация носителей зависит от ширины запрещённой зоны (E_g) и температуры."
  }
];

// Типы контекста
interface QuizContextType {
  questions: Question[];
  currentQuestionIndex: number;
  answers: Record<number, string>;
  isCompleted: boolean;
  score: number;
  setCurrentQuestionIndex: (index: number) => void;
  selectAnswer: (questionId: number, answerId: string) => void;
  completeQuiz: () => void;
  resetQuiz: () => void;
}

// Создаем контекст
const QuizContext = createContext<QuizContextType | undefined>(undefined);

// Провайдер контекста
export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const selectAnswer = (questionId: number, answerId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerId }));
  };

  const completeQuiz = () => {
    let correctAnswers = 0;
    
    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswerId) {
        correctAnswers++;
      }
    });
    
    setScore(correctAnswers);
    setIsCompleted(true);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsCompleted(false);
    setScore(0);
  };

  const questions = quizQuestions;

  const value = {
    questions,
    currentQuestionIndex,
    answers,
    isCompleted,
    score,
    setCurrentQuestionIndex,
    selectAnswer,
    completeQuiz,
    resetQuiz,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

// Хук для доступа к контексту
export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
