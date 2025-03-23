
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, BadgeCheck, Github, Linkedin, Twitter, ExternalLink, MessageCircle } from 'lucide-react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout >
      <div className="container mx-auto px-4 py-8 md:py-12 page-transition">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="avatar-container w-64 h-64 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-lava opacity-20 animate-pulse-soft"></div>
                <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-white shadow-xl z-10 avatar-glow">
                  <img
                    src="/lovable-uploads/710f51fe-e13b-4840-b311-e6031eb0091b.png"
                    alt="Author Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-ember rounded-full opacity-50 floating-element"></div>
              </div>

              <div className="text-center md:text-left">
                <div className="inline-block px-3 py-1 bg-lava-100 text-lava-800 rounded-full text-sm font-medium mb-4">
                  Автор проекта
                </div>
                <h1 className="flex items-center text-3xl md:text-4xl font-bold mb-4">Иминов Юусуф <BadgeCheck className="h-5 w-5 mt-3 ml-1 hover:text-lava-600 transition-colors" /></h1>
                <p className="text-lg text-ash-700 mb-6">
                  — фронтенд-разработчик и веб-дизайнер с 3-летним опытом. Специализируется на создании современных, адаптивных и удобных веб-приложений.
                </p>

                <div className="flex gap-4 justify-center md:justify-start">
                  <a href="https://iminoyu0810@gmail.com" title='Email' className="w-10 h-10 flex items-center justify-center rounded-full bg-ash-800 text-white hover:bg-lava-600 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href="https://github.com/Iminovyu" title='GitHub' className="w-10 h-10 flex items-center justify-center rounded-full bg-ash-800 text-white hover:bg-lava-600 transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://t.me/iminov_yu" title='Telegram' className="w-10 h-10 flex items-center justify-center rounded-full bg-ash-800 text-white hover:bg-lava-600 transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </div>  
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 lava-gradient-text">Биография</h2>

            <div className="space-y-4 text-ash-700">
              <p>
                Иминов Юсуф — опытный фронтенд-разработчик и веб-дизайнер с 3-летним стажем. С ранних лет увлекался технологиями и дизайном, что привело его к профессиональной карьере в веб-разработке.
              </p>

              <p>
                За время работы создал десятки адаптивных, быстрых и удобных веб-приложений, сотрудничая с клиентами на фриланс-платформах, таких как Kwork. Специализируется на React, Next.js, Vue.js, а также владеет HTML, CSS, JavaScript, TypeScript и современными инструментами UI/UX-дизайна, включая Figma.
              </p>

              <p>
                Стремится к созданию инновационных решений, улучшению пользовательского опыта и совершенствованию своих навыков в сфере веб-разработки. Его главная цель — разрабатывать качественные, эстетичные и удобные интерфейсы, которые делают цифровой мир лучше.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-ash-900 to-ash-800 rounded-xl p-8 md:p-12 text-white shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Готовы проверить свои знания?</h2>
              <p className="text-lg text-ash-100 mb-8 max-w-2xl mx-auto">
                Пройдите наш тест по физике и проверьте, насколько хорошо вы знаете основные законы и принципы.
              </p>
              <Link to="/quiz" className="lava-button">
                Начать тест
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
