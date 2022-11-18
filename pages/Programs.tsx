import Image from "next/image";
import Link from "next/link";
import arrow from "../public/images/arrow.svg";

const Programs = () => {
  return (
    <section className="programs">
      <div className="programs-container">
        <h2 className="block-heading">Образовательные программы прогресса</h2>
        <div className="programs-content">
          <nav className="programs-menu">
            <li className="programs-menu-block-hover">
              Профессиональная переподготовка{" "}
            </li>
            <li className="programs-menu-block">
              <div>Повышение квалификации</div>
              <Image className="arrow" src={arrow} alt="стрелка меню" />
            </li>
            <li className="programs-menu-block">
              <div>Рабочие специальности</div>
              <Image className="arrow" src={arrow} alt="стрелка меню" />
            </li>
            <li className="programs-menu-block">
              <div>Курсы</div>
              <Image className="arrow" src={arrow} alt="стрелка меню" />
            </li>
            <li className="programs-menu-block">
              <div>Повышение квалификации</div>
              <Image className="arrow" src={arrow} alt="стрелка меню" />
            </li>
            <li className="programs-menu-block">
              <div>Рабочие специальности</div>
              <Image className="arrow" src={arrow} alt="стрелка меню" />
            </li>
            <li className="programs-menu-block">
              <div>Повышение квалификации</div>
              <Image className="arrow" src={arrow} alt="стрелка меню" />
            </li>
            <li className="programs-menu-block">
              <div>Профессиональная переподготовка</div>
              <Image className="arrow" src={arrow} alt="стрелка меню" />
            </li>
          </nav>
          <div className="program">
            <li className="program-list">
              <div className="program-number">01</div>
              <div className="program-description">
                Профессиональная переподготовка по программе: «Добыча нефти,
                газа и газового конденсата»
              </div>
            </li>
            <li className="program-list">
              <div className="program-number">02</div>
              <div className="program-description">
                Профессиональная переподготовка по программе: «Капитальный
                ремонт нефтяных и газовых скважин»
              </div>
            </li>
            <li className="program-list">
              <div className="program-number">03</div>
              <div className="program-description">
                Профессиональная переподготовка по программе: «Организация
                строительства»
              </div>
            </li>
            <li className="program-list">
              <div className="program-number">04</div>
              <div className="program-description">
                Профессиональная переподготовка по программе: «Специалист в
                области охраны труда»
              </div>
            </li>
            <li className="program-list">
              <div className="program-number">05</div>
              <div className="program-description">
                Профессиональная переподготовка по программе: «Специалист по
                противопожарной профилактике»
              </div>
            </li>
            <li className="program-list">
              <span className="program-more">
                И еще более 700 программ обучения
              </span>
            </li>
          </div>
          <form className="form">
            <h3 className="form-title">
              Не нашли профессию, которая Вас интересует?
            </h3>
            <p className="form-subtitle">Закажите звонок и мы Вам поможем</p>
            <fieldset>
              <input
                className="form-input"
                placeholder="Ваше имя*"
                required
                type="text"
              />
              <input
                className="form-input"
                placeholder="Ваш телефон*"
                required
                type="text"
              />
              <div style={{ display: "flex", marginBottom: "16px" }}>
                <input type="checkbox" />
                <span className="agreement-span">
                  Я даю свое согласие на{" "}
                  <Link href="/">обработку моих персональных данных</Link>
                </span>
              </div>

              <button className="button button__type-form">Отправить</button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Programs;
