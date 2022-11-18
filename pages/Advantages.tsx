import Image from "next/image";
import { advantages } from "../utils/data";

const Advantages = () => {
  return (
    <section className="advantages">
      <div className="container">
        <h2 className="block-heading">Преимущества обучения в «ПРОГРЕСС» </h2>
        <ul className="card-list">
          {advantages.map((e) => (
            <article key={e.id} className="card">
              <Image className="card-lmg" src={e.image} alt={e.alt} />
              <h3 className="card-title">{e.title}</h3>
              <p>{e.description}</p>
            </article>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
