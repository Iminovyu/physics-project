
import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import Layout from '../components/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center bg-ash-50 page-transition">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-lava-100 text-lava-600 rounded-full mb-6">
            <AlertTriangle className="h-10 w-10" />
          </div>
          
          <h1 className="text-4xl font-bold mb-4 lava-gradient-text">404</h1>
          <p className="text-xl text-ash-700 mb-8">
            Oops! Страница, которую вы ищете, не существует.
          </p>
          
          <Link 
            to="/" 
            className="lava-button inline-flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Вернуться на главную
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
