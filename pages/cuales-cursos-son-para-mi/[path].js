import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import Confetti from "react-confetti";
import { CeroacienInstances } from "../../config";

export default function Path() {
  const { asPath } = useRouter();
  const Content = content[asPath.split("/")[2]];
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    setPosition({
      x: window.innerWidth,
      y: window.innerHeight * 2,
    });
  }, []);

  return (
    <>
      <Head>
        <title>{Content?.title}</title>
        <meta
          name="description"
          content={`${Content?.title} - ${Content?.cualidades}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Confetti
        width={position.x}
        height={position.y}
        recycle={false}
        numberOfPieces={3000}
        className={"z-50"}
        gravity={0.1}
        tweenDuration={4500}
      />
      <HeaderTest Content={Content} />
      <BodyTest>
        <TestDetail Content={Content} />
        <ListCourse courses={Content?.courses} />
      </BodyTest>
    </>
  );
}

const HeaderTest = ({ Content }) => {
  return (
    <header className="w-full  bg-white z-0 h-[260px] md:h-[290px] grid place-items-center shadow-lg relative">
      <div className="max-w-screen-xl mx-auto flex justify-center h-full z-0 p-2 md:h-[150px] relative ">
        <div className="grid place-items-center relative">
          <span className="bg-primary text-white px-3  rounded-md font-semibold md:mb-8">
            Tienes características de
          </span>
          <h1 className="self-start md:self-center font-bold text-center text-3xl md:text-5xl md:w-full max-w-[800px] text-slate-700">
            {Content?.title}
          </h1>
        </div>
      </div>
      <Socialshare />
    </header>
  );
};

const Socialshare = () => {
  const [url, seturl] = useState();
  const { asPath } = useRouter();
  console.log(asPath);
  useEffect(() => {
    const url = process.env.VERCEL_URL || window.location.host;
    seturl(url + asPath);
  }, []);
  return (
    <section className="absolute left-[10%] md:right-[] bottom-[-7%]  mt-10  mx-auto w-[80%] h-[50px] flex justify-center items-center gap-10">
      <FBShare url={url} />
      <TwitterShare url={url} />
      <LinkedinShare url={url} />
    </section>
  );
};

const BodyTest = ({ children }) => {
  return <main className=" h-screen w-screen ">{children}</main>;
};

const TestDetail = ({ Content }) => {
  return (
    <section className=" max-w-screen-xl mx-auto mt-10 p-3 py-2 flex flex-col gap-10 md:flex-row md:py-5">
      <div className=" bg-white p-4 rounded-xl shadow-lg flex flex-col gap-3">
        <h2 className="text-lg border-b-2 border-black text-center font-bold p-2 w-[90%] mx-auto">
          Los posibles campos profesionales
        </h2>
        <p className="p-0 text-lg text-left border-2 border-transparent w-[90%] mx-auto ">
          {Content?.recomendaciones}
        </p>
      </div>
      <div className=" bg-white p-4 rounded-xl shadow-lg flex flex-col gap-3">
        <h2 className="text-xl border-b-2 border-black text-center font-bold p-2 w-[90%] mx-auto">
          Cualidades
        </h2>
        <p className="py-4 text-lg  border-2 border-transparent w-[90%] mx-auto text-left">
          {Content?.cualidades}
        </p>
      </div>
    </section>
  );
};

const socialicon =
  "border-2 bg-white shadow-lg hover border-primary text-primary w-[50px] text-2xl  h-[50px] p-3 rounded-full flex justify-center items-center hover:bg-primary hover:border-white hover-border-2 hover:text-white";

const FBShare = () => {
  return (
    <a
      href="https://www.facebook.com/dialog/share?app_id=&amp;href=&amp;quote=!&amp;hashtag=%23ceroacien"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="share on facebook"
      className={socialicon}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        role="img"
        aria-hidden="true"
        className="text-primary hover:text-white"
      >
        <title>Facebook Icon</title>
        <path
          fill="#403BF9"
          d="M6.1 16V8.5h-2V5.8h2V3.5C6.1 1.7 7.3 0 10 0c1.1 0 1.9.1 1.9.1l-.1 2.5h-1.7C9.1 2.6 9 3 9 3.8v2h2.9l-.1 2.7H8.9V16H6.1z"
        ></path>
      </svg>
    </a>
  );
};

const TwitterShare = ({ url }) => {
  return (
    <a
      href={`https://twitter.com/intent/tweet?url=https%3A%2F%2F${url}&text=Acabo de realizar este Quiz para saber qué cursos son para mí. ¿Por qué no lo intentas?\n \n &via=ceroacien_io`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="share on twitter"
      className={socialicon}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        role="img"
        aria-hidden="true"
        className="text-primary hover:text-white"
      >
        <title>Twitter Icon</title>
        <path
          fill="#403BF9"
          d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.8-2.7-.2-5.2-1.5-6.8-3.5-.3.5-.4 1.1-.4 1.6 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.2-.6.2-.9.2-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
        ></path>
      </svg>
    </a>
  );
};

