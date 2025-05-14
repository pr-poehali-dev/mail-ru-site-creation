
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В будущей реализации: авторизация пользователя
    console.log({ email, password, rememberMe });
    alert('Функционал авторизации в разработке');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 w-full max-w-md">
      <div className="flex items-center justify-center mb-6">
        <div className="w-12 h-12 bg-postRussia-blue rounded-md flex items-center justify-center text-white mr-3">
          <Icon name="Mail" size={28} />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-postRussia-blue">Электронная Почта</h2>
          <p className="text-gray-500 text-sm">Надежное получение и отправка сообщений</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Электронная почта
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <Icon name="AtSign" size={18} />
              </div>
              <Input
                id="email"
                type="email"
                placeholder="Введите вашу почту"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="post-input pl-10"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Пароль
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <Icon name="Lock" size={18} />
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Введите ваш пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="post-input pl-10"
                required
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                className="text-postRussia-blue rounded border-gray-300 focus:ring-postRussia-blue"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Запомнить меня
              </label>
            </div>
            <a href="#" className="text-sm post-link">
              Забыли пароль?
            </a>
          </div>
          
          <Button 
            type="submit" 
            className="w-full post-button"
          >
            Войти в почту
          </Button>
        </div>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Еще нет аккаунта?{' '}
          <a href="#" className="post-link font-medium">
            Зарегистрироваться
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
