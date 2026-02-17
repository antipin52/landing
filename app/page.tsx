import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-4">
            ИИ + Человек
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Лендинги и{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            веб-приложения
          </span>
          {' '}под ключ
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Создаём красивые и функциональные веб-страницы за 1-3 дня.
          ИИ генерирует, вы принимаете.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#order"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
          >
            Оставить заявку
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20"
          >
            Наши услуги
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Что мы делаем</h2>
          <p className="text-gray-400">От простых лендингов до AI-приложений</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Service 1 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Лендинги</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Красивые продающие страницы для бизнеса. Дизайн, анимации, форма заявки.
            </p>
            <div className="text-2xl font-bold text-purple-400 mb-1">от $300</div>
            <div className="text-xs text-gray-500">1-2 дня</div>
          </div>

          {/* Service 2 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">AI-страницы</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Веб-страницы с интеграцией ИИ-чатов, генерацией текстов и умными формами.
            </p>
            <div className="text-2xl font-bold text-blue-400 mb-1">от $500</div>
            <div className="text-xs text-gray-500">2-3 дня</div>
          </div>

          {/* Service 3 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Настройка OpenClaw</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Персональный ИИ-помощник: установка, настройка, интеграция с Telegram, обучение.
            </p>
            <div className="text-2xl font-bold text-orange-400 mb-1">от $200</div>
            <div className="text-xs text-gray-500">2-3 дня</div>
          </div>

          {/* Service 4 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Простые приложения</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Небольшие веб-приложения: калькуляторы, планировщики, CRM-lite, инструменты.
            </p>
            <div className="text-2xl font-bold text-green-400 mb-1">от $800</div>
            <div className="text-xs text-gray-500">3-5 дней</div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Как мы работаем</h2>
          <p className="text-gray-400">Простой и прозрачный процесс</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-purple-500">
              <span className="text-2xl font-bold text-purple-400">1</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Заявка</h3>
            <p className="text-gray-400 text-sm">
              Оставляете заявку с описанием того, что нужно
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-500">
              <span className="text-2xl font-bold text-blue-400">2</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Разработка</h3>
            <p className="text-gray-400 text-sm">
              Создаём страницу за 1-3 дня, присылаем демо
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-pink-500">
              <span className="text-2xl font-bold text-pink-400">3</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Правки</h3>
            <p className="text-gray-400 text-sm">
              Вносим правки, вы принимаете результат
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-500">
              <span className="text-2xl font-bold text-green-400">4</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Сдача</h3>
            <p className="text-gray-400 text-sm">
              Передаём готовую страницу + инструкцию
            </p>
          </div>
        </div>
      </section>

      {/* OpenClaw Details Section */}
      <section id="openclaw" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Настройка OpenClaw</h2>
            <p className="text-gray-400">Персональный ИИ-помощник на вашем компьютере</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">Что входит в базовый пакет ($200):</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Установка OpenClaw</h4>
                  <p className="text-gray-400 text-sm">На ваш компьютер или VPS</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Настройка интерфейса</h4>
                  <p className="text-gray-400 text-sm">Удобное управление через Telegram</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Интеграция с Telegram</h4>
                  <p className="text-gray-400 text-sm">Чат для взаимодействия с ИИ</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Базовый функционал</h4>
                  <p className="text-gray-400 text-sm">Напоминания, задачи, заметки</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">2 сессии обучения</h4>
                  <p className="text-gray-400 text-sm">Настройка под ваши задачи</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Гарантия 1 месяц</h4>
                  <p className="text-gray-400 text-sm">Бесплатное исправление проблем</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Что можно настроить дополнительно:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full flex-shrink-0 mt-2"></div>
                <p className="text-gray-300">
                  <span className="text-white font-semibold">Учёт финансов:</span> запись расходов и доходов в чате, отчёты по категориям
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full flex-shrink-0 mt-2"></div>
                <p className="text-gray-300">
                  <span className="text-white font-semibold">Прогноз бюджета:</span> анализ расходов и рекомендации по оптимизации
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full flex-shrink-0 mt-2"></div>
                <p className="text-gray-300">
                  <span className="text-white font-semibold">Подготовка материалов:</span> сценарии, коммерческие предложения, презентации
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full flex-shrink-0 mt-2"></div>
                <p className="text-gray-300">
                  <span className="text-white font-semibold">Управление контактами:</span> интеграция с Google-таблицами
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-6 italic">
              Дополнительные интеграции обсуждаются индивидуально
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="order" className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-300 mb-8">
              Готовы обсудить проект? Напишите нам в Telegram —
            </p>
            <a
              href="https://t.me/Dimon_in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              @Dimon_in
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-white/10">
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            © 2026. Все права защищены.
          </p>
        </div>
      </footer>
    </main>
  );
}
