import React from "react";
import MapContainer from "./MapContainer";

const ContactsComponent = () => {
  return (
  <div className="contact-block">
    <div className='highlight-content'>
      <div className="text-block">
        <p className="section-text">
        <p className="section-text">
          Адрес приемной комиссии Института №8 МАИ: <a href={'https://yandex.ru/maps/-/CCUDB-tEpD'} style={{textDecoration: 'none', color: '#007ACD'}} target="_blank" rel="noopener noreferrer">125310, Москва, Волоколамское шоссе, 4к6, 3 этаж, комната 8.</a>
        </p>
        <p className="section-text">
          Время работы:<br/>
          Будни: 10:00 - 17:00<br/>
          Суббота: 10:00 - 14:00<br/>
        </p>
        <p className="section-text">
          Телефон приемной комиссии Института №8 МАИ:
          <p>
            <a href={'tel:+74991584977'} style={{textDecoration: 'none', color: '#007ACD'}} target="_blank" rel="noopener noreferrer">7&nbsp;(499)&nbsp;158&nbsp;49&nbsp;77</a>
          </p>
          <p>
            <a href={'tel:+74991584977'} style={{textDecoration: 'none', color: '#007ACD'}} target="_blank" rel="noopener noreferrer">7&nbsp;(495)&nbsp;215&nbsp;17&nbsp;89</a>
          </p>
        </p>
        <p className="section-text">
          Электронная почта приемной комиссии Института №8 МАИ: <a href={'mailto:priem008@gmail.com'} style={{textDecoration: 'none', color: '#007ACD'}} target="_blank" rel="noopener noreferrer">priem008@gmail.com</a>
        </p>
        <p className="section-text">
          {'\u{1F525}'}Телеграм чат абитуриентов 2023{'\u{1F525}'}: <a href={'https://t.me/mai8inst'} style={{textDecoration: 'none', color: '#007ACD'}} target="_blank" rel="noopener noreferrer">https://t.me/mai8inst</a>
        </p>
        </p>
      </div>
    </div>
    <div className="map-block">
      <MapContainer />
    </div>
  </div>
  )}

export default ContactsComponent;