import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
        <Header />
        <main className="content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/bachelors/cs" component={BachCSPage} />
            <Route path="/bachelors/fi" component={BachFIPage} />
            <Route path="/admission/application" component={() => {
              window.location.href = 'https://lk.mai.ru';
              return null;
            }} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </main>
        <Footer />
      </div>
  );
};

export default App;