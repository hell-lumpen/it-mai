import React from 'react';
import {Helmet} from "react-helmet";

const ComputerSciencePage = () => {

  const description = "Конкурсная группа 01.03.00 'Компьютерные науки и прикладная математика' предлагает два направления: 'Прикладная математика' и 'Прикладная математика и информатика'. Здесь студенты получают возможность развивать свои навыки в компьютерных науках и математике.";
  const keywords = "Конкурсная группа 01.03.00, Компьютерные науки, Прикладная математика, Прикладная математика и информатика, математическое моделирование, анализ данных, оптимизация, программирование, информационные технологии, научные исследования, IT-индустрия, финансы";

  return (
      <div className="container">
        <Helmet>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </Helmet>
        <h1 className="title" style={{color: '#007ACD'}}>01.03.00</h1>
        <h1 className="title">Компьютерные науки и прикладная математика</h1>
        <div className="content">
          <h3 className="section-title">О направлении</h3>
          <div style={{background: '#141414', borderRadius: '25px', padding: '20px'}}>
          <p className="section-text">
            Конкурсная группа 01.03.00 "Компьютерные науки и прикладная математика" предлагает два направления: "Прикладная математика" и "Прикладная математика и информатика". Здесь студенты получают возможность развивать свои навыки в информационных технологях и математике.
          </p>
          <p className="section-text">
            В рамках направления 01.03.04 "Прикладная математика" студенты углубляются в изучение математических концепций и их практическое применение. Они осваивают методы математического моделирования, анализа данных и оптимизации, разрабатывая умения решать сложные задачи в различных областях, от науки до экономики. Программа обучения формирует специалистов, способных применять математические подходы для решения реальных проблем.
          </p>
          <p className="section-text">
            Направление 01.03.02 "Прикладная математика и информатика" сочетает в себе глубокое понимание математических методов и навыки программирования и обработки информации. Студенты изучают алгоритмы, структуры данных, теорию вероятностей и математическую статистику, а также осваивают навыки разработки программного обеспечения. Программа обучения готовит выпускников к работе в областях разработки программ, анализа данных, искусственного интеллекта и других смежных областях.
          </p>
          <p className="section-text">
            Оба направления предлагают студентам качественное образование, основанное на современных достижениях в математике, информационных технологиях и вычислительной технике. В процессе обучения студенты выполняют практические задания, принимают участие в проектах и занимаются исследовательской деятельностью, что позволяет им применять полученные знания на практике.
          </p>
          <p className="section-text">
            Студенты, выбравшие эту программу, получат навыки для решения сложных задач, используя современные методы математического моделирования, анализа данных и информационных технологий. Выпускники смогут успешно применять свои знания в различных областях, таких как IT-индустрия, научные исследования, финансовые учреждения, медицина и другие перспективные сферы.
          </p>
          <p className="section-text">
            Программа подготовки специалистов по компьютерным наукам и прикладной математике создана для тех, кто стремится к развитию в современных технологиях и хочет применять свои знания на практике. Здесь студенты получат все необходимые инструменты и знания для успешной карьеры в области информационных технологий и научных исследований.
          </p>
          </div>
          <h3 className="section-title">Преимущества обучения</h3>
          <p className="section-text">
            Sed nec pharetra dui, sit amet cursus ex. Sed ac ante vel mi sagittis aliquam eu at velit. Sed condimentum metus ac metus vulputate, at fringilla metus consequat. Sed mattis tempor ligula, ac varius nisl lobortis sed. Proin semper odio id tortor rhoncus ullamcorper. Sed id metus in sem sollicitudin cursus. Donec a dui dictum, malesuada arcu ac, tincidunt ipsum.
          </p>
          <h3 className="section-title">Основные дисциплины</h3>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu massa hendrerit, viverra risus eu, molestie dolor. Ut dictum fringilla justo, vitae tristique nulla sollicitudin vel. Donec a ultricies felis. Nulla facilisi. Phasellus eu sem at justo facilisis sollicitudin. Etiam volutpat efficitur velit, a tempor ante consequat in.
          </p>
          <h3 className="section-title">Команда преподавателей</h3>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id venenatis eros. Suspendisse potenti. Sed nec massa ipsum. Integer nec quam eu diam facilisis volutpat. Morbi non leo arcu. Sed eleifend diam vel congue finibus. Praesent commodo, justo a efficitur lacinia, velit erat elementum enim, vel eleifend nisi nulla in elit.
          </p>
          <h3 className="section-title">Проходные баллы</h3>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu massa hendrerit, viverra risus eu, molestie dolor. Ut dictum fringilla justo, vitae tristique nulla sollicitudin vel. Donec a ultricies felis. Nulla facilisi. Phasellus eu sem at justo facilisis sollicitudin. Etiam volutpat efficitur velit, a tempor ante consequat in.
          </p>
          <h3 className="section-title">Частые вопросы</h3>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis neque nec ullamcorper sagittis. Suspendisse sed congue neque, id eleifend elit. Aliquam erat volutpat. Fusce a erat rhoncus, dignissim nulla at, faucibus dolor. Curabitur sed faucibus enim. Integer tristique neque ut diam fringilla, in dapibus purus dapibus.
          </p>
          <h3 className="section-title">Контакты</h3>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus tellus sem, sed ultricies neque mollis sed. Pellentesque venenatis urna at tortor suscipit gravida. Curabitur hendrerit tortor at condimentum pulvinar. Phasellus gravida velit ac augue finibus, sit amet fermentum lacus lobortis. Sed ac sem sit amet risus pellentesque cursus.
          </p>
        </div>
      </div>
  );
};

export default ComputerSciencePage;
