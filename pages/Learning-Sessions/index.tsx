import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import calendar from "../../public/img/calendariossesionesdeaprendizaje.png";

export default function Eventos() {
  return (
    <>
      <Head>
        <title>Eventos | Ceroacien | acelera tu carrera profesional</title>
      </Head>
      <main>
        <div className="">
          <Banner>
            <Wrapper>
              <TextHeader>
                <h1 className="text-3xl md:text-6xl font-medium text-white px-24">
                  El siguiente
                  <span className="font-bold mx-2 text-ExtraordinariosText">
                    nivel
                  </span>
                  de tu carrera.
                </h1>
                <h2 className="text-base md:text-xl font-normal text-white">
                  Aprende, comparte,{" "}
                  <span className="relative">
                    conecta.
                    <span className=" absolute animate-ping top-[-20%] right-[-20%] h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
                    <span className=" absolute  top-[-20%] right-[-20%] h-3 w-3 rounded-full bg-sky-500 opacity-75"></span>
                  </span>
                </h2>
              </TextHeader>
            </Wrapper>
          </Banner>
        </div>
        <Conferences />
        <Apply />
      </main>
    </>
  );
}

const Wrapper = ({ children }) => {
  return <section className="max-w-7xl mx-auto h-full">{children}</section>;
};

const TextHeader = ({ children }) => {
  return (
    <section className="flex h-full justify-center max-h-[500px] overflow-hidden ">
      <section className="z-10 relative  h-full w-1/6 hidden w-0">
        <div
          className="z-10 absolute  top-[-3%] right-[-300%] md:top-[5%] md:right-[-50%]  w-[110px] md:w-full aspect-square"
          style={{
            backgroundImage: `url("")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </section>
      <section className=" z-20  px-5 md:px-0 pb-[90px] md:py-[100px] max-w-3xl h-full mx-auto text-center flex flex-col items-center justify-around gap-3">
        {children}
      </section>
      <section className="z-20 relative h-full  w-1/6">
        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: 10,
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="z-20  absolute hidden md:block md:bottom-[30%] md:left-[-50%]   w-full md:h-1/2 md:aspect-square"
          style={{
            backgroundImage: `url("${calendar.src}")`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></motion.div>
      </section>
    </section>
  );
};

const Banner = ({ children }) => {
  return (
    <section
      className=" max-h-[500px] relative z-0 pt-10 md:pt-0 w-screen h-[75vh] md:h-[80vh] bg-primary"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vh))",
      }}
    >
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url(
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='78' height='78' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(180)'%3E%3Crect width='100%25' height='100%25' fill='rgba(42, 67, 101,0)'/%3E%3Cpath d='M0 40h-10v-60h60L40 0L39 1h-38v38z' fill='rgba(247, 250, 252,0)'/%3E%3Cpath d='M40 0v10h60v60L0 40L1 39h38v-38z' fill='rgba(247, 250, 252,0.1)'/%3E%3Cpath d='M40 0v10h60v60L0 40L0 40h40v-40z' fill='rgba(247, 250, 252,0)'/%3E%3Cpath d='M0 40h-10v-60h60L40 0L40 0h-40v40z' fill='rgba(247, 250, 252,0.1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E "
        )`,
        }}
      >
        {children}
      </div>
    </section>
  );
};

const Conferences = () => {
  return (
    <div
      className="py-28"
      style={{
        clipPath: "polygon(0 0, 100% 0,0 calc(100% - 5vh)) , 100% 100%",
      }}
    >
      <Wrapper>
        <div className="">
          <Header />
          <Speakers />
        </div>
      </Wrapper>
    </div>
  );
};

const Header = () => {
  return (
    <div className="">
      <p className="text-lg max-w-md font-medium text-center mx-auto my-4">
        Descubre lo que viene.{" "}
      </p>
      <h2 className="text-3xl md:text-6xl max-w-md md:max-w-5xl font-medium text-center mx-auto my-4">
        Aprende de líderes y expertos de la industria de tecnología.
      </h2>
      <Brand />
    </div>
  );
};

