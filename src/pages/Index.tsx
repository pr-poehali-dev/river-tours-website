import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Waves" size={32} className="text-blue-600" />
              <span
                className="text-2xl font-bold text-gray-900"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                РечнойСплав
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#hero"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                О нас
              </a>
              <a
                href="#routes"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Маршруты
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Цены/Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://v3.fal.media/files/elephant/0fPo3m24nSca_nHn0GiYn_output.png')`,
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Речные приключения
            <span className="block text-blue-600">ждут вас!</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Безопасные сплавы по живописным рекам с опытными инструкторами.
            Создайте незабываемые воспоминания вместе с нами!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              <Icon name="Calendar" className="mr-2" />
              Забронировать сплав
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
            >
              <Icon name="Phone" className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              О нас
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              Мы — команда профессионалов с 10-летним опытом организации речных
              сплавов. Наша миссия — показать красоту дикой природы и подарить
              незабываемые эмоции.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon
                  name="Shield"
                  size={48}
                  className="text-green-600 mx-auto mb-4"
                />
                <CardTitle className="text-xl font-bold text-gray-900">
                  Безопасность
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Сертифицированные инструкторы, современное снаряжение и
                  соблюдение всех норм безопасности
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon
                  name="Users"
                  size={48}
                  className="text-blue-600 mx-auto mb-4"
                />
                <CardTitle className="text-xl font-bold text-gray-900">
                  Опыт
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Более 1000 довольных клиентов и 50+ успешно проведенных
                  маршрутов за все время работы
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon
                  name="Heart"
                  size={48}
                  className="text-red-500 mx-auto mb-4"
                />
                <CardTitle className="text-xl font-bold text-gray-900">
                  Забота
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Индивидуальный подход к каждой группе, питание и трансфер
                  включены в стоимость
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section id="routes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Популярные маршруты
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              Выберите подходящий маршрут: от спокойных семейных сплавов до
              экстремальных приключений
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div
                className="h-48 bg-cover bg-center rounded-t-lg"
                style={{
                  backgroundImage: `url('/img/9beae1f0-2eec-4a19-ae4c-a86351de42c1.jpg')`,
                }}
              ></div>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  Семейный сплав
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Спокойный маршрут по реке Серга. Подходит для новичков и семей
                  с детьми от 8 лет.
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">
                    от 2,500₽
                  </span>
                  <div className="flex items-center text-gray-500">
                    <Icon name="Clock" size={16} className="mr-1" />
                    <span>4 часа</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div
                className="h-48 bg-cover bg-center rounded-t-lg"
                style={{
                  backgroundImage: `url('/img/8eb9d58b-5452-46f0-8466-af8a97993d7a.jpg')`,
                }}
              ></div>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  Активный сплав
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Маршрут средней сложности по реке Чусовая с порогами и
                  живописными скалами.
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">
                    от 3,500₽
                  </span>
                  <div className="flex items-center text-gray-500">
                    <Icon name="Clock" size={16} className="mr-1" />
                    <span>6 часов</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div
                className="h-48 bg-cover bg-center rounded-t-lg"
                style={{
                  backgroundImage: `url('/img/d13b6a78-e82c-41a2-bbb6-9d704d3da91a.jpg')`,
                }}
              ></div>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  Экстремальный сплав
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Сложный маршрут для опытных рафтеров по горной реке с порогами
                  3-4 категории.
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">
                    от 5,000₽
                  </span>
                  <div className="flex items-center text-gray-500">
                    <Icon name="Clock" size={16} className="mr-1" />
                    <span>8 часов</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Цены и контакты
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              Свяжитесь с нами для бронирования или получения дополнительной
              информации
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Что включено в стоимость:
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Check" className="text-green-600 mr-3" />
                  <span>Профессиональный инструктор</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" className="text-green-600 mr-3" />
                  <span>Полный комплект снаряжения</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" className="text-green-600 mr-3" />
                  <span>Трансфер до точки старта</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" className="text-green-600 mr-3" />
                  <span>Горячий обед на природе</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" className="text-green-600 mr-3" />
                  <span>Страховка на время сплава</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" className="text-green-600 mr-3" />
                  <span>Фотосъемка приключения</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Связаться с нами:
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Icon name="Phone" className="text-blue-600 mr-3" />
                  <div>
                    <div className="font-semibold">+7 (495) 123-45-67</div>
                    <div className="text-gray-600">
                      Ежедневно с 9:00 до 21:00
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Icon name="Mail" className="text-blue-600 mr-3" />
                  <div>
                    <div className="font-semibold">info@рафтинг.рф</div>
                    <div className="text-gray-600">Ответим в течение часа</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Icon name="MapPin" className="text-blue-600 mr-3" />
                  <div>
                    <div className="font-semibold">г. Екатеринбург</div>
                    <div className="text-gray-600">
                      ул. Речная, д. 25, офис 101
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6">
                  <Icon name="MessageCircle" className="mr-2" />
                  Написать в WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Waves" size={24} className="text-blue-400" />
              <span className="text-xl font-bold">РечнойСплав</span>
            </div>
            <div className="text-gray-400">
              © 2024 РечнойСплав. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
