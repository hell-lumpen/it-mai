import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from './pages/homepage/HomePage';
import './App.css';
import BachCSPage from "./pages/bachelors/BachCSPage/BachCSPage";
import BachFIPage from "./pages/bachelors/BachFIPage/BachFIPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NotFoundPage from "./pages/notfoundpage/NotFoundPage";

const App = () => {
  return (
      <div className="app">
        <Helmet>
          <title>Институт №8 МАИ</title>
        </Helmet>
        <Header />
        <main className="content">
          <Switch>
            <Route
                exact
                path="/"
                render={() => (
                    <>
                      <Helmet>
                        <title>Институт №8 МАИ | Главная</title>
                      </Helmet>
                      <HomePage />
                    </>
                )}
            />
            <Route
                path="/bachelors/cs"
                render={() => (
                    <>
                      <Helmet>
                        <title>Институт №8 МАИ | Компьютерные науки и прикладная математика</title>
                      </Helmet>
                      <BachCSPage />
                    </>
                )}
            />
            <Route
                path="/bachelors/fi"
                render={() => (
                    <>
                      <Helmet>
                        <title>Институт №8 МАИ | Фундаментальная информатика и информационные технологии</title>
                      </Helmet>
                      <BachFIPage />
                    </>
                )}
            />
            <Route
                path="/admission/application"
                component={() => {
                  window.location.href = 'https://lk.mai.ru';
                  return null;
                }}
            />
            <Route
                path="*"
                render={() => (
                    <>
                      <Helmet>
                        <title>404. Страница не найдена</title>
                      </Helmet>
                      <NotFoundPage />
                    </>
                )}
            />
          </Switch>
        </main>
        <Footer />
      </div>
  );
};

export default App;