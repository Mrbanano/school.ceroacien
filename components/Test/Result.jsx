import Head from "next/head";
import { useRouter } from "next/router";

export const Result = ({}) => {
  const { asPath } = useRouter();
  const Content = content[asPath.split("/")[2]];
  return (
    <>
      <Head>
        <title>{Content?.title}</title>
        <meta
          name="description"
          content="Aqui encontraras los modulos que te ayudaran a aprender habilidades de esta industrica tecnologica"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" h-screen w-screen">
        <header className="w-full  bg-white z-0 h-[150px]  md:h-[400px] grid place-items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center h-full z-0 p-2 md:h-[150px] ">
            <div className=" grid place-items-center">
              <span className="bg-primary text-white px-3  rounded-md font-semibold ">
                Tu eres
              </span>
              <h1 className="font-bold text-center text-3xl md:text-5xl md:w-[500px] text-slate-700 ">
                {Content?.title}
              </h1>
            </div>
          </div>
        </header>
        <section className=" max-w-screen-xl mx-auto mt-10 p-3 py-2 flex flex-col gap-10 md:flex-row md:py-5">
          <div className=" bg-white p-4 rounded-xl shadow-lg flex flex-col gap-3">
            <h2 className="text-xl border-b-2 border-black text-center font-bold p-2 w-[90%] mx-auto">
              aqui va un subtexto
            </h2>
            <p className="py-4 text-lg text-center">
              Los posibles campos profesionales para quienes hacen preguntas
              incluyen investigación de usuarios, Diseño y experiencia de
              usuario, periodismo de investigación, derecho y ciencia de datos.
            </p>
          </div>
          <div className=" bg-white p-4 rounded-xl shadow-lg flex flex-col gap-3">
            <h2 className="text-xl border-b-2 border-black text-center font-bold p-2 w-[90%] mx-auto">
              aqui va un subtexto
            </h2>
            <p className="py-4 text-lg text-center">
              La curiosidad, la búsqueda y la atención al detalle son algunas de
              tus principales cualidades. Te gusta investigar y hacer preguntas.
              Te gusta crear un plan y construir un equipo para hacerlo
              realidad. Te gusta hacer preguntas y explorar hasta encontrar algo
              interesante. Te gusta aprender y encontrar la respuesta de
              múltiples desafíos.
            </p>
          </div>
        </section>
        <p>{Content?.title}</p>
        <a
          href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fceroacien.io%2Ftest%2F&text=Acabo de realizar este Quiz para saber qué cursos son para mí ¿Por qué no lo intentas? &via=ceroacien_io"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="share on twitter"
          className="bg-primary w-[40px] text-2xl text-white h-[40px] rounded-full flex justify-center items-center"
        >
          T
        </a>
      </main>
    </>
  );
};

const content = {
  "Buscador-de-la-verdad": {
    title: "Buscador de la verdad",
  },
  "Una-gran-historia-por-contantar": {
    title: "Una gran historia por contantar",
  },
};
