import Image from "next/image";
import trainingCenter from "../public/images/trainingCenter.jpg";

const TrainingCenter = () => {
  return (
    <section className="training-center">
      <div className="training-center-container">
        <h2 className="block-heading">Учебный центр «ПРОГРЕСС»</h2>
        <div className="training-center-text">
          <p>
            Учебный центр «ПРОГРЕСС» является центром профессионального
            обучения, дополнительного профессионального образования.
          </p>
          <p>Мы реализуем более 700 образовательных программ.</p>
          <p>
            Нашими клиентами являются как крупные промышленные предприятия,
            представители среднего и малого бизнеса так и физические лица.
          </p>
          <p>
            Прогрессивный подход к потребностям клиентов и гибкая ценовая
            политика нашего центра позволяют Вам получить образовательные услуги
            на высочайшем уровне с учетом экономии времени и средств.
          </p>
          <p>
            Учебный центр «ПРОГРЕСС» – это высококвалифицированные специалисты с
            многолетним практическим опытом работы в различных отраслях
            промышленности, благодаря чему мы заслужили доверие многих наших
            клиентов.
          </p>
          <Image
            className="training-center-img"
            src={trainingCenter}
            alt="тренировочный центр"
          />
        </div>
      </div>
    </section>
  );
};

export default TrainingCenter;
