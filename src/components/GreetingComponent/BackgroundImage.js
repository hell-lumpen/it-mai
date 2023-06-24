import React from 'react';
import './BackgroundImage.css'; // Подключите файл со стилями

class BackgroundImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '', // Здесь будет храниться URL изображения
      isLoading: true, // Флаг загрузки изображения
    };
  }

  componentDidMount() {
    // Получите URL изображений для разных разрешений экрана из API или другого источника данных
    // В данном примере просто используются заглушки
    const wideImageUrl = 'https://filimonov.org/images/homepage.jpg';
    const narrowImageUrl = 'https://filimonov.org/images/homepage.jpg';

    // Создайте новые экземпляры Image, чтобы предварительно загрузить изображения
    const wideImg = new Image();
    wideImg.src = wideImageUrl;
    const narrowImg = new Image();
    narrowImg.src = narrowImageUrl;

    // Загрузка завершается, когда оба изображения полностью загружены
    Promise.all([this.imageLoaded(wideImg), this.imageLoaded(narrowImg)]).then(() => {
      this.setState({ imageUrl: this.getCorrectImageUrl(wideImg, narrowImg), isLoading: false });
    });
  }

  imageLoaded(img) {
    return new Promise((resolve) => {
      img.onload = () => resolve();
    });
  }

  getCorrectImageUrl(wideImg, narrowImg) {
    // Получите ширину окна браузера для определения, какое изображение использовать
    const windowWidth = window.innerWidth;

    // Выберите изображение в зависимости от ширины окна
    return windowWidth >= 768 ? wideImg.src : narrowImg.src;
  }

  render() {
    const { imageUrl, isLoading } = this.state;

    return (
        <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}}>
          <div className="blur"></div>
          <div className="content">
            {isLoading ? (
                <div>Загрузка</div>
            ) : (
                <div className="centered-text">
                  <h1>Институт №8</h1>
                  <h1>Компьютерные науки и прикладная математика</h1>
                  <div className="button-container">
                    <button className="button">узнать подробнее</button>
                    <button className="button">связаться с нами</button>
                  </div>
                </div>
            )}
          </div>
        </div>
    );
  }
}

export default BackgroundImage;