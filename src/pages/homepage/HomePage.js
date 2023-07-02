import React, {useEffect, useState} from 'react';
import FAQSection from "../../components/faqsection/FAQSection";
import Highlight from "../../components/highlight/Highlight";
import axios from "axios";
import {Helmet} from "react-helmet";
import CarouselComponent from "../../components/carousel/CarouselComponent";
import Marquee from "../../components/marquee/Marquee";
import ContactsComponent from "../../components/ContactsComponent";
import NumberCounter from "../../components/сounterсomponent/AnimatedNumberComponent";
import { motion } from 'framer-motion';
import NumberAnimation from "../../components/сounterсomponent/AnimatedNumberComponent";
import AnimatedNumberComponent from "../../components/сounterсomponent/AnimatedNumberComponent";

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
      answer: '<ul><li><p>Программисты и разработчики: Многие выпускники выбирают карьеру программиста или разработчика в различных областях, таких как веб-разработка, мобильные приложения, программное обеспечение, игровая индустрия и другие.</p></li><li><p>Системные аналитики: Системные аналитики анализируют потребности бизнеса и создают технические решения для оптимизации рабочих процессов и улучшения эффективности.</p></li><li><p>Инженеры по тестированию программного обеспечения: Они занимаются тестированием программного обеспечения, выявляют ошибки и помогают обеспечить высокое качество продукта.</p></li><li><p>Сетевые и системные администраторы: Отвечают за управление компьютерными сетями и системами, обеспечивают их надежность и безопасность.</p></li><li><p>Аналитики данных: Занимаются анализом больших объемов данных, извлечением информации и созданием инсайтов для поддержки бизнес-решений.</p></li><li><p>Инженеры и архитекторы искусственного интеллекта: Работают над разработкой и внедрением решений искусственного интеллекта и машинного обучения.</p></li><li><p>Консультанты по информационным технологиям: Помогают организациям оптимизировать свои технические процессы и бизнес-потоки.</p></li><li><p>Преподаватели и исследователи: Некоторые выпускники могут выбрать карьеру в научной сфере, работая в университетах или исследовательских лабораториях.</p></li><li><p>Предприниматели: Некоторые выпускники решают создать свои собственные стартапы или компании в области технологий.</p></li><li><p>Криптографы и специалисты по кибербезопасности: Работают над защитой информации и данных от кибератак и разрабатывают криптографические системы.</p></li></ul>',
    },
    {
      question: 'Как получить общежитие?',
      answer: 'Ответ',
    },
    {
      question: 'Есть ли военная кафедра?',
      answer: 'Ответ',
    },
    {
      question: 'Как можно подать документы на поступление?',
      answer: 'Ответ',
    },
    {
      question: 'Какие есть дополнительные возможности для развития?',
      answer: 'Ответ'
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

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
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
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
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
                  <h2 style={{ color: '#fff' }}>{popupData.title}</h2>
                  <p style={{ color: '#fff' }}>{popupData.description}</p>
                  {popupData.date && <p style={{ color: '#fff' }}>Дата мероприятия: {popupData.date}</p>}
                  {popupData.link && <p style={{ color: '#fff' }}>Ссылка на мероприятие: {popupData.link}</p>}
                  {popupData.location && <p style={{ color: '#fff' }}>Ссылка на мероприятие: {popupData.location}</p>}
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
          <h2 className="section-title">Контакты</h2>
          <ContactsComponent />
        </div>
      </div>
  );
};

export default HomePage;