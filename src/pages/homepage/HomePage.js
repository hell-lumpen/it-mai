import React, {useEffect, useState} from 'react';
import FAQSection from "../../components/faqsection/FAQSection";
import Highlight from "../../components/highlight/Highlight";
import axios from "axios";
import {Helmet} from "react-helmet";
import CarouselComponent from "../../components/carousel/CarouselComponent";
import Marquee from "../../components/marquee/Marquee";
import ContactsComponent from "../../components/ContactsComponent";

const HomePage = () => {

  const benefits = [
    { title: 'Уникальные программы \u{1F60E}', description: 'Кобрендинговые образовательные программы магистратуры с лидерами IT-отрасли: новейшие сквозные технологии, преподаватели-практики, проектная и исследовательская работа, междисциплинарные учебные модули и проекты.' },
    { title: 'Актуальное обучение \u{1F525}', description: 'Тесная связь с индустрией, подготовка специалистов в соответствии с актуальными требованиями работодателей, обучение на реальных задачах.' },
    { title: 'IT-мероприятия \u{1F680}', description: 'Современные технологии обучения, дополнительные образовательные программы и мастер-классы от ведущих специалистов IT и бизнес отрасли, хакатоны, акселерационные программы и поддержка студенческих стартапов.' },
    { title: 'Поддержка \u{1F91D}', description: 'Комьюнити выпускников и партнеров: наставничество и менторство, нетворкинг и участие в жизни университета.' },
  ];

  const highlightsBachelor = [
    { title: '01.03.00 Компьютерные науки и прикладная математика', description: 'Студенты данной программы получают качественное образование в области разработки программного обеспечения и анализа данных, что готовит их к работе в IT-индустрии и научных исследованиях. Кроме того, им предоставляется возможность взаимодействия с опытными специалистами из ведущих российских компаний.', link: '/bachelors/cs' },
    { title: '02.03.02 Фундаментальная информатика и информационные технологии', description: 'Здесь вы получите глубокие знания в математике и информатике, необходимые для продвижения в сфере IT. Преподаватели - практикующие специалисты, способные подготовить самых востребованных кадров для ведущих компаний страны и мира.', link: '/bachelors/fi' }
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
  const [logoData, setLogoData] = useState(null);
  const [companyLogoData, setCompanyLogoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventResponse = await axios.get('https://filimonov.org/event2.json');
        setPopupData(eventResponse.data);

        const logoResponse = await axios.get('https://filimonov.org/stacklogos.json');
        setLogoData(logoResponse.data);

        const companyLogoResponse = await axios.get('https://filimonov.org/komplogos.json');
        setCompanyLogoData(companyLogoResponse.data);
      } catch (error) {
        // Обработка ошибки
      }
    };

    fetchData();
  }, []);

  const carouselItems = [
    {
      image: 'https://filimonov.org/images/homepage.jpg',
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

  return (
      <div className='container'>
        <Helmet>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </Helmet>
        {/*  <div style={{zIndex: 9999}}>*/}
        {/*  {showPopup && popupData && (*/}
        {/*      <div className="popup">*/}
        {/*        <div className="popup-content">*/}
        {/*          <button className="close-btn" onClick={closePopup}>*/}
        {/*            <span className="cross-icon">&#10005;</span>*/}
        {/*          </button>*/}
        {/*          <h2 style={{ color: '#fff' }}>{popupData.title}</h2>*/}
        {/*          <p style={{ color: '#fff' }}>{popupData.description}</p>*/}
        {/*          {popupData.date && <p style={{ color: '#fff' }}>Дата мероприятия: {popupData.date}</p>}*/}
        {/*          {popupData.link && <p style={{ color: '#fff' }}>Ссылка на мероприятие: {popupData.link}</p>}*/}
        {/*          {popupData.location && <p style={{ color: '#fff' }}>Ссылка на мероприятие: {popupData.location}</p>}*/}
        {/*          <p className="section-text">*/}
        {/*            Вступай в наш телеграм чат абитуриентов <a href={'https://t.me/mai8inst'} style={{textDecoration: 'none', color: '#007ACD', fontWeight: 'bold'}} target="_blank" rel="noopener noreferrer">https://t.me/mai8inst</a>*/}
        {/*          </p>*/}
        {/*          {popupData.image &&*/}
        {/*              <div style={{margin: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>*/}
        {/*                <img style={{height: 'auto', width: '80%'}} src={popupData.image} alt="Popup Image" />*/}
        {/*              </div>*/}
        {/*          }*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*  )}{showPopup && !popupData && (*/}
        {/*    <div className="popup">*/}
        {/*      <div className="popup-content">*/}
        {/*        <button className="close-btn" onClick={closePopup}>*/}
        {/*          <span className="cross-icon">&#10005;</span>*/}
        {/*        </button>*/}
        {/*        <h2 className='section-title' style={{ color: '#007ACD' }}>Привет, абитуриент!</h2>*/}
        {/*        <p className='section-text' style={{ color: '#fff' }}>Вступай в наш телеграм чат абитуриентов 2023, где можно получать оперативную информацию от приемной комиссии и задать вопрос Директору Института №8 Крылову Сергею Сергеевичу.</p>*/}
        {/*        <p className="section-text">*/}
        {/*          <a href={'https://t.me/mai8inst'} style={{textDecoration: 'none', color: '#007ACD', fontWeight: 'bold'}} target="_blank" rel="noopener noreferrer">https://t.me/mai8inst</a>*/}
        {/*        </p>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*)}*/}
        {/*</div>*/}
        {/*<BackgroundImage />*/}
        <h1 className="title" style={{color: "#007ACD"}}>Институт №8</h1>
        <h1 className="subtitle">Компьютерные науки и прикладная математика</h1>
        <CarouselComponent items={carouselItems} settings={carouselSettings} />
        <div className="content">
          <h2 className="section-title">Наши направления</h2>
          <Highlight data={highlightsBachelor} highlightWidth="480px" />
          <h2 className="section-title">О нас</h2>
          <div className='highlight-content'>
          <p className="section-text">
              Институт №8 «Компьютерные науки и прикладная математика» — признанная в России и за рубежом научная математическая и IT-школа. Уже более полувека мы готовим талантливых профессионалов, которые успешно применяют свои знания в различных областях, включая IT, финансы, робототехнику, экономику, авиацию, космонавтику и другие востребованные направления.</p>
            <p className="section-text">
              Обучение в нашем институте предоставляет студентам обширные перспективы. Они активно участвуют в научных мероприятиях, таких как конференции и публикации, что помогает им развивать свои навыки в научных исследованиях. Замечательно то, что многие студенты уже в процессе обучения имеют возможность работать в ведущих компаниях, таких как Сбер, Тинькофф, МТС, Яндекс, VK, Лаборатория Касперского и многие другие. Это дает им ценный опыт работы в индустрии еще до окончания обучения и создает хорошие перспективы для успешной карьеры после окончания института.
            </p>
          </div>

          <h2 className="section-title">Преимущества обучения</h2>
          <Highlight data={benefits} highlightWidth="270px" />
          <h2 className="section-title">Стек технологий выпускника</h2>
          {logoData ? (
              <Marquee logos={logoData.stacklogos} />
          ) : (
              <p>Loading Logo Data...</p>
          )}
          <h2 className="section-title">Наши партнеры</h2>
          {companyLogoData ? (
              <Marquee logos={companyLogoData.komplogos} />
          ) : (
              <p>Loading Logo Data...</p>
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