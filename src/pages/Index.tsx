
import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, ArrowRight, BookOpen, GraduationCap, FileText } from 'lucide-react';
import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      <div className="page-transition">
        {/* Hero Section with gradient background instead of avatar */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-lava-600 via-lava-400 to-ember-300 opacity-20"></div>
          
          <div className="relative container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block p-2 rounded-full bg-white/10 mb-6">
                <Atom className="h-8 w-8 text-lava-500" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Проверьте свои знания <span className="lava-gradient-text">физики</span>
              </h1>
              
              <p className="text-lg md:text-xl mb-8 text-ash-700 max-w-2xl mx-auto">
                Пройдите наш тест из 15 вопросов и проверьте, насколько хорошо вы знаете полу проводники в физике.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/quiz" className="lava-button">
                  Начать тест <ArrowRight className="inline ml-2 h-5 w-5" />
                </Link>
                
                <Link to="/about" className="text-white ember-button">
                  Об авторе <BookOpen className="text-white inline ml-2 h-5 w-5" />
                </Link>
                
                <Link to="/answers" className="ash-button">
                  Ответы <FileText className="inline ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white to-ash-50 ">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Что включает наш тест по <span className="ember-gradient-text">физике</span>
              </h2>
              <p className="text-lg text-ash-600">
                Тест охватывает различные вопросы физики - По полупроводникам
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-ash-100 transition-all duration-300 hover:shadow-xl">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-lava text-white mb-6">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">15 вопросов</h3>
                <p className="text-ash-600">
                  Тест включает 15 тщательно подобранных вопросов для проверки ваших знаний по полупроводникам.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-ash-100 transition-all duration-300 hover:shadow-xl">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-ember text-white mb-6">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Подробные объяснения</h3>
                <p className="text-ash-600">
                  После завершения теста вы получите подробные объяснения правильных ответов для лучшего понимания материала.
                </p>
              </div>
              
            </div>
            
            <div className="text-center mt-16 flex justify-center gap-4">
              <Link to="/quiz" className="lava-button">
                Начать тест <ArrowRight className="inline ml-2 h-5 w-5" />
              </Link>
              
              <Link to="/answers" className="ash-button flex items-center">
                Посмотреть ответы <FileText className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
