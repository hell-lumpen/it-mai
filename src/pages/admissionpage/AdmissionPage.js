import {Helmet} from "react-helmet";
import React from "react";

const AdmissionPage = () => {
  return (
  <div className="container">
    <Helmet>
      <meta name="description" content="Поступление в МАИ лично и онлайн через портал Госуслуг и личный кабинет абитуриента МАИ"/>
      <meta name="keywords" content={'поступление 2023, суперсервис, госуслуги, поступление онлайн, личный кабинет абитуриента'} />
    </Helmet>
    <h1 className="title" style={{color: '#007ACD'}}>Поступление в МАИ</h1>
    <h1 className="title">Подача документов</h1>
    <div className="content">
      <h3 className="section-title">Личная подача</h3>
      <p className="section-text">
        Личная подача
      </p>

      <h3 className="section-title">Личный кабинет абитуриента МАИ</h3>
      <p className="section-text">
        Личный кабинет абитуриента МАИ
      </p>

      <h3 className="section-title">Суперсервис от Госуслуг</h3>
      <p className="section-text">
        Суперсервис от Госуслуг
      </p>
    </div>
  </div>
  )}

export default AdmissionPage;