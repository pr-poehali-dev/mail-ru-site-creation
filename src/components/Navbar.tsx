
import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Логотип */}
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-postRussia-blue rounded-md flex items-center justify-center text-white mr-2">
                <Icon name="Mail" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-postRussia-blue text-lg">Почта</span>
                <span className="text-xs text-gray-500 -mt-1">Электронная</span>
              </div>
            </div>
            
            {/* Навигация для планшетов и десктопов */}
            <div className="hidden md:ml-8 md:flex md:space-x-6">
              <a href="#" className="text-gray-600 hover:text-postRussia-blue font-medium">Главная</a>
              <a href="#" className="text-gray-600 hover:text-postRussia-blue font-medium">Услуги</a>
              <a href="#" className="text-gray-600 hover:text-postRussia-blue font-medium">Тарифы</a>
              <a href="#" className="text-gray-600 hover:text-postRussia-blue font-medium">Помощь</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Кнопки справа */}
            <a href="#" className="hidden md:inline-block post-link text-sm">Регистрация</a>
            <Button 
              className="bg-postRussia-blue hover:bg-blue-800 text-white px-4 py-1.5 h-auto"
            >
              Войти
            </Button>
            
            {/* Мобильная кнопка меню */}
            <div className="md:hidden">
              <button type="button" className="text-gray-500 hover:text-postRussia-blue">
                <Icon name="Menu" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
