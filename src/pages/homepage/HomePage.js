import React, {useEffect, useState} from 'react';
import FAQSection from "../../components/faqsection/FAQSection";
import Highlight from "../../components/highlight/Highlight";
import axios from "axios";
import {Helmet} from "react-helmet";
import CarouselComponent from "../../components/carousel/CarouselComponent";
import Marquee from "../../components/marquee/Marquee";
import ContactsComponent from "../../components/ContactsComponent";
import { motion } from 'framer-motion';
import AnimatedNumberComponent from "../../components/сounterсomponent/AnimatedNumberComponent";
import {Link} from "react-router-dom";

const HomePage = () => {

  const benefits = [
    { title: 'Уникальные программы \u{1F60E}', description: 'Кобрендинговые образовательные программы магистратуры с лидерами IT-отрасли: новейшие сквозные технологии, преподаватели-практики, проектная и исследовательская работа, междисциплинарные учебные модули и проекты.' },
    { title: 'Актуальное обучение \u{1F525}', description: 'Тесная связь с индустрией, подготовка специалистов в соответствии с актуальными требованиями работодателей, обучение на реальных задачах.' },
    { title: 'IT-мероприятия \u{1F680}', description: 'Современные технологии обучения, дополнительные образовательные программы и мастер-классы от ведущих специалистов IT и бизнес отрасли, хакатоны, акселерационные программы и поддержка студенческих стартапов.' },
    { title: 'Поддержка \u{1F91D}', description: 'Комьюнити выпускников и партнеров: наставничество и менторство, нетворкинг и участие в жизни университета.' },
  ];

  const highlightsBachelor = [
    {
      title: '01.03.00 Компьютерные науки и прикладная математика',
      description:
          'Студенты получают качественное образование в IT и анализе данных, общаются с опытными специалистами.<br/>В конкурсной группе <span>60 бюджетных мест</span> по направлению "Прикладная математика" и <span>140 бюджетных мест</span> по направлению "Прикладная математика и информатика".',
      link: '/bachelors/cs',
    },
    {
      title: '02.03.02 Фундаментальная информатика и информационные технологии',
      description:
          'Глубокие знания в математике и информатике для развития в IT. Преподаватели - практикующие специалисты, готовящие востребованных кадров для ведущих компаний.<br/>Предоставляем <span>100 бюджетных мест</span>.',
      link: '/bachelors/fi',
    },
  ];

  const faqs = [
    {
      question: '8 > 3',
      answer: 'True',
    },
    {
      question: 'Кем становятся выпускники после обучения на программах Института №8?',
      answer: 'Студенты и выпускники работают в различных сферах. Самые частые профессии:<ul>\n' +
          '  <li>\n' +
          '    <p>Программисты и разработчики: веб, мобильные приложения, программное обеспечение, игры;</p>\n' +
          '  </li>\n' +
          '  <li>\n' +
          '    <p>Системные аналитики: анализ бизнес-потребностей, оптимизация рабочих процессов;</p>\n' +
          '  </li>\n' +
          '  <li>\n' +
          '    <p>Инженеры по тестированию ПО: тестирование, обеспечение качества;</p>\n' +
          '  </li>\n' +
          '  <li>\n' +
          '    <p>Сетевые и системные администраторы: управление сетями, безопасность;</p>\n' +
          '  </li>\n' +
          '  <li>\n' +
          '    <p>Аналитики данных: анализ больших данных, создание инсайтов;</p>\n' +
          '  </li>\n' +
          '  <li>\n' +
          '    <p>Инженеры и архитекторы искусственного интеллекта: разработка решений ИИ, машинное обучение;</p>\n' +
          '  </li>\n' +
          '  <li>\n' +
          '    <p>Консультанты по IT: оптимизация технических процессов, бизнес-потоки;</p>\n' +
          '  </li>\n' +
          '  <li>\n' +
          '    <p>Преподаватели и исследователи: наука, университеты, исследовательские лаборатории;</p>\n' +
          '  </li>\n' +
          '  <li>\n' +
          '    <p>Предприниматели: стартапы, компании в IT-сфере;</p>\n' +
          '  </li>\n' +
          '  <li>\n' +
          '    <p>Криптографы и специалисты по кибербезопасности: защита информации, криптографические системы.</p>\n' +
          '  </li>\n' +
          '</ul>\n',
    },
    {
      question: 'Как получить общежитие?',
      answer: 'Общежитие предоставляется иногородним студентам, не проживающим в Москве или ближайшем Подмосковье, на основе конкурса. Количество мест в общежитии составляет примерно 25% от общего числа бюджетных мест.',
    },
    {
      question: 'Есть ли военная кафедра?',
      answer: 'Да, в нашем университете есть возможность прохождения обучения на военной кафедре. Для этого необходимо подать заявление на участие в конкурсе на втором семестре обучения. Прохождение на военную кафедру предполагает сдачу нормативов по физической подготовке (бег на 3 км, бег на 100 м, подтягивания) и прохождение медицинского осмотра в военкомате. Обучение на военной кафедре начинается с второго курса и проходит один раз в неделю. Продолжительность обучения составляет 3 года. По окончании обучения студентам присваивается воинское звание \'Лейтенант запаса\'.',
    },
    {
      question: 'Как можно подать документы на поступление?',
      answer: 'Документы в ВУЗ можно подать любым из следующих способов:' +
          '<ul>\n' +
          '  <li>\n' +
          '    <p>Лично, в приёмной комиссии в вузе</p>\n' +
          '  </li>\n' +
          '  <li>\n' +
          '    <p>Через личный кабинет абитуриента МАИ</p>\n' +
          '  </li>\n' +
          '  <li>\n' +
          '    <p>Суперсервис "Поступление в вуз онлайн"</p>\n' +
          '  </li>\n' +
          '  <li>\n' +
          '    <p>Через операторов почтовой связи</p>\n' +
          '  </li>\n' +
          '</ul>' +
          'Узнать подробнее про поступление и подать документы можно <a href="/admission/application" style="color: #007acd" target="_blank" rel="noopener noreferrer">тут</a>.',
    },
    {
      question: 'Какие есть дополнительные возможности для развития?',
      answer: 'Ответ'
    },
    {
      question: 'Какие условия и стоимость платного обучения?',
      answer: 'Обучение на платной основе возможно при условии предоставления документов в приемную комиссию до 14 августа. Согласие о зачислении необходимо подать до 16 августа. После заключения договора обязательно оплатить первый семестр обучения до 22 августа. Стоимость обучения составляет 248 170 рублей в год.'
    }
  ];

  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  const [popupData, setPopupData] = useState(null);
  const [logoData, setLogoData] = useState(null);
  const [companyLogoData, setCompanyLogoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventResponse = await axios.get('http://itmai.ru/storage/event2.json');
        setPopupData(eventResponse.data);

        const logoResponse = await axios.get('http://itmai.ru/storage/stacklogos.json');
        setLogoData(logoResponse.data);

        const companyLogoResponse = await axios.get('http://itmai.ru/storage/komplogos.json');
        setCompanyLogoData(companyLogoResponse.data);
      } catch (error) {
        // Обработка ошибки
      }
    };

    fetchData();
  }, []);

  const carouselItems = [
    {
      image: 'https://itmai.ru/storage/images/homepage.jpg',
      title: 'Поступи в МАИ ✕ Институт №8',
      description: 'МАИ начал прием документов на поступление 20 июня 2023 года. Подать документы можно очно, через личный кабинет абитуриента МАИ и через сервис от Госуслуг. Прием оригиналов документов на поступление продлится до 3 августа.',
      link: '/admission/application',
    }
  ];


  const carouselSettings = {
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    showThumbs: false,
    autoPlay: true,
    infiniteLoop: true,
    interval: 3000,
    transitionTime: 500,
  };

  const description = "Институт №8 «Компьютерные науки и прикладная математика» — признанная в России и за рубежом научная математическая и IT-школа. Уже более полувека мы готовим талантливых профессионалов, которые успешно применяют свои знания в различных областях, включая IT, финансы, робототехнику, экономику, авиацию, космонавтику и другие востребованные направления.";
  const keywords = "Институт №8, Компьютерные науки, Прикладная математика, IT-школа, профессионалы, образование, IT, финансы, робототехника, экономика, авиация, космонавтика, научные исследования, преподаватели, высокотехнологичные компании, студенты, научные мероприятия, карьера";

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const sectionTitleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const highlightContentVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
      <div className='container'>
        <Helmet>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </Helmet>
        <div style={{ zIndex: 9999 }}>
          {showPopup && popupData && (
              <motion.div
                  className="popup"
                  initial="hidden"
                  animate="visible"
                  variants={popupVariants}
                  transition={{ duration: 0.3 }}
              >
                <div className="popup-content">
                  <button className="close-btn" onClick={closePopup}>
                    <span className="cross-icon">&#10005;</span>
                  </button>
                  <h2>{popupData.title}</h2>
                  <p>{popupData.description}</p>
                  {popupData.date && <p>Дата мероприятия: {popupData.date}</p>}
                  {popupData.link && <p>Ссылка на мероприятие: {popupData.link}</p>}
                  {popupData.location && <p>>Ссылка на мероприятие: {popupData.location}</p>}
                  <p className="section-text">
                    Вступай в наш телеграм чат абитуриентов{' '}
                    <a
                        href={'https://t.me/mai8inst'}
                        style={{ textDecoration: 'none', color: '#007ACD', fontWeight: 'bold' }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      https://t.me/mai8inst
                    </a>
                  </p>
                  {popupData.image && (
                      <div style={{ margin: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img style={{ height: 'auto', width: '80%' }} src={popupData.image} alt="Popup Image" />
                      </div>
                  )}
                </div>
              </motion.div>
          )}
          {showPopup && !popupData && (
              <motion.div
                  className="popup"
                  initial="hidden"
                  animate="visible"
                  variants={popupVariants}
                  transition={{ duration: 0.3 }}
              >
                <div className="popup-content">
                  <button className="close-btn" onClick={closePopup}>
                    <span className="cross-icon">&#10005;</span>
                  </button>
                  <h2 className="section-title" style={{ color: '#007ACD' }}>
                    Привет, абитуриент!
                  </h2>
                  <p className="section-text" style={{ color: '#fff' }}>
                    Вступай в наш телеграм чат абитуриентов 2023, где можно получать оперативную информацию от приемной комиссии и
                    задать вопрос Директору Института №8 Крылову Сергею Сергеевичу.
                  </p>
                  <p className="section-text">
                    <a
                        href={'https://t.me/mai8inst'}
                        style={{ textDecoration: 'none', color: '#007ACD', fontWeight: 'bold' }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      https://t.me/mai8inst
                    </a>
                  </p>
                </div>
              </motion.div>
          )}
        </div>
        {/*<BackgroundImage />*/}
        <motion.h1
            className="main-title"
            initial="hidden"
            animate="visible"
            variants={headingVariants}
            transition={{ duration: 0.3 }}
        >
          Институт №8 — это IT
        </motion.h1>
        <motion.h1
            className="subtitle"
            initial="hidden"
            animate="visible"
            variants={headingVariants}
            transition={{ duration: 0.3 }}
        >
          Компьютерные науки и прикладная математика
        </motion.h1>
        {/*<CarouselComponent items={carouselItems} settings={carouselSettings} />*/}
        <div className="content">
          <motion.h2
              className="section-title"
              initial="hidden"
              animate="visible"
              variants={sectionTitleVariants}
              transition={{ duration: 0.3 }}
          >
            Наши направления
          </motion.h2>
          <Highlight data={highlightsBachelor} highlightWidth="550px" />

          <motion.div
              className="highlights-container"
              initial="hidden"
              animate="visible"
              variants={highlightContentVariants}
              transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
                className="highlight"
                style={{ width: '550px' }}
                onClick={() => window.location.href = '/admission/application'}
            >
              <motion.div className="button_sec">
                Подать заявку на поступление
              </motion.div>
            </motion.div>

            <motion.div
                className="highlight"
                style={{ width: '550px' }}
                onClick={() => {
                  const contactsElement = document.getElementById('contacts');
                  contactsElement.scrollIntoView({ behavior: 'smooth' });
                }}
            >
              <motion.div className="button_sec">
                Связаться с нами
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.h2
              className="section-title"
              initial="hidden"
              animate="visible"
              variants={sectionTitleVariants}
              transition={{ duration: 0.3 }}
          >
            О нас
          </motion.h2>
          <AnimatedNumberComponent id={1} value={250} duration={3000} description={'преподавателей'}/>
          <AnimatedNumberComponent id={2} value={20} duration={3000} description={'компаний-партнеров'}/>
          <AnimatedNumberComponent id={3} value={6} duration={3000} description={'место по популярности по версии Табитуриент'}/>
          <AnimatedNumberComponent id={4} value={1} duration={3000} description={'робособака Дора'}/>
          <AnimatedNumberComponent id={5} value={500} duration={3000} description={'квадратных метров IT-пространства'}/>
          <motion.div
              className="highlight-content"
              initial="hidden"
              animate="visible"
              variants={highlightContentVariants}
              transition={{ duration: 0.3, delay: 0.5 }}
          >
            <motion.p className="section-text" transition={{ duration: 0.3, delay: 1 }}>
              Институт №8 «Компьютерные науки и прикладная математика» — признанная в России и за рубежом научная, математическая и IT-школа. Уже более полувека мы готовим талантливых профессионалов, которые успешно применяют свои знания в различных областях, включая IT, финансы, робототехнику, экономику, авиацию, космонавтику и другие востребованные направления.
            </motion.p>
            <motion.p className="section-text" transition={{ duration: 0.3, delay: 2 }}>
              Обучение в нашем институте предоставляет студентам обширные перспективы. Они активно участвуют в научных мероприятиях, таких как конференции и публикации, что помогает им развивать свои навыки в научных исследованиях. Замечательно то, что многие студенты уже в процессе обучения имеют возможность работать в ведущих компаниях, таких как Сбер, Тинькофф, МТС, Яндекс, VK, Лаборатория Касперского и многие другие. Это дает им ценный опыт работы в индустрии еще до окончания обучения и создает хорошие перспективы для успешной карьеры после окончания института.
            </motion.p>
          </motion.div>

          <h2 className="section-title">Преимущества обучения</h2>
          <Highlight data={benefits} highlightWidth="270px" />
          <h2 className="section-title">Стек технологий выпускника</h2>
          {logoData ? (
              <Marquee logos={logoData.stacklogos} />
          ) : (
              <p>Загрузка...</p>
          )}
          <h2 className="section-title">Наши партнеры</h2>
          {companyLogoData ? (
              <Marquee logos={companyLogoData.komplogos} />
          ) : (
              <p>Загрузка...</p>
          )}
          <h2 className="section-title">Частые вопросы</h2>
          <FAQSection faqs={faqs}/>
          <section id="contacts">
            <h2 className="section-title">Контакты</h2>
            <ContactsComponent />
          </section>
        </div>
      </div>
  );
};

export default HomePage;