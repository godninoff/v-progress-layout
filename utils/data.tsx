import adv1 from "/public/images/adv1.jpg";
import adv2 from "/public/images/adv2.jpg";
import adv3 from "/public/images/adv3.jpg";
import adv4 from "/public/images/adv4.jpg";
import adv5 from "/public/images/adv5.jpg";
import adv6 from "/public/images/adv6.jpg";
import adv7 from "/public/images/adv7.jpg";
import adv8 from "/public/images/adv8.jpg";
import adv9 from "/public/images/adv9.jpg";

import client1 from "/public/images/lukoil.svg";
import client2 from "/public/images/bashneft.svg";

import photo1 from "/public/images/photo1.jpg";
import photo2 from "/public/images/photo2.jpg";
import photo3 from "/public/images/photo3.jpg";

const id = Math.random().toString(21).slice(-5);

export const advantages = [
  {
    id: id,
    image: adv1,
    alt: "лого карточки",
    title: "Авторские программы",
    description:
      "Обучаем только по авторским программам, которые разрабатываем сами на базе многолетнего практического опыта и исходя из потребностей заказчиков",
  },
  {
    id: id,
    image: adv2,
    alt: "лого карточки",
    title: "9 лет опыта",
    description:
      "Обладаем многолетним опытом обучения специалистов в различных сферах",
  },
  {
    id: id,
    image: adv3,
    alt: "лого карточки",
    title: "Только актуальные программы",
    description:
      "Постоянно ведем мониторинг рынка и на основе полученных данных актуализируем наши учебные программы.",
  },
  {
    id: id,
    image: adv4,
    alt: "лого карточки",
    title: "Квалифицированные преподаватели",
    description:
      "все преподаватели являются специалистами-практиками в тех направлениях, о которых рассказывают на курсах",
  },
  {
    id: id,
    image: adv5,
    alt: "лого карточки",
    title: "Современные методы обучения",
    description:
      "Используем только современные методы обучения, собственные наработки, сформированные за время функционирования организации.",
  },
  {
    id: id,
    image: adv6,
    alt: "лого карточки",
    title: "Документы гособразца",
    description:
      "Обеспечиваем гарантированный результат вашего обучения ивносим документы в Госреестр",
  },
  {
    id: id,
    image: adv7,
    alt: "лого карточки",
    title: "Оптимальные цены",
    description:
      "Предоставляем образовательные услуги по адекватным и понятным ценам",
  },
  {
    id: id,
    image: adv8,
    alt: "лого карточки",
    title: "Минимальные сроки обучения",
    description:
      "Обучаем только по авторским программам, которые разрабатываем сами на базе многолетнего практического опыта и исходя из потребностей заказчиков",
  },
  {
    id: id,
    image: adv9,
    alt: "лого карточки",
    title: "Работаем по всей стране",
    description: "Работаем по всей России и имеем офисы более чем в 10 городах",
  },
];

export const clients = [
  {
    id: id,
    image: client1,
    alt: "лого лукойл",
  },
  {
    id: id,
    image: client2,
    alt: "лого башнефть",
  },
  {
    id: id,
    image: client1,
    alt: "лого лукойл",
  },
  {
    id: id,
    image: client2,
    alt: "лого башнефть",
  },
  {
    id: id,
    image: client1,
    alt: "лого лукойл",
  },
  {
    id: id,
    image: client2,
    alt: "лого башнефть",
  },
];

const name = "Петя Иванько";
const city = "г. Адлер";
const text =
  "Профстандарты - это требования к квалификации работников. В соответсвии с ними, работник который выполняет определенную функцию, должен иметь соответствующую квалификацию. Профстандарты - это требования к квалификации работников. В соответсвии с ними, работник который выполняет определенную функцию, должен иметь соответствующую квалификацию. ";

export const recCard = [
  { id: id, image: photo1, name: name, city: city, text: text, alt: "фото" },
  { id: id, image: photo2, name: name, city: city, text: text, alt: "фото" },
  { id: id, image: photo3, name: name, city: city, text: text, alt: "фото" },
];
