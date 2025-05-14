
import React from 'react';
import Navbar from '@/components/Navbar';
import LoginForm from '@/components/LoginForm';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Герой секция */}
        <section className="bg-gradient-to-b from-postRussia-lightBlue to-white py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-postRussia-blue mb-4">
                  Электронная почта для всех задач
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                  Надежный и безопасный сервис для отправки и получения писем. 
                  Быстрая доставка, удобный интерфейс, защита от спама и вирусов.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-2" size={20} />
                    <span className="text-gray-700">Бесплатная регистрация</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-2" size={20} />
                    <span className="text-gray-700">Мобильный доступ</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-2" size={20} />
                    <span className="text-gray-700">Большой объем ящика</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <LoginForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Секция с преимуществами */}
        <Features />
        
        {/* Секция с призывом к действию */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Присоединяйтесь к миллионам пользователей
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Создайте электронную почту прямо сейчас и оцените все преимущества 
              нашего сервиса. Это абсолютно бесплатно!
            </p>
            <button className="post-button text-lg px-8 py-3">
              Создать почту
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
