import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    {
      id: 1,
      name: 'Whey Protein Premium',
      category: 'Протеины',
      description: 'Концентрат сывороточного протеина высшего качества',
      price: '2 990 ₽',
      image: 'https://cdn.poehali.dev/projects/8bf8ceb5-20c1-40cd-a241-91aadff4eb55/files/6849030c-9d16-4711-811d-e8d548235d84.jpg',
    },
    {
      id: 2,
      name: 'Isolate Pro 90',
      category: 'Протеины',
      description: 'Изолят протеина для набора сухой мышечной массы',
      price: '3 490 ₽',
      image: 'https://cdn.poehali.dev/projects/8bf8ceb5-20c1-40cd-a241-91aadff4eb55/files/6849030c-9d16-4711-811d-e8d548235d84.jpg',
    },
    {
      id: 3,
      name: 'BCAA Complex',
      category: 'Аминокислоты',
      description: 'Комплекс незаменимых аминокислот для восстановления',
      price: '1 790 ₽',
      image: 'https://cdn.poehali.dev/projects/8bf8ceb5-20c1-40cd-a241-91aadff4eb55/files/6849030c-9d16-4711-811d-e8d548235d84.jpg',
    },
    {
      id: 4,
      name: 'Creatine Monohydrate',
      category: 'Креатин',
      description: 'Чистый креатин моногидрат для силы и выносливости',
      price: '1 290 ₽',
      image: 'https://cdn.poehali.dev/projects/8bf8ceb5-20c1-40cd-a241-91aadff4eb55/files/6849030c-9d16-4711-811d-e8d548235d84.jpg',
    },
    {
      id: 5,
      name: 'Pre-Workout Energy',
      category: 'Предтренировочные',
      description: 'Мощный комплекс для взрывной энергии на тренировке',
      price: '2 190 ₽',
      image: 'https://cdn.poehali.dev/projects/8bf8ceb5-20c1-40cd-a241-91aadff4eb55/files/6849030c-9d16-4711-811d-e8d548235d84.jpg',
    },
    {
      id: 6,
      name: 'Omega-3 Premium',
      category: 'Витамины',
      description: 'Высококачественные омега-3 жирные кислоты',
      price: '990 ₽',
      image: 'https://cdn.poehali.dev/projects/8bf8ceb5-20c1-40cd-a241-91aadff4eb55/files/6849030c-9d16-4711-811d-e8d548235d84.jpg',
    },
  ];

  const brands = [
    { name: 'Optimum Nutrition', logo: '💪' },
    { name: 'MyProtein', logo: '🏋️' },
    { name: 'BSN', logo: '⚡' },
    { name: 'Dymatize', logo: '🔥' },
    { name: 'MuscleTech', logo: '💥' },
    { name: 'Universal', logo: '🎯' },
  ];

  const reviews = [
    {
      id: 1,
      name: 'Алиев М.',
      rating: 5,
      text: 'Отличный магазин! Качественная продукция, быстрая доставка. Протеин пришёл свежий, результаты заметны уже через месяц.',
      date: '15 октября 2024',
    },
    {
      id: 2,
      name: 'Магомедов К.',
      rating: 5,
      text: 'Заказываю здесь постоянно. Цены адекватные, консультанты помогли подобрать комплекс под мои цели. Рекомендую!',
      date: '3 ноября 2024',
    },
    {
      id: 3,
      name: 'Шанавазов У.',
      rating: 5,
      text: 'Большой выбор брендов, всё оригинальное. Пробовал разные магазины, но остановился на ALHIMIK. Сервис на высоте!',
      date: '28 октября 2024',
    },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">
              ALHIMIK
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['home', 'products', 'about', 'brands', 'reviews', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === section ? 'text-accent' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'products' && 'Продукты'}
                  {section === 'about' && 'О нас'}
                  {section === 'brands' && 'Бренды'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button size="sm" className="hidden md:flex">
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Корзина
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background via-background to-muted">
          <div className="container mx-auto px-4 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <Badge variant="secondary" className="w-fit">
                  Премиум спортивное питание
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Твоя сила в
                  <span className="text-accent block mt-2">ALHIMIK</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-md">
                  Высококачественное спортивное питание для достижения максимальных результатов. Протеины, аминокислоты, витамины от мировых брендов.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" onClick={() => scrollToSection('products')} className="group">
                    Каталог продуктов
                    <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                    Связаться с нами
                  </Button>
                </div>
              </div>
              <div className="relative animate-scale-in">
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
                <img
                  src="https://cdn.poehali.dev/projects/8bf8ceb5-20c1-40cd-a241-91aadff4eb55/files/d5bb9cda-ea33-41a3-a4a7-6a5401950139.jpg"
                  alt="Athlete with protein shaker"
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <Badge variant="secondary" className="mx-auto w-fit">
                Наш ассортимент
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Каталог продуктов</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Полный спектр спортивного питания для роста мышц, восстановления и повышения энергии
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <Badge variant="secondary" className="w-fit">
                      {product.category}
                    </Badge>
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p className="text-muted-foreground text-sm">{product.description}</p>
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-2xl font-bold text-accent">{product.price}</span>
                      <Button size="sm" className="group/btn">
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        Купить
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  О компании
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold">ALHIMIK — качество превыше всего</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Мы специализируемся на продаже премиального спортивного питания от ведущих мировых производителей. Наша миссия — помочь каждому достичь своих спортивных целей.
                  </p>
                  <p>
                    За годы работы мы собрали команду экспертов, которые помогут подобрать идеальный комплекс питания под ваши задачи: набор массы, сушка, повышение выносливости или общее укрепление здоровья.
                  </p>
                  <p>
                    Все продукты сертифицированы и проходят строгий контроль качества. Мы гарантируем оригинальность и свежесть каждой позиции в нашем каталоге.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-accent">5+</div>
                    <div className="text-sm text-muted-foreground">лет на рынке</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-accent">500+</div>
                    <div className="text-sm text-muted-foreground">товаров</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-accent">10K+</div>
                    <div className="text-sm text-muted-foreground">клиентов</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full" />
                <img
                  src="https://cdn.poehali.dev/projects/8bf8ceb5-20c1-40cd-a241-91aadff4eb55/files/83f537f1-febc-4223-afde-df47e702ba7d.jpg"
                  alt="Premium brands"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="brands" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <Badge variant="secondary" className="mx-auto w-fit">
                Мировые лидеры
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Наши бренды</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Работаем только с проверенными производителями спортивного питания
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {brands.map((brand, index) => (
                <Card
                  key={index}
                  className="p-8 flex flex-col items-center justify-center space-y-4 hover:shadow-lg transition-all hover:scale-105 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="text-5xl">{brand.logo}</div>
                  <div className="text-sm font-semibold text-center">{brand.name}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <Badge variant="secondary" className="mx-auto w-fit">
                Отзывы клиентов
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Что говорят о нас</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Реальные отзывы наших покупателей
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {reviews.map((review, index) => (
                <Card
                  key={review.id}
                  className="p-6 space-y-4 hover:shadow-lg transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{review.text}</p>
                  <div className="pt-4 border-t">
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.date}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <Badge variant="secondary" className="mx-auto w-fit">
                  Свяжитесь с нами
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold">Контакты</h2>
                <p className="text-xl text-muted-foreground">
                  Ответим на все ваши вопросы и поможем подобрать продукты
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Телефон</div>
                        <div className="text-muted-foreground">+7 (965) 490-27-40</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={24} className="text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Email</div>
                        <div className="text-muted-foreground">info@alhimik.shop</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Адрес</div>
                        <div className="text-muted-foreground">г. Махачкала, ул. Малыгина, д. 113</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" size={24} className="text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Режим работы</div>
                        <div className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-8">
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" />
                    </div>
                    <div>
                      <Textarea placeholder="Ваше сообщение" rows={4} />
                    </div>
                    <Button className="w-full" size="lg">
                      Отправить сообщение
                      <Icon name="Send" size={18} className="ml-2" />
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold">ALHIMIK</div>
              <p className="text-sm opacity-80">
                Премиум спортивное питание для достижения ваших целей
              </p>
            </div>

            <div className="space-y-4">
              <div className="font-semibold">Навигация</div>
              <div className="space-y-2 text-sm opacity-80">
                <div className="cursor-pointer hover:opacity-100" onClick={() => scrollToSection('home')}>Главная</div>
                <div className="cursor-pointer hover:opacity-100" onClick={() => scrollToSection('products')}>Продукты</div>
                <div className="cursor-pointer hover:opacity-100" onClick={() => scrollToSection('about')}>О нас</div>
                <div className="cursor-pointer hover:opacity-100" onClick={() => scrollToSection('brands')}>Бренды</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="font-semibold">Информация</div>
              <div className="space-y-2 text-sm opacity-80">
                <div className="cursor-pointer hover:opacity-100">Доставка и оплата</div>
                <div className="cursor-pointer hover:opacity-100">Гарантии</div>
                <div className="cursor-pointer hover:opacity-100">Возврат товара</div>
                <div className="cursor-pointer hover:opacity-100">Сертификаты</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="font-semibold">Мы в соцсетях</div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center cursor-pointer hover:bg-primary-foreground/20 transition-colors">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center cursor-pointer hover:bg-primary-foreground/20 transition-colors">
                  <Icon name="Youtube" size={20} />
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center cursor-pointer hover:bg-primary-foreground/20 transition-colors">
                  <Icon name="Send" size={20} />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm opacity-80">
            © 2024 ALHIMIK. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;