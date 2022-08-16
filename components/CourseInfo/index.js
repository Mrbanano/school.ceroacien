import React from "react";
import Author from "./Author";

export const CourseInfo = ({ descripcion, tutor, type }) => {
  return (
    <article className="bg-white p-8 rounded-xl">
      <p className="font-bold text-lg border-b-4 py-1 border-black w-[75%] md:w-2/6 md:text-xl">
        Descripción del curso
      </p>
      <section className="my-8 flex flex-col justify-between items-center md:items-start">
        <section className="mb-4 text-left">
          <span className="font-bold text-lg"> Sobre el Modulo</span>
          <p className="text-left text-md my-5">{descripcion}</p>
        </section>
        {!type && <Author tutor={tutor} />}
      </section>
    </article>
  );
};
