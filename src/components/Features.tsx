
import React from 'react';
import Icon from '@/components/ui/icon';

const Features: React.FC = () => {
  const features = [
    {
      icon: 'ShieldCheck',
      title: 'Безопасность',
      description: 'Высокий уровень защиты ваших личных данных и конфиденциальность переписки'
    },
    {
      icon: 'Zap',
      title: 'Скорость',
      description: 'Мгновенная доставка сообщений и документов вашим адресатам'
    },
    {
      icon: 'HardDrive',
      title: 'Вместительность',
      description: 'Большой объем почтового ящика для хранения важных сообщений'
    }
  ];

  return (
    <div className="bg-postRussia-lightBlue py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-postRussia-blue mb-8">
          Преимущества электронной почты
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md border border-gray-100"
            >
              <div className="w-12 h-12 bg-postRussia-blue/10 rounded-full flex items-center justify-center mb-4">
                <Icon name={feature.icon} className="text-postRussia-blue" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            Доступно на всех устройствах: компьютерах, планшетах, смартфонах
          </p>
          <div className="flex justify-center space-x-4">
            <Icon name="Smartphone" className="text-postRussia-blue" size={24} />
            <Icon name="Tablet" className="text-postRussia-blue" size={24} />
            <Icon name="Laptop" className="text-postRussia-blue" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
