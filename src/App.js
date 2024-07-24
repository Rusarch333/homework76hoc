import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import SignInPage from './pages/SignInPage';
import UsersLoaderPage from './pages/UsersLoaderPage';
import ErrorPage from './pages/ErrorPage';
import LoaderPage from './pages/LoaderPage';
import EventsBlock from './pages/LoaderPage/EventsBlock';
import PhonesBlock from './pages/LoaderPage/PhonesBlock';
import Header from './components/Header';

// !!!!!!! ВНИМАНИЕ! ЭТУ КЛАССНУЮ РАБОТУ НУЖНО СРАВНИВАТЬ ТЩАТЕЛЬНО С ПРЕДЫДУЩЕЙ, ЧТОБЫ ПОНЯТЬ ОПТИМИЗАЦИЮ, КОТОРУЮ МЫ ПРОДЕЛАЛИ !!!!!!

// Тут в отдельном файлике у нас созданы контексты для хранения авторизированного пользователя и выбраной темы
import { UserContext, ThemeContext } from './contexts';

// Тут в отдельном файлике констант будем хранить строчные литералы, отвечающие за название/тип текущей темы
import CONSTANTS from './constants';
const { THEME } = CONSTANTS;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Будем хранить авторизированного пользователя в стейте, такой пользователь обычно должен быть доступен разным компонентам вне зависимости от уровня вложенности с помощью Контекста
      user: {
        id: 4,
        name: 'Stalone',
        email: 'bred@gmail.com',
        password: 123,
        ava: '/images/noname.webp',
      },
      // Тут же в стейте будем хранить тему
      theme: THEME.LIGHT,
    };
  }
  // Метод для изменения темы в стейте
  setTheme = () => {
    const { theme } = this.state;
    this.setState({ theme: theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT });
  };
  render() {
    const { user, theme } = this.state;
    return (
      <>
         {/* Записываем текущую тему, через провайдер в контекст темы, а также метод переключения темы, подписываем Сonsumer-components-детей провайдера на изменения провайдера */}
        <ThemeContext.Provider value={[theme, this.setTheme]}>
          {/* Записываем текущего юзера, через провайдер в контекст юзера, подписываем Сonsumer-components-детей провайдера на изменения провайдера */}
          <UserContext.Provider value={user}>
            <BrowserRouter>
              {/* На примере домашней страничке ниже, где мы использовали HOC, в хедере используем технику двойного HOC, так-как тут у нас двойной контекст! */}
              <Header />
              <main>
                <Routes>
                   {/* Воспользуемся контекстом внутри домашней странички */}
                  <Route path="/" element={<HomePage />}></Route>
                  {/* Плюс добавим контекст на страничку подгрузки юзеров */}
                  <Route path="/users" element={<UsersLoaderPage />}></Route>
                  <Route path="/sign-in" element={<SignInPage />}></Route>

                  <Route path="/load/" element={<LoaderPage />}>
                    <Route path="events" element={<EventsBlock />} />
                    <Route path="phones" element={<PhonesBlock />} />
                  </Route>

                  <Route path="*" element={<ErrorPage />}></Route>
                </Routes>
              </main>
              <footer>2024</footer>
            </BrowserRouter>
          </UserContext.Provider>
        </ThemeContext.Provider>
      </>
    );
  }
}

export default App;
