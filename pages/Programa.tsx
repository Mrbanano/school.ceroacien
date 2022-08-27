import React from "react";

export default function Programa() {
  return (
    <>
      <ProgramDescription />
      <Pricing />
      <Details />
      <Banner />
    </>
  );
}

function Banner() {
  return (
    <main className=" max-w-7xl mx-auto p-4 ">
      <section className="max-w-screen-xl mx-auto my-20 flex flex-col gap-10 p-3 ">
        <div className="bg-white w-[80%] mx-auto rounded-lg p-10 text-center flex flex-col items-center gap-8 shadow-xl">
          <h2 className="text-3xl">
            Estás a un paso de potenciar tu metas profesionales
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

const ProgramDescription = () => {
  const ProgramItems = [
    {
      title: "Entrenamiento en PowerSkills",
      description:
        "Mentores que te ayudarán a lograr tus objetivos profesionales, seguimiento semanal y asesorías especializadas 1-1 en vivo y también sesiones grupales.",
      feactures: [
        "Creación de CV y LinkedIn efectivo.",
        "Contenido grabado y sesiones en vivo. ",
        "Prepárate para entrevistas internacionales.",
      ],
    },
    {
      title: "Entrenamiento en el idioma Inglés",
      description:
        "Acceso a sesiones en vivo para mejorar tu inglés y romper la barrera en entrevistas, pruebas y procesos de selección en empresas internacionales.",
      feactures: [
        "Sesiones en vivo + prácticas.",
        "Niveles: básico, intermedio y avanzado.",
        "Inglés para personas técnicas.",
        "Sesiones con mentores en inglés.",
      ],
    },
    {
      title: "Entrenamiento Técnico",
      description:
        "Supera procesos de selección altamente competitivos que incluyen fases de coding challenges, pruebas técnicas y proyectos. ",
      feactures: [
        "Mejora tu performance como programador.",
        "Fundamentos de Computer Science.",
        "Sesiones con mentores de compañías de clase mundial.",
      ],
    },
  ];
  const limit = ProgramItems.length;
  const ball =
    "top-[15px] left-[0px] h-[20px] w-[20px] rounded-full bg-primary/80 text-center  grid place-items-center";
  const line =
    "before:absolute before:w-[4px] before:h-[3050%]  before:md:h-[1955%] before:bg-primary/50 before:top-[100%] before:left:[49%]";

  return (
    <main className=" max-w-7xl mx-auto p-4">
      <section className="max-w-screen-xl mx-auto mt-20 flex flex-col gap-10 p-3">
        <div className="flex flex-col items-center gap-8 text-center text-xl font-bold w-[90%]  md:w-[71%] border-b-2 border-black mx-auto px-2 py-8 md:p-8 ">
          <h2 className=" md:flex md:gap-2 md:text-5xl text-5xl  text-center">
            Lleva tu carrera al siguiente
            <span className="ml-1 md:ml-0 text-primary">nivel.</span>
          </h2>
          <p className="font-normal w-[95%] text-sm md:text-base md:w-[90%] text-black/50">
            Mejora tu perfil profesional para acceder a oportunidades laborales
            de clase mundial. Entrenamiento intensivo, con mentores expertos e
            inglés técnico.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-28 py-5">
          {ProgramItems.map((item, index) => (
            <div key={"item" + index}>
              <section className="relative  w-full max-w-2xl mx-auto ">
                <div
                  className={`absolute ${ball} ${
                    limit === index + 1 ? null : line
                  }`}
                >
                  <div className=" w-full h-full rounded-full bg-primary animate-ping "></div>
                </div>
                <div className="border-2 border-transparent h-full pl-12">
                  <div className="border-2 border-transparent h-full  bg-transparent p-1 text-left">
                    <div className="border-2 border-transparent  flex gap-4">
                      <h2 className="text-lg font-bold md:text-3xl md:font-semibold text-primary">
                        {item?.title}
                      </h2>
                    </div>
                    <div className="mt-4 overflow-hidden md:text-lg font-light grid place-items-center">
                      <p className="text-black/70">{item?.description}</p>
                    </div>
                    <div className="py-5 md:p-5 grid gap-2 grid-cols-2 md:grid-cols-4 md:gap-5 ">
                      {item?.feactures.map((feacture, index) => (
                        <div
                          key={"feacture" + index}
                          className="border-2 border-primary w-full aspect-square flex items-center justify-center p-1"
                        >
                          <p className="text-center text-xs">{feacture}</p>
                        </div>
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
  );
};

function Pricing() {
  return (
    <>
      <div className="w-[60%] mx-auto border-[1px] border-black/5"></div>
      <main className=" max-w-7xl mx-auto p-4 ">
        <section className="max-w-screen-xl mx-auto my-10 flex flex-col gap-10 p-3 ">
          <div className=" text-center p-6">
            <h2 className="font-bold text-2xl md:text-3xl mb-8 lg:mb-12 ">
              Únicamente pagas
            </h2>
            <div className=" max-w-sm mx-auto p-5 flex flex-col gap-8 shadow-xl">
              <p className="text-6xl font-bold">
                USD <span className="text-primary/90">$250</span>
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-xs">
                  Puedes dividir el pago en 2 cuotas, sin trucos.
                </p>
                <p className="text-xs">
                  Nosotros no te pedimos dinero por tu nuevo empleo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function Details() {
  const DetailItems = [
    {
      Number: "1",
      title: "Hora grupal a la semana",
    },
    {
      Number: "1",
      title: "Hora personalizada a la semana",
    },
    {
      Number: "5",
      title: "Horas de contenido grabado",
    },
    {
      Number: "20",
      title: "Horas de práctica y ejercicios",
    },
  ];

  return (
    <>
      <div className="w-[60%] mx-auto border-[1px] border-black/5"></div>
      <main className=" max-w-7xl mx-auto p-4 ">
        <section className="max-w-screen-xl mx-auto my-32 flex flex-col gap-10 p-3 ">
          <div className=" text-center p-6  flex flex-col items-start">
            <h2 className="font-bold text-4xl mb-8 lg:mb-12 ">
              La duración del programa es de{" "}
              <span className="text-primary">2 meses</span>
            </h2>
          </div>
          <div className=" flex flex-col items-center justify-center md:flex-row overflow-y-auto">
            {DetailItems.map((item, index) => (
              <div
                key={"details" + item.title}
                className="relative   w-full md:w-1/4 aspect-square flex flex-col items-center justify-start gap-6 h-full mx-4 my-2 p-5 bg-white rounded-lg shadow-lg"
              >
                <p
                  className={`absolute top-0 left-[${
                    (index * 10) / 100
                  }] text-9xl font-extrabold text-primary/70`}
                >
                  {item.Number}
                </p>
                <div></div>
                <div className="mt-[8rem] border-2 border-black/30 w-[50%] mx-auto my-5"></div>
                <p className="text-2xl text-center px-4">{item.title}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
