
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

type Email = {
  id: string;
  from: string;
  subject: string;
  preview: string;
  date: string;
  isRead: boolean;
  hasAttachment: boolean;
};

const mockEmails: Email[] = [
  {
    id: '1',
    from: 'Служба поддержки',
    subject: 'Добро пожаловать в Электронную Почту!',
    preview: 'Благодарим за регистрацию в сервисе электронной почты. Вот несколько советов для начала работы...',
    date: '14 мая',
    isRead: false,
    hasAttachment: false,
  },
  {
    id: '2',
    from: 'Анна Иванова',
    subject: 'Документы на подпись',
    preview: 'Здравствуйте! Направляю вам документы для ознакомления и подписания. С уважением, Анна',
    date: '13 мая',
    isRead: true,
    hasAttachment: true,
  },
  {
    id: '3',
    from: 'Новости',
    subject: 'Еженедельная рассылка: главные события',
    preview: 'В этой неделе: новые технологии в работе почтовых сервисов, обновления безопасности и другие новости...',
    date: '12 мая',
    isRead: true,
    hasAttachment: false,
  },
];

const MailboxPreview: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-postRussia-blue text-white p-4 flex items-center justify-between">
        <h2 className="text-xl font-medium">Демо-версия почтового ящика</h2>
        <Button variant="outline" className="text-white border-white hover:bg-white/20">
          <Icon name="MailPlus" className="mr-2" size={18} />
          Написать письмо
        </Button>
      </div>
      
      <div className="flex text-sm font-medium border-b">
        <div className="px-4 py-3 border-b-2 border-postRussia-blue text-postRussia-blue">Входящие</div>
        <div className="px-4 py-3 text-gray-600 hover:text-postRussia-blue cursor-pointer">Отправленные</div>
        <div className="px-4 py-3 text-gray-600 hover:text-postRussia-blue cursor-pointer">Черновики</div>
        <div className="px-4 py-3 text-gray-600 hover:text-postRussia-blue cursor-pointer">Спам</div>
        <div className="px-4 py-3 text-gray-600 hover:text-postRussia-blue cursor-pointer">Корзина</div>
      </div>
      
      <div className="divide-y">
        {mockEmails.map((email) => (
          <div key={email.id} className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors flex ${!email.isRead ? 'bg-postRussia-lightBlue' : ''}`}>
            <div className="mr-3 flex-shrink-0 pt-1">
              {!email.isRead ? (
                <div className="w-2 h-2 rounded-full bg-postRussia-blue"></div>
              ) : (
                <div className="w-2 h-2"></div>
              )}
            </div>
            <div className="flex-grow min-w-0">
              <div className="flex justify-between items-baseline mb-1">
                <span className={`font-medium ${!email.isRead ? 'text-black' : 'text-gray-700'}`}>{email.from}</span>
                <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{email.date}</span>
              </div>
              <div className={`text-sm ${!email.isRead ? 'font-medium' : ''} truncate`}>{email.subject}</div>
              <div className="text-xs text-gray-500 truncate">{email.preview}</div>
            </div>
            {email.hasAttachment && (
              <div className="ml-2 text-gray-400 flex-shrink-0 self-center">
                <Icon name="Paperclip" size={16} />
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="p-3 bg-gray-50 text-center text-sm text-gray-500">
        Это демонстрационный интерфейс. Для полного доступа к почте, пожалуйста, авторизуйтесь.
      </div>
    </div>
  );
};

export default MailboxPreview;
