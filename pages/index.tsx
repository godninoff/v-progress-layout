import Head from "next/head";
import PromoBottom from "./PromoBottom";
import Advantages from "./Advantages";
import Clients from "./Clients";
import Header from "./Header";
import License from "./License";
import Programs from "./Programs";
import Promo from "./Promo";
import Questions from "./Questions";
import Recommendations from "./Recommendations";
import TrainingCenter from "./TrainingCenter";
import Certificate from "./Сertificate";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>v-progress-app</title>
      </Head>

      <main className="main-container">
        <Header />
        <Promo />
        <Programs />
        <Advantages />
        <TrainingCenter />
        <Clients />
        <License />
        <Recommendations />
        <Certificate />
        <Questions />
        <PromoBottom />
      </main>

      <Footer />
    </>
  );
}
