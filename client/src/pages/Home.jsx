import { Navbar, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, Hero, MainVideo } from '../components';
import React from 'react';
import styles from '../styles';

import GetStarted from '../components/GetStarted';

import { callouts } from "../constants";


const Home = () => (
  <div>
    <div className={`bg-lightgreen ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <div className=' w-full overflow-hidden'>
        {/* баннер */}
          <section id="home" className={`ml-7 flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="flex-1 font-poppins font-semibold ss:text-[80px]
                          text-[52px] text-white">
                Сделай мир чуточку {" "}
                <br className="sm:block hidden" /> {" "}
                лучше {" "}
                <br className="sm:block hidden" /> {" "}

                <span className="ss:text-[66px] text-gray">EnergyPlus</span> {" "}
              </h1>
            </div>
          </section>

        </div>

      </div>
    </div>

        {/* наши продукты */}
    <div className={`bg-gray ${styles.flexStart}`}>


      <div className="bg-white"> {/* белый массив */}
        <div className="mx-auto  px-4 sm:px-6 lg:px-8"> {/* массив в центре как отступ */}
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32"> {/* массив в центре с заголовком */}
            <h2 className="text-4xl text-center font-bold text-gray-900">Наши предложения</h2> {/* заголовок */}

            <div className="mt-16 px-8 space-x-8   space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>


{/* почему мы? */}

    <div className="px-4 sm:px-4 lg:px-8 bg-green">
      <div className="mx-auto max-w-2xl space-y-12 py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="flex-1 text-center font-poppins font-semibold ss:text-[50px] 
        text-[52px] text-white">Почему Вам нужно выбрать именно нас?</h2>
        <h1 className="px-14 text-justify font-poppins font-normal ss:text-[30px] 
        text-[30px] text-white">
          EnergyPlus - Компания, которая заботится о Вас и Вашем доме, именно поэтому мы предлагаем Вам только качественные и надежные услуги. И мы гарантируем, что Вы будете довольны нашими услугами.
          А еще мы предлагаем Вам скидки на наши услуги. Подробнее об условиях скидок Вы можете узнать у наших менеджеров. Более того, мы предлагаем Вам бесплатный выезд нашего специалиста для оценки Вашего дома и составления сметы.
          Как Вы видите, мы предлагаем Вам только лучшее, именно поэтому мы гарантируем, что Вы будете довольны нашими услугами. Поэтому, если Вы хотите сделать свой дом комфортным и уютным, то Вы обратились по адресу.
          Еще один плюс нашей компании - это то, что мы предлагаем Вам только качественные и надежные услуги. И мы гарантируем, что Вы будете довольны нашими услугами. А еще мы предлагаем Вам скидки на наши услуги.
        </h1>
      </div>
    </div>







  </div>

);





export default Home;