const Brand = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const brand = [
    "https://i.postimg.cc/GtDhSN90/Frame-1.png",
    "https://i.postimg.cc/FHBgjktY/Frame-2-2.png",
    "https://i.postimg.cc/HLbzdWKj/Frame-3.png",
    "https://i.postimg.cc/YS87n73L/Frame-4.png",
  ];

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={BrandVariants}
    >
      <div className="flex justify-center flex-wrap gap-9 p-8">
        {brand.map((item, index) => {
          return (
            <div
              key={"brand" + index}
              className="w-24 h-24 border-2 border-transparent"
            >
              <div
                className="w-full h-full"
                style={{
                  filter: "grayscale(1)",
                  transitionProperty: " filter",
                  transitionDuration: " 1s",
                  backgroundImage: `url("${item}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

const Speakers = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-12  p-12">
      {speakers.map((item, index) => (
        <SpeakersCard item={item} key={"speacker" + index} />
      ))}
    </div>
  );
};

const SpeakersCard = ({ item }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={CardVariants}
    >
      <Link href={item.link}>
        <div className="w-[300px] h-[315px] border-2 shadow-lg rounded-xl overflow-hidden">
          <div className=" relative h-[40%] w-full ">
            <div
              className="absolute top-5 right-5 w-[50px] h-[50px]"
              style={{
                backgroundImage: `url("${item.empresas}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="z-20 flex items-end justify-center w-full h-full absolute bottom-0 left-0 ">
              <div
                className="z-20 w-6/12 aspect-square"
                style={{
                  backgroundImage: `url("${item.avatar}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <div
              className="bg-primary/40 w-full h-full relative"
              style={{
                clipPath: "circle(40.0% at 50% 100%)",
              }}
            ></div>
          </div>
          <div className="h-[60%] w-full text-center flex flex-col justify-between items-center py-3 px-2 gap-2">
            <span className="px-3 rounded-lg text-white bg-gradient-to-r from-Extraordinariosbg1 to-Extraordinariosbg2">
              {item.topic}
            </span>
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <h3 className="text-xs px-2">
              {item.name === "" ? (
                <p className="text-lg">Por Confirmar</p>
              ) : (
                ` por ${item.name} - ${item.description}`
              )}
            </h3>
            <p className="flex items-center gap-3">
              <div className=" h-6 w-6 grid place-content-center">
                <svg
                  width={24}
                  height={24}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3 3.378H19.21V2.323a.323.323 0 0 0-.645 0v1.055h-2.799V2.323a.323.323 0 1 0-.646 0v1.055h-2.798V2.323a.323.323 0 0 0-.646 0v1.055H8.88V2.323a.323.323 0 0 0-.646 0v1.055H5.434V2.323a.323.323 0 0 0-.645 0v1.055H2.7C1.763 3.378 1 4.14 1 5.078v15.155c0 .938.763 1.7 1.7 1.7h18.6c.937 0 1.7-.762 1.7-1.7V5.078c0-.937-.763-1.7-1.7-1.7Zm1.054 16.855c0 .581-.473 1.055-1.055 1.055H2.701a1.056 1.056 0 0 1-1.055-1.055V5.078c0-.581.473-1.055 1.055-1.055h2.088v1.055a.323.323 0 0 0 .645 0V4.023h2.799v1.055a.323.323 0 0 0 .646 0V4.023h2.798v1.055a.323.323 0 0 0 .646 0V4.023h2.798v1.055a.323.323 0 0 0 .646 0V4.023h2.799v1.055a.323.323 0 1 0 .645 0V4.023H21.3c.582 0 1.055.474 1.055 1.055v15.155Z"
                    fill="#000"
                  />
                  <path
                    d="M21.3 6.822H2.7a.323.323 0 0 0 0 .646h18.6a.323.323 0 0 0 0-.646ZM17.627 10.705l-6.746 6.746a.367.367 0 0 1-.518 0L7.063 14.15a.323.323 0 1 0-.457.456l3.302 3.302c.191.19.445.296.715.296.27 0 .525-.105.716-.296l6.746-6.746a.323.323 0 1 0-.457-.457Z"
                    fill="#000"
                  />
                </svg>
              </div>
              {item.date}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

function Apply() {
  return (
    <main className=" max-w-7xl mx-auto p-4 ">
      <section className="max-w-screen-xl mx-auto my-20 flex flex-col gap-10 p-3 ">
        <div className="bg-white w-[80%] mx-auto rounded-lg p-10 text-center flex flex-col items-center gap-8 shadow-xl">
          <h2 className="text-3xl">
            Si te gusta este contenido y quieres potenciar tu carrera
            profesional, aplica a nuestros programas de educación acelerada
          </h2>
          <a
            href="https://w4lava44xuu.typeform.com/to/lAhMzRpA"
            target="_blank"
            rel="noopener"
            className=" px-3 py-2 rounded-2xl bg-primary  text-white text-lg font-semibold"
          >
            ¡Aplica ahora!
          </a>
        </div>
      </section>
    </main>
  );
}

const CardVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  hidden: { opacity: 0, scale: 0 },
};
const BrandVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 1 },
};

const speakers = [
  {
    empresas: "https://i.postimg.cc/zB5yZxC9/ceroacien-2.png",
    avatar: "https://i.postimg.cc/DwyFTqsS/Doodle-Avatar-03.png",
    topic: "Marca personal",
    title: "LinkedIn como un imán para atraer oportunidades. ",
    name: "Natalia Garcia ",
    date: "Proximamente",
    link: "/Learning-Sessions/genera-insights-desde-tu-data-lake",
    description: "Product Analyst @Qentaz - Woman in tech 🚀",
  },
  {
    empresas: "https://i.postimg.cc/zB5yZxC9/ceroacien-2.png",
    avatar: "https://i.postimg.cc/tTY4H81v/Doodle-Avatar-01.png",
    topic: "Web Development",
    title: "",
    name: "",
    date: "Proximamente",
    link: "/Learning-Sessions/",
    description: "",
  },
  {
    empresas: "https://i.postimg.cc/zB5yZxC9/ceroacien-2.png",
    avatar: "https://i.postimg.cc/NjjhVm2p/Doodle-Avatar-02.png",
    topic: "Data analysis",
    title: "",
    name: "",
    date: "Proximamente",
    link: "/Learning-Sessions/",
    description: "",
  },
  {
    empresas: "https://i.postimg.cc/zB5yZxC9/ceroacien-2.png",
    avatar: "https://i.postimg.cc/85WxWbxP/Doodle-Avatar-05.png",
    topic: "Web Development",
    title: "",
    name: "",
    date: "Proximamente",
    link: "/Learning-Sessions/",
    description: "",
  },
  {
    empresas: "https://i.postimg.cc/zB5yZxC9/ceroacien-2.png",
    avatar: "https://i.postimg.cc/xTqy4dTL/Doodle-Avatar-04.png",
    topic: "Data analysis",
    title: "",
    name: "",
    date: "Proximamente",
    link: "/Learning-Sessions/",
    description: "",
  },
  {
    empresas: "https://i.postimg.cc/zB5yZxC9/ceroacien-2.png",
    avatar: "https://i.postimg.cc/JhQknwz1/Doodle-Avatar-07.png",
    topic: "Web Development",
    title: "",
    name: "",
    date: "Proximamente",
    link: "/Learning-Sessions/",
    description: "",
  },
];
