import React, {useEffect, useState} from 'react';
import FAQSection from "../../components/faqsection/FAQSection";
import Highlight from "../../components/highlight/Highlight";
import MapContainer from "../../components/MapContainer";
import BackgroundImage from "../../components/GreetingComponent/BackgroundImage";
import axios from "axios";

const HomePage = () => {

  const benefits = [
    { title: 'Уникальные программы 😎', description: 'Кобрендинговые образовательные программы магистратуры с лидерами IT-отрасли: новейшие сквозные технологии, преподаватели-практики, проектная и исследовательская работа, междисциплинарные учебные модули и проекты.' },
    { title: 'Актуальное обучение 🔥', description: 'Тесная связь с индустрией, подготовка специалистов в соответствии с актуальными требованиями работодателей, обучение на реальных задачах.' },
    { title: 'IT-мероприятия 🚀', description: 'Современные технологии обучения, дополнительные образовательные программы и мастер-классы от ведущих специалистов IT и бизнес отрасли, хакатоны, акселерационные программы и поддержка студенческих стартапов.' },
    { title: 'Поддержка 🤝', description: 'Комьюнити выпускников и партнеров: наставничество и менторство, нетворкинг и участие в жизни университета.' },
  ];

  const highlightsBachelor = [
    { title: '01.03.00 Компьютерные науки и прикладная математика', description: 'Откройте двери в захватывающий мир компьютерных наук и прикладной математики, где вы сможете раскрыть свой потенциал в области IT, освоить передовые технологии и создавать инновационные решения, приводящие к прогрессу и изменению мира вокруг вас.', link: '/bachelors/cs' },
    { title: '02.03.02 Фундаментальная информатика и информационные технологии', description: 'Изучайте мир информационных технологий, где ваши IT-компетенции и творческий потенциал объединяются, чтобы создавать инновационные решения и достигать успеха в сфере IT.', link: '/bachelors/fi' }
  ];

  const faqs = [
    {
      question: 'Какие программы обучения предлагает Институт №8?',
      answer: 'Смысл жизни — это индивидуальный и субъективный вопрос, который каждый человек определяет самостоятельно. Для некоторых смысл жизни заключается в достижении счастья, для других — в поиске знания и истины, а для третьих — в служении другим людям.',
    },
    {
      question: 'Что такое любовь?',
      answer: 'Любовь — это сложное и глубокое чувство привязанности, влечения и заботы о другом человеке. Она может проявляться в разных формах: романтической любви, семейной любви, дружеской любви и т. д. Любовь способна приносить радость, поддержку и счастье, но также может быть источником боли и страдания.',
    },
    {
      question: 'Какой смысл в искусстве?',
      answer: 'Искусство имеет множество смыслов и целей. Оно может быть выражением эмоций, формой самовыражения, средством коммуникации, способом отражения реальности, исследованием формы и цвета, красоты и гармонии. Искусство также может вызывать размышления, вызывать эмоции и вдохновлять людей.',
    },
    {
      question: 'Что такое счастье?',
      answer: 'Счастье — это состояние благополучия, удовлетворенности и радости. Оно может быть разным для разных людей и зависит от их ценностей, жизненных обстоятельств и внутренней гармонии. Счастье может быть связано с достижением целей, удовлетворенными отношениями, благополучием в различных сферах жизни.',
    },
    {
      question: 'Что такое успех?',
      answer: 'Успех — это достижение поставленных целей и удовлетворение своих желаний. Определение успеха также индивидуально и может варьироваться от человека к человеку. Для одного успех может означать финансовое благополучие, для другого — профессиональные достижения, а для третьего — семейное счастье и гармония.',
    },
    {
      question: 'Что такое IT-рабство?',
      answer: 'IT-рабство - это термин, который обычно используется для описания ситуации, когда работники в области информационных технологий (IT) подвергаются эксплуатации, несправедливым условиям труда или ограничениям своих прав. Это может включать чрезмерную нагрузку, длительные рабочие часы, недостаток отдыха и отпусков, низкую оплату, отсутствие возможностей профессионального роста и недостаточную защиту со стороны работодателя.'
    }
  ];

  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  const [popupData, setPopupData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://filimonov.org/images/event1.json'); // Путь к вашему серверу и маршруту обработки запроса
      const json = response.data;

      if (json && Object.keys(json).length > 0) {
        setPopupData(json);
        setShowPopup(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className='container'>
          <div style={{zIndex: 9999}}>
          {showPopup && popupData && (
              <div className="popup">
                <div className="popup-content">
                  <button className="close-btn" onClick={closePopup}>
                    <span className="cross-icon">&#10005;</span>
                  </button>
                  <h2 style={{ color: '#000' }}>{popupData.title}</h2>
                  <p style={{ color: '#000' }}>{popupData.description}</p>
                  {popupData.date && <p style={{ color: '#000' }}>Дата мероприятия: {popupData.date}</p>}
                  {popupData.link && <p style={{ color: '#000' }}>Ссылка на мероприятие: {popupData.link}</p>}
                  {popupData.location && <p style={{ color: '#000' }}>Ссылка на мероприятие: {popupData.location}</p>}
                  <p className="section-text">
                    Вступай в наш телеграм чат абитуриентов <a href={'https://t.me/mai8inst'} style={{textDecoration: 'none', color: '#007ACD', fontWeight: 'bold'}} target="_blank" rel="noopener noreferrer">https://t.me/mai8inst</a>
                  </p>
                  {popupData.image && <img style={{height: 'auto', width: '80%'}} src={popupData.image} alt="Popup Image" />}
                </div>
              </div>
          )}{showPopup && !popupData && (
            <div className="popup">
              <div className="popup-content">
                <button className="close-btn" onClick={closePopup}>
                  <span className="cross-icon">&#10005;</span>
                </button>
                <h2 className='section-title' style={{ color: '#007ACD' }}>Привет, абитуриент!</h2>
                <p className='section-text' style={{ color: '#fff' }}>Вступай в наш телеграм чат абитуриентов 2023, где можно получать оперативную информацию от приемной комиссии и задать вопрос Директору Института №8 Крылову Сергею Сергеевичу.</p>
                <p className="section-text">
                  <a href={'https://t.me/mai8inst'} style={{textDecoration: 'none', color: '#007ACD', fontWeight: 'bold'}} target="_blank" rel="noopener noreferrer">https://t.me/mai8inst</a>
                </p>
              </div>
            </div>
        )}
        </div>
        <BackgroundImage />
        {/*<h1 className="title">Институт №8</h1>*/}
        {/*<h1 className="subtitle">Компьютерные науки и прикладная математика</h1>*/}
        <div className="content">
          <h2 className="section-title">О нас</h2>
          <p className="section-text">
            Институт №8 уже свыше полувека готовит умных и талантливых профи, которые успешно штурмуют сферу компьютерных наук и прикладной математики! Не упусти шанс вписать свое имя в нашу историю успеха!
          </p>
          <p className="section-text">
            Мы - настоящие эксперты в создании и использовании математического и программного обеспечения в самых интересных областях: от вычислительных и информационных систем до систем исусственного интеллекта. И самое крутое: наши выпускники не просто держат в руках дипломы, они успешно применяют свои знания в сфере IT, робототехнике, экономике, авиации, космонавтике и еще куче других востребованных направлений.
          </p>
          <p className="section-text">
            Мы уверены, что наш опыт и качество образования - это именно то, что поможет тебе сделать крутой взлет в карьере. Что самое главное, в восьмом институте всегда царит атмосфера молодежного вайба и увлекательного обучения. Не упусти свой шанс стать частью нашего сообщества умных и креативных людей!
          </p>
          <p className="section-text">
            Итак, готов к новым вызовам и бесконечным возможностям? Тогда добро пожаловать в Институт №8 - место, где твои мечты воплощаются в реальность!
          </p>
          <h2 className="section-title">Наши направления</h2>
          <Highlight data={highlightsBachelor}/>
          <h2 className="section-title">Преимущества обучения</h2>
          <Highlight data={benefits}/>
          <h2 className="section-title">Стек технологий выпускника</h2>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu massa hendrerit, viverra risus eu, molestie dolor. Ut dictum fringilla justo, vitae tristique nulla sollicitudin vel. Donec a ultricies felis. Nulla facilisi. Phasellus eu sem at justo facilisis sollicitudin. Etiam volutpat efficitur velit, a tempor ante consequat in.
          </p>
          <h2 className="section-title">Наши партнеры</h2>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam dolor eu pulvinar pretium. Vivamus sodales velit a libero eleifend, vitae posuere dolor sagittis. Vestibulum bibendum auctor quam, at posuere sapien gravida eu. Nullam maximus, enim et accumsan sollicitudin, mauris orci suscipit dui, ac consequat ligula nulla eu mi.
          </p>
          <h2 className="section-title">Частые вопросы</h2>
          <FAQSection faqs={faqs}/>
          <h2 className="section-title">Контакты</h2>
          <div className="contact-block">
            <div className="text-block">
              <p className="section-text">
                Свяжитесь с нами, чтобы получить дополнительную информацию о нас и наших направлениях подготовки. Мы всегда готовы ответить на ваши вопросы. Вы можете связаться с нами по телефону, электронной почте или через телеграм. Мы ждем вашего сообщения!
              </p>
              <p className="section-text">
                Адрес приемной комиссии МАИ: <a href={'https://yandex.ru/maps/-/CCUDB-tEpD'} style={{textDecoration: 'none', color: '#fff'}} target="_blank" rel="noopener noreferrer">125310, Москва, Волоколамское шоссе, 4к6, 3 этаж, комната 8</a>
              </p>
              <p className="section-text">
                Время работы:<br/>
                Будни: 10:00 - 17:00<br/>
                Суббота: 10:00 - 14:00<br/>
              </p>
              <p className="section-text">
                Телефон приемной комиссии Института №8 МАИ: +7&nbsp;(499)&nbsp;158&nbsp;49&nbsp;77
              </p>
              <p className="section-text">
                Электронная почта приемной комиссии Института №8 МАИ: <a href={'mailto:priem008@gmail.com'} style={{textDecoration: 'none', color: '#fff'}} target="_blank" rel="noopener noreferrer">priem008@gmail.com</a>
              </p>
              <p className="section-text">
                🔥Телеграм чат абитуриентов 2023🔥: <a href={'https://t.me/mai8inst'} style={{textDecoration: 'none', color: '#fff'}} target="_blank" rel="noopener noreferrer">https://t.me/mai8inst</a>
              </p>
              </div>
              <div className="map-block">
                <MapContainer />
              </div>
          </div>
        </div>
      </div>
  );
};

export default HomePage;