const LinkedinShare = ({ url }) => {
  return (
    <a
      href={`https://www.linkedin.com/shareArticle?url=https%3A%2F%2F${url}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="share on twitter"
      className={socialicon}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        role="img"
        aria-hidden="true"
        className="text-primary hover:text-white"
      >
        <title>Linkedin Icon</title>
        <path
          fill="#403BF9"
          d="M5.6 8.2c0-1.4 0-2.5-.1-3.5h2.9l.2 1.5h.1c.4-.7 1.5-1.8 3.4-1.8 2.2 0 3.9 1.5 3.9 4.7v6.4h-3.4v-6c0-1.4-.5-2.4-1.7-2.4-.9 0-1.5.6-1.7 1.3-.2.3-.2.6-.2.9v6.3H5.6V8.2zM.1 4.9h3.4v10.9H.1V4.9zm3.5-3c0 .9-.7 1.7-1.8 1.7S0 2.8 0 1.9C0 .9.7.2 1.8.2 3 .2 3.6.9 3.6 1.9z"
        ></path>
      </svg>
    </a>
  );
};

const ListCourse = ({ courses }) => {
  return (
    <section className=" max-w-screen-xl mx-auto mt-20 flex flex-col gap-10 p-3">
      <div className="text-center text-xl font-bold">
        <h2 className="border-b-2 w-[90%] mx-auto px-2 py-8 md:p-8 border-black md:text-5xl text-3xl  md:w-[71%]">
          Algunos <span className="text-primary">cursos</span> que te pueden
          interesar.
        </h2>
      </div>
      <Roadmap courses={courses} />
    </section>
  );
};

const Roadmap = ({ courses = [] }) => {
  return (
    <div className="grid grid-cols-1 gap-28 py-5">
      {courses.map((course, index) => (
        <CardCourseTest
          key={index}
          id={course.id}
          index={index + 1}
          limit={courses.length}
        />
      ))}
    </div>
  );
};

const CardCourseTest = ({ id, index, limit }) => {
  //customHook
  const [course, setcourse] = useState(null);
  useEffect(() => {
    (async () => {
      const { data } = await CeroacienInstances.get(`/courses/${id}`);
      setcourse(data);
    })();
  }, [id]);

  return (
    <Link href={`/course/${course?.id}`}>
      <section className="relative h-52 md:h-72 w-full max-w-2xl mx-auto">
        <div className={`absolute ${ball} ${limit === index ? null : line}`}>
          <p className="text-white font-semibold">{index}</p>
        </div>
        <div className="border-2 border-transparent h-full pl-12">
          <div className="border-2 border-transparent h-full bg-white shadow-xl rounded-lg p-4">
            <div className="border-2 border-transparent flex gap-4">
              <div className="border-2 border-transparent h-[50px] md:h-[75px] aspect-square self-center rounded-full">
                <img
                  src={
                    course?.metadata.icon ||
                    "https://i.postimg.cc/8cqRntyD/generic.png"
                  }
                  alt={course?.title}
                  className="rounded-full"
                />
              </div>
              <div>
                <h2 className="text-lg font-bold md:text-3xl md:font-semibold">
                  {course?.name}
                </h2>
              </div>
            </div>
            <div className=" h-[60%] mt-4 overflow-hidden md:text-lg font-light grid place-items-center">
              <p className="">{course?.description}</p>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

const ball =
  "top-[40%] left-[-6px] h-[40px] w-[40px] rounded-full bg-primary text-center  grid place-items-center";
const line =
  "before:absolute before:w-[1px] before:h-[800%]  before:md:h-[900%] before:bg-black before:top-[100%] before:left:[49%]";

const content = {
  "Creando-un-camino-donde-no-lo-hay": {
    title: "Creando un camino donde no lo hay",
    cualidades:
      "La estrategia, el cambio, la creación de una visión y la atención al detalle son tu fortaleza. Te gusta gestionar las tareas, construir impacto y ser el líder del grupo. Siempre tienes un plan y organizas grupos animando y ayudando a los demás. Eres generalista y te gusta construir conocimiento en varias áreas, saber por donde hay que seguir trabajando y cuándo el trabajo tiene que ser entregado.",
    recomendaciones:
      "para los conectores de puntos incluyen la gestión de proyectos, el análisis de negocio, la estrategia de posicionamiento de marca, estudios de mercado y la gestión de productos digitales.",
    courses: [
      {
        id: "prod_M3QQuIyzvHyCtU",
      },
      { id: "prod_M2wcHFPlwjpthz" },
    ],
  },
  "Una-gran-historia-por-contantar": {
    title: "Una gran historia por contantar",
    cualidades:
      "La empatía, la creatividad, la creación de estrategia y la comunicación son un fuerte para ti. Creas mapas mentales y procesos para encontrar los puntos de dolor de un cliente. Te gusta ver las cosas desde una perspectiva diferente poniéndote en el lugar de otra persona. Te gusta aprender de todo un poco y exploras soluciones a problemas desde diferentes ángulos. Principales cualidades: contar historias, explorar, escuchar y compartir.",
    recomendaciones:
      "para los defensores de los usuarios incluyen Marketing, Atención al cliente, Creación de contenido, Gestión de ventas, Diseño y Emprendimiento.",
    courses: [
      {
        id: "prod_M3QQuIyzvHyCtU",
      },
      { id: "prod_M2wcHFPlwjpthz" },
    ],
  },
  "Buscador-de-la-verdad": {
    title: "Buscador de la verdad",
    cualidades:
      "La curiosidad, la búsqueda y la atención al detalle son algunas de tus principales cualidades. Te gusta investigar y hacer preguntas. Te gusta crear un plan y construir un equipo para hacerlo realidad. Te gusta hacer preguntas y explorar hasta encontrar algo interesante. Te gusta aprender y encontrar la respuesta de múltiples desafíos.",
    recomendaciones:
      "para quienes hacen preguntas incluyen investigación de usuarios, Diseño y experiencia de usuario, periodismo de investigación, derecho y ciencia de datos.",
    courses: [
      {
        id: "prod_M3QQuIyzvHyCtU",
      },
      { id: "prod_M2wcHFPlwjpthz" },
    ],
  },
  "Construyendo-un-mejor-futuro-para-todos": {
    title: "Construyendo un mejor futuro para todos.",
    cualidades:
      "Te gusta adoptar y aprender nuevas tecnologías. Tienes fortalezas en lógica y persistencia solucionando problemas complejos. Sabes deshacer los problemas en partes más manejables y no temes a la complejidad. Usas las herramientas que tienes y construyes usando tus herramientas. Piensas en sistemas y te adaptas al cambio sin temer a las nuevas tecnologías a las que te acercas por tu curiosidad implacable.",
    recomendaciones:
      "para los creadores de futuros incluyen estrategia de productos, operaciones comerciales, ingenierías, arquitectura e ingeniería de software.",
    courses: [
      {
        id: "prod_M3QQuIyzvHyCtU",
      },
      { id: "prod_M2wcHFPlwjpthz" },
    ],
  },
};
