import Image from "next/image";
import plus from "../public/images/plus.svg";
import Link from "next/link";

const Questions = () => {
  return (
    <section className="questions">
      <div className="container container__secondary">
        <h2 className="block-heading">Есть вопросы?</h2>
        <div className="questions-container">
          <ul className="question">
            <li className="question-list">
              <div>Обязательно ли приезжать за документами?</div>
              <Image src={plus} alt="Плюс" />
            </li>
            <li className="question-list">
              <div>
                Если я не сдам тест, нужно ли будет мне доплачивать? Получу ли я
                документы?
              </div>
              <Image src={plus} alt="Плюс" />
            </li>
            <li className="question-list">
              <div>Когда можно начать обучение?</div>
              <Image src={plus} alt="Плюс" />
            </li>
            <li className="question-list">
              <div>Какие документы нужны для поступления?</div>
              <Image src={plus} alt="Плюс" />
            </li>
            <li className="question-list">
              <div>Что означает диплом установленного образца?</div>
              <Image src={plus} alt="Плюс" />
            </li>
            <li className="question-list">
              <div>Что дает профессиональная переподготовка?</div>
              <Image src={plus} alt="Плюс" />
            </li>
            <li className="question-list">
              <div>Что дает повышение квалификации?</div>
              <Image src={plus} alt="Плюс" />
            </li>
            <li className="question-list">
              <div>Имеете ли Вы аккредитацию?</div>
              <Image src={plus} alt="Плюс" />
            </li>
            <li className="question-list">
              <div>Вы государственное учреждение?</div>
              <Image src={plus} alt="Плюс" />
            </li>
          </ul>
          <form className="form form__questions">
            <h3 className="form-title">Не нашли ответа на свой вопрос?</h3>
            <p className="form-subtitle">Напишите нам и мы Вам поможем</p>
            <fieldset>
              <input
                className="form-input form-input__questions"
                placeholder="Ваше имя*"
                required
                type="text"
              />
              <input
                className="form-input form-input__questions"
                placeholder="Электронная почта*"
                required
                type="email"
              />
              <input
                className="form-input form-input__questions form-input__questions_question"
                placeholder="Ваш вопрос"
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

export default Questions;
