import React from 'react';

export const Presentation = ({ StartTest }) => {
  return (
    <main className=" w-screen h-screen flex flex-col md:flex-row">
      <section className="border-b-2 md:border-r-2 bg-white shadow-xl border-transparent h-1/2 grid place-items-center py-3 px-2 md:h-full md:w-1/2">
        <div className="flex flex-col gap-5 md:gap-12">
          <h1 className="text-3xl md:text-5xl md:px-10 font-bold text-black text-center">
            ¿No estás seguro por dónde comenzar?
          </h1>
          <span className="font-light text-xs  md:text-lg  mx-8 text-center px-10">
            Este breve cuestionario te ayudará a encontrar una ruta de aprendizaje para ti.
          </span>
        </div>
      </section>
      <section className="h-1/2 grid place-items-center md:h-full md:w-1/2 shadow-inner ">
        <div className="flex flex-col gap-6 md:gap-12">
          <p className="text-lg md:text-2xl md:mx-16 font-medium text-black text-center px-8">
            Descubra carreras y cursos que podrían ser para ti.
          </p>
          <button
            className="border-2 border-primary self-center px-6 py-3 rounded-2xl bg-primary text-white"
            onClick={StartTest}>
            Inicia Ahora
          </button>
        </div>
      </section>
    </main>
  );
};
