import React, {useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';

import '../../App.css';

const NotFoundPage = () => {
  const [redirect, setRedirect] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (secondsRemaining === 0) {
      setRedirect(true);
    }

    return () => clearInterval(timer);
  }, [secondsRemaining]);

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
      <div className="container">
        <h2 className="subtitle">🙃 404 - Запрашиваемая страница не найдена</h2>
        <div className="content">
          <p className="section-text">
              Страница, которую вы ищете, не существует...
              <span>Переход на главную через {secondsRemaining} секунд</span>
          </p>
        </div>
      </div>
  );
};

export default NotFoundPage;