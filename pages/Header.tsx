import Image from "next/image";
import logo from "../public/images/logo.svg";
import phone from "../public/images/phone-icon.svg";

const Header = () => {
  return (
    <section className="header">
      <div className="container container__header">
        <div className="header-logo-block">
          <Image src={logo} alt="логотип компании" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p className="header-title">Профессиональный подход к обучению.</p>
            <p className="header-title">Более 700 профессий!</p>
          </div>
        </div>
        <div className="header-contacts-block">
          <a href="mailto:info@vprogress.ru">info@vprogress.ru</a>
          <div className="header-phone">+7 (222) 222-22-22</div>
          <div className="header-call-container">
            <Image src={phone} alt={"изображение телефона"} />
            <div className="header-call-request">Заказать звонок</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
