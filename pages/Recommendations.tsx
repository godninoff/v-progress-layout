import Image from "next/image";
import arrow from "../public/images/arrowLong.svg";
import { recCard } from "../utils/data";

const Recommendations = () => {
  return (
    <section className="recommendations">
      <div className="container container__secondary">
        <div className="clients-heading-wrapper">
          <h2 className="block-heading">Нас рекомендуют</h2>
          <div>
            <Image
              style={{ transform: "rotate(180deg)", marginRight: "100px" }}
              src={arrow}
              alt="стрелка влево"
            />
            <Image src={arrow} alt="стрелка вправо" />
          </div>
        </div>
        <div className="rec-card-list">
          {recCard.map((e) => (
            <div key={e.id} className="rec-card">
              <div className="rec-card-wrap">
                <Image src={e.image} alt={e.alt} />
                <div style={{ marginLeft: "16px" }}>
                  <div className="rec-card-name">{e.name}</div>
                  <div className="rec-card-city">{e.city}</div>
                </div>
              </div>
              <p>{e.text}</p>
            </div>
          ))}
        </div>
        <div className="slider-dots-container">
          <div className="slider-dots"></div>
          <div className="slider-dots slider-dots-chosen"></div>
          <div className="slider-dots"></div>
          <div className="slider-dots"></div>
          <div className="slider-dots"></div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
