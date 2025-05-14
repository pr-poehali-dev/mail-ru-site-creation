import React from "react";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const Features: React.FC = () => {
  const features = [
    {
      icon: "ShieldCheck",
      title: "Безопасность",
      description:
        "Высокий уровень защиты ваших личных данных и конфиденциальность переписки",
    },
    {
      icon: "Zap",
      title: "Скорость",
      description: "Мгновенная доставка сообщений и документов вашим адресатам",
    },
    {
      icon: "HardDrive",
      title: "Вместительность",
      description:
        "Большой объем почтового ящика для хранения важных сообщений",
    },
    {
      icon: "Filter",
      title: "Умная фильтрация",
      description:
        "Автоматическая сортировка писем и блокировка нежелательной корреспонденции",
    },
    {
      icon: "FolderOpen",
      title: "Организация",
      description:
        "Удобные папки и метки для упорядочивания писем по категориям",
    },
    {
      icon: "FileText",
      title: "Вложения",
      description: "Возможность передачи файлов различных форматов и размеров",
    },
  ];

  return (
    <div className="bg-postRussia-lightBlue py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-postRussia-blue mb-8">
          Преимущества нашей электронной почты
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-postRussia-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Icon
                    name={feature.icon}
                    className="text-postRussia-blue"
                    size={24}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            Доступно на всех устройствах: компьютерах, планшетах, смартфонах
          </p>
          <div className="flex justify-center space-x-4">
            <Icon
              name="Smartphone"
              className="text-postRussia-blue"
              size={24}
            />
            <Icon name="Tablet" className="text-postRussia-blue" size={24} />
            <Icon name="Laptop" className="text-postRussia-blue" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
