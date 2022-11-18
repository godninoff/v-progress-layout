import { clients } from "../utils/data";
import Image from "next/image";

const Clients = () => {
  return (
    <section className="clients">
      <div className="container">
        <h2 className="block-heading">Наши клиенты работают в компаниях</h2>
        <ul>
          {clients.map((e) => (
            <Image
              className="client-img"
              src={e.image}
              alt={e.alt}
              key={e.id}
            />
          ))}
        </ul>
        <div className="slider-dots-container slider-dots-container__clients">
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

export default Clients;
