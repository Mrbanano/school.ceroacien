import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Index() {
  return (
    <>
      <ProgramDescription />
    </>
  );
}

const ProgramDescription = () => {
  const limit = ProgramItems.length;
  const ball =
    "top-[15px] left-[0px] h-[20px] w-[20px] rounded-full bg-primary/80 text-center  grid place-items-center";
  const line =
    "before:absolute before:w-[4px] before:h-[3990%]  before:md:h-[2700%] before:bg-primary/50 before:top-[100%] before:left:[49%]";

  return (
    <>
      <Head>
        <title>
          Descubre cual es la ruta de aprendizaje mas optima para ti | ceroacien
          | acelera tu carrera profesional
        </title>
      </Head>
      <main className=" max-w-7xl mx-auto p-4 ">
        <section className="max-w-screen-xl mx-auto flex flex-col gap-10 p-3">
          <div className=" flex flex-col items-start gap-8 text-left text-xl font-bold w-[90%]  md:w-full  border-black mx-auto px-2 py-8 md:p-8 ">
            <h2 className=" text-3xl text-center md:text-5xl  md:text-left">
              Lleva tu carrera al siguiente nivel.
            </h2>
            <p className="text-center md:text-left font-normal w-[95%] text-sm md:text-base md:w-[90%] text-black/50">
              Mejora tu perfil profesional para acceder a oportunidades
              laborales de clase mundial. Entrenamiento intensivo, con mentores
              expertos e inglés técnico.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-28 ">
            {ProgramItems.map((item, index) => (
              <div key={"item" + index} className=" w-full">
                <section className="relative w-full max-w-5xl mx-auto ">
                  <div
                    className={`absolute ${ball} ${
                      limit === index + 1 ? null : line
                    }`}
                  >
                    <div className=" w-full h-full rounded-full bg-primary animate-ping "></div>
                  </div>
                  <div className="h-full pl-12  w-full">
                    <div className="h-[80%]  bg-transparent p-1 text-left ">
                      <div className=" flex gap-4">
                        <h2 className="text-lg font-bold md:text-3xl md:font-semibold text-primary">
                          {item?.title}
                        </h2>
                      </div>
                      <div className="mt-4 overflow-hidden md:text-lg font-light ">
                        <p className="text-black/70">{item?.description}</p>
                      </div>
                      <div className="py-5 md:p-8 grid gap-2  md:grid-cols-3 md:gap-5 ">
                        {item?.feactures.map((feacture, index) => (
                          <Item key={"feacture" + index} feacture={feacture} />
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

const Item = ({ feacture }) => {
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
      <Link href={`donde-empiezo/${feacture?.path}`}>
        <div className="border-2 border-primary/25 w-full aspect-square rounded-lg flex flex-col  overflow-hidden bg-white shadow-xl">
          <div
            className=" h-1/2 bg-primary/50"
            style={{
              backgroundImage: `url("${feacture.banner}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className=" h-1/2 p-4 overflow-hidden">
            <h2 className="text-lg font-semibold">{feacture.title}</h2>
            <p>{feacture.description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const CardVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  hidden: { opacity: 0, scale: 0 },
};

const ProgramItems = [
  {
    title: "Introducción a las carreras en tecnología",
    description: "Descripción general de la industria tecnológica",
    feactures: [
      {
        title: "¿Qué es la tecnología?",
        description: "Breve introducción a la tecnología",
        banner: "",
        path: "",
      },
    ],
  },
  {
    title: "Ingeniería de software",
    description:
      "Todo lo que necesitas saber sobre una carrera en Ingeniería de Software.",
    feactures: [
      {
        title: "¿Qué es la tecnología?",
        description: "Breve introducción a la tecnología",
        banner: "",
        path: "",
      },
      {
        title: "¿Qué es la tecnología?",
        description: "Breve introducción a la tecnología",
        banner: "",
        path: "",
      },
    ],
  },
  {
    title: "Ciencia de datos",
    description:
      "Todo lo que necesitas saber sobre una carrera en Ciencia de Datos.",
    feactures: [
      {
        title: "¿Qué es la tecnología?",
        description: "Breve introducción a la tecnología",
        banner: "",
        path: "",
      },
    ],
  },
];
