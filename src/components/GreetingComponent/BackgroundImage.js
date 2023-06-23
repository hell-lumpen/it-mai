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
    const wideImageUrl = 'https://dep805.ru/mai/6.jpg';
    const narrowImageUrl = 'https://i.redd.it/nmen6jjd3yi21.jpg';

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
        <div className="background-image">
          {console.log(imageUrl)}
          <img src={imageUrl} alt="Background" className="background-img" />
        </div>
    );
  }
}

export default BackgroundImage;