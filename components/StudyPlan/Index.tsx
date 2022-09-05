import Head from "next/head";
import { ProgramItems } from "./data";
import { CardItem } from "./CardItem";

export default function Index() {
  return <ProgramDescription />;
}

const ProgramDescription = () => {
  const limit = ProgramItems.length;
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
              <CardItem key={index} item={item} index={index} limit={limit} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
