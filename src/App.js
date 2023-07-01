import React, { useEffect, useState } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from './pages/homepage/HomePage';
import './App.css';
import BachCSPage from "./pages/bachelors/BachCSPage/BachCSPage";
import BachFIPage from "./pages/bachelors/BachFIPage/BachFIPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NotFoundPage from "./pages/notfoundpage/NotFoundPage";
import AdmissionPage from "./pages/admissionpage/AdmissionPage";
import MaintenancePage from "./components/maintenance/Maintenance";
import Loader from "./components/loader/Loader";

const ScrollToTop = ({ history }) => {
  useEffect(() => {
    const scrollPositions = {};

    const handleScroll = () => {
      scrollPositions[history.location.pathname] = window.scrollY;
    };

    const restoreScrollPosition = () => {
      const { pathname } = history.location;
      const scrollPosition = scrollPositions[pathname] || 0;
      setTimeout(() => window.scrollTo(0, scrollPosition), 0);
    };

    window.addEventListener('scroll', handleScroll);
    history.listen(restoreScrollPosition);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [history]);

  return null;
};

const App = ({ history }) => {
  const [maintenanceMode, setMaintenanceMode] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('http://itmai.ru/storage/config.json');
        const data = await response.json();
        setMaintenanceMode(data.maintenanceMode);
      } catch (error) {
        setMaintenanceMode(true); // Если не удалось получить конфигурационный файл, считаем, что сайт находится в режиме технических работ
      }
    };

    fetchConfig();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Проверка сочетания клавиш (например, Ctrl + M) для отключения режима технических работ
      if (event.ctrlKey && event.altKey && event.shiftKey && event.keyCode === 77) {
        setMaintenanceMode(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (isLoading) {
    // Ожидание загрузки конфигурационного файла
    return (
        <div className="app">
          <Helmet>
            <title>Институт №8 МАИ</title>
          </Helmet>
          <Loader />
        </div>
    );
  }

  if (maintenanceMode === true) {
    // Переадресация на MaintenancePage, если maintenanceMode равно true
    return (
        <div className="app">
          <MaintenancePage />
        </div>
    );
  }

  if (maintenanceMode === null) {
    // Ожидание загрузки конфигурационного файла
    return null;
  }

  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  return (
      <div className="app">
        <Helmet>
          <title>Институт №8 МАИ</title>
        </Helmet>
        <Header />
        <main className="content">
          <ScrollToTop history={history} />
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
                render={() => (
                    <>
                      <Helmet>
                        <title>Институт №8 МАИ | Поступление 2023</title>
                      </Helmet>
                      <AdmissionPage />
                    </>
                )}
            />
            <Route
                path="/maintenance"
                render={() => (
                    <>
                      <Helmet>
                        <title>Институт №8 МАИ | Технические работы</title>
                      </Helmet>
                      <MaintenancePage />
                    </>
                )}
            />
            <Route
                path="/404"
                component={NotFoundPage}
            />
            <Redirect to="/404" />
          </Switch>
        </main>
        <Footer />
      </div>
  );
};

export default withRouter(App);