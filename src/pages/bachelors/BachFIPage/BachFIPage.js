import React from 'react';
import {Helmet} from "react-helmet";
import ContactsComponent from "../../../components/ContactsComponent";

const FundamentalsPage = () => {
  const description = "Студенты направления 02.03.02 'Фундаментальная информатика и информационные технологии' получают глубокие и обширные знания, охватывающие различные области, включая прикладную математику, общетеоретическую информатику и инновационные информационные технологии. Они могут применять свои навыки в разнообразных сферах.";
  const keywords = "02.03.02, Фундаментальная информатика, Информационные технологии, прикладная математика, общетеоретическая информатика, инновационные информационные технологии, интеллектуальные системы, вычислительные технологии, компьютерные науки, технологии баз данных, компьютерная графика, теория информации, управление информационно-коммуникационными системами, бизнес-процессы, архитектура программного обеспечения, параллельные вычисление, распределенные вычисление";

  return (
      <div className="container">
        <Helmet>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </Helmet>
        <h1 className="title" style={{color: '#007ACD'}}>02.03.02</h1>
        <h1 className="title">Фундаментальная информатика и информационные технологии</h1>
        <div className="content">
          <h3 className="section-title">О направлении</h3>
          <div className='highlight-content'>
          <p className="section-text">
            Студенты направления 02.03.02 "Фундаментальная информатика и информационные технологии" получают глуюокие и обширные знания, охватывающие различные области, включая прикладную математику, общетеоретическую информатику и инновационные информационные технологии. Это обеспечит выпускникам возможность применять свои навыки в разнообразных сферах, включая интеллектуальные системы, вычислительные технологии, компьютерные науки, технологии баз данных, компьютерную графику, теорию информации, управление информационно-коммуникационными системами и бизнес-процессами, архитектуру программного обеспечения, параллельное и распределенное вычисление.          </p>
          <p className="section-text">
            Одним из ключевых аспектов подготовки студентов на этой специальности является фундаментальность, которая позволяет быстро освоить изменяющиеся технологии разработки информационных систем. В рамках обучения студенты углубляют свои знания в области информатики, изучая дополнительные разделы математики и теории информации. Это помогает им понять структуру и ограничения разработки алгоритмов, языков и информационных технологий.
          </p>
          <p className="section-text">
            Студенты также получают практический опыт работы с современными технологиями разработки программного обеспечения, анализируют архитектуру компьютерных сетей, изучают сетевые протоколы и осваивают принципы создания распределенных приложений. Это позволяет студентам стать опытными программистами и приобрести практические навыки в области информационных технологий.
          </p>
          <p className="section-text">
            Выпускники могут строить успешную карьеру в различных сферах, включая программирование, разработку приложений, управление базами данных, аналитику данных, исследования в области искусственного интеллекта, а также заниматься научной и инновационной деятельностью. Благодаря сильной теоретической подготовке и практическим навыкам, выпускники могут эффективно адаптироваться к быстро меняющимся требованиям IT-сектора и достигать успеха в своей профессиональной карьере.
          </p>
          </div>
          <h3 className="section-title">Преимущества обучения</h3>
          <div className='highlight-content'>
          <p className="section-text">
            Sed nec pharetra dui, sit amet cursus ex. Sed ac ante vel mi sagittis aliquam eu at velit. Sed condimentum metus ac metus vulputate, at fringilla metus consequat. Sed mattis tempor ligula, ac varius nisl lobortis sed. Proin semper odio id tortor rhoncus ullamcorper. Sed id metus in sem sollicitudin cursus. Donec a dui dictum, malesuada arcu ac, tincidunt ipsum.
          </p>
          </div>
          <h3 className="section-title">Основные дисциплины</h3>
          <div className='highlight-content'>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu massa hendrerit, viverra risus eu, molestie dolor. Ut dictum fringilla justo, vitae tristique nulla sollicitudin vel. Donec a ultricies felis. Nulla facilisi. Phasellus eu sem at justo facilisis sollicitudin. Etiam volutpat efficitur velit, a tempor ante consequat in.
          </p>
          </div>
          <h3 className="section-title">Команда преподавателей</h3>
          <div className='highlight-content'>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id venenatis eros. Suspendisse potenti. Sed nec massa ipsum. Integer nec quam eu diam facilisis volutpat. Morbi non leo arcu. Sed eleifend diam vel congue finibus. Praesent commodo, justo a efficitur lacinia, velit erat elementum enim, vel eleifend nisi nulla in elit.
          </p>
          </div>
          <h3 className="section-title">Проходные баллы</h3>
          <div className='highlight-content'>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu massa hendrerit, viverra risus eu, molestie dolor. Ut dictum fringilla justo, vitae tristique nulla sollicitudin vel. Donec a ultricies felis. Nulla facilisi. Phasellus eu sem at justo facilisis sollicitudin. Etiam volutpat efficitur velit, a tempor ante consequat in.
          </p>
          </div>
          <h3 className="section-title">Частые вопросы</h3>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis neque nec ullamcorper sagittis. Suspendisse sed congue neque, id eleifend elit. Aliquam erat volutpat. Fusce a erat rhoncus, dignissim nulla at, faucibus dolor. Curabitur sed faucibus enim. Integer tristique neque ut diam fringilla, in dapibus purus dapibus.
          </p>
        </div>
        <h2 className="section-title">Контакты</h2>
        <ContactsComponent />
      </div>
  );
};

export default FundamentalsPage;