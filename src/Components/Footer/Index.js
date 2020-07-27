import React from "react";
import LocationOnSharpIcon from '@material-ui/icons/LocationOnSharp';
import CallSharpIcon from '@material-ui/icons/CallSharp';
import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';

import "./Index.scss";

const Footer = () => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        padding: 10,
        borderTop: "1px solid lightgray",
        backgroundColor: "#f1f1f1",
        justifyContent: "space-around",
        display: "flex"
      }}
    >
      <div>
        <div 
          style={{ color: "#504F5A", fontWeight: "bold", marginBottom: 10 }}
        >
          Контакты
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div className="containerItem">
            <LocationOnSharpIcon  />
            <a className="footerItem" 
              href='https://yandex.ru/maps/?um=constructor%3Ae03d6193bed347ec748a53cff43cb0105e2e7c06d054def605a61fc94fc1b723&source=constructorLink'>
                Москва, ул. Проспект Мира, д. 9, оф.9
            </a>
          </div>
          <div className="containerItem">
            <CallSharpIcon />
            <a className="footerItem"
              href='tel:+7(499)000-00-00'>
                +7(499)000-00-00
            </a>
          </div>
          <div className="containerItem">
            <MailOutlineSharpIcon />
            <a className="footerItem" 
              href='mailto:info@info.ru'>
                info@info.ru
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{ color: "#504F5A", fontWeight: "bold", marginBottom: 10 }}
        >
          Социальные сети
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div className="containerItem">
            <a className="footerItem" 
              href='https://www.facebook.com'>
                Facebook
            </a>
          </div>
          <div className="containerItem">
            <a className="footerItem" 
              href='https://www.facebook.com'>
                Instagramm
            </a>
          </div>
          <div className="containerItem">
            <a className="footerItem" 
              href='https://www.twitter.com'>
                Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
