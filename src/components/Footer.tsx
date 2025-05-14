
import React from 'react';
import Icon from '@/components/ui/icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-postRussia-blue text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Раздел О компании */}
          <div>
            <h3 className="text-lg font-semibold mb-4">О компании</h3>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">О нас</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Новости</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Вакансии</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Контакты</a></li>
            </ul>
          </div>
          
          {/* Раздел Услуги */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Отправка писем</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Хранение документов</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Электронная подпись</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Деловая переписка</a></li>
            </ul>
          </div>
          
          {/* Раздел Поддержка */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Часто задаваемые вопросы</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Инструкции</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Техническая поддержка</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Сообщить о проблеме</a></li>
            </ul>
          </div>
          
          {/* Раздел Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Связаться с нами</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Icon name="Phone" size={18} className="mr-2" />
                <span>8 800 100 00 00</span>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" size={18} className="mr-2" />
                <span>support@почта.рф</span>
              </li>
              <li className="flex items-center">
                <Icon name="MapPin" size={18} className="mr-2" />
                <span>Москва, ул. Почтовая, 1</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 opacity-20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-sm opacity-80">
              &copy; 2025 Электронная Почта. Все права защищены.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-gray-300">
              <Icon name="Facebook" size={20} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <Icon name="Twitter" size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <Icon name="Instagram" size={20} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <Icon name="Youtube" size={20} />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
