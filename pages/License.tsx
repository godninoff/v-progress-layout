import Image from "next/image";
import license1 from "../public/images/license1.jpg";
import license2 from "../public/images/license2.jpg";
import license3 from "../public/images/license3.jpg";
import license4 from "../public/images/license4.jpg";

const License = () => {
  return (
    <section className="license">
      <div className="container container__secondary">
        <h2 className="block-heading">
          Лицензия на образовательную деятельность
        </h2>
        <Image
          className="license-img"
          src={license1}
          alt={"документ лицензии"}
        />
        <Image
          className="license-img"
          src={license2}
          alt={"документ лицензии"}
        />
        <Image
          className="license-img"
          src={license3}
          alt={"документ лицензии"}
        />
        <Image
          className="license-img"
          src={license4}
          alt={"документ лицензии"}
        />
      </div>
    </section>
  );
};

export default License;
