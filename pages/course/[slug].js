import Head from "next/head";
import React, { useEffect, useState } from "react";

import Author from "../../components/CourseInfo/Author";
import Clock from "../../components/Icon/Clock";
import Paper from "../../components/Icon/Paper";
import Task from "../../components/Icon/Task";
import Loop from "../../components/Icon/Loop";
import TemaryIcon from "../../components/Icon/TemaryIcon";
import { CourseInfo as Description } from "../../components/CourseInfo";

import Image from "next/image";
import { Payment } from "../../utils/Payment";
import { useRouter } from "next/router";
import { getCourseDetail } from "../../utils/getCourseDetail";

export default function index() {
  const [Loading, setLoading] = useState(true);
  const [course, setCourse] = useState({});
  const { asPath } = useRouter();
  const id = asPath.split("/")[2];

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getCourseDetail(id);
      setCourse(data);
      setLoading(false);
    })();
  }, [id]);

  return (
    <>
      <Head>
        <title>{course.name}</title>
        <meta name="description" content={course.descripcion} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative max-w-screen-xl mx-auto sm:flex justify-evenly items-start sm:mt-14">
        {Loading ? (
          <p>Cargando...</p>
        ) : (
          <>
            <WraperCourseInfo>
              <HeroCourse media={course?.extra?.media} />
              <CourseInfo course={course} />
            </WraperCourseInfo>
            <Banner price={course.default_price} />
            <WrapperCourseContent>
              <HeaderCourse course={course} />
              <DescriptionSection course={course} />
              <Temary temary={course?.extra?.temary} />
            </WrapperCourseContent>
          </>
        )}
      </main>
    </>
  );
}

const WrapperCourseContent = ({ children }) => {
  return (
    <section className="sm:w-4/6 relative min-h-screen">{children}</section>
  );
};

const HeaderCourse = ({ course }) => {
  return (
    <section className="bg-white hidden px-12 py-6 sm:flex sm:flex-col gap-8  z-0">
      <h1 className="text-5xl font-semibold ">{course.name}</h1>
      <p className="font-light text-xl ">{course.description}</p>
      <Mentor mentor={course.extra.tutor} />
    </section>
  );
};

const HeroCourse = ({ media, type = "video" }) => {
  return (
    <section className=" aspect-video">
      {type === "video" ? (
        <iframe src={media} width="100%" height="100%" scrolling="no"></iframe>
      ) : (
        <>
          <Image
            src={media}
            className=" aspect-video w-[100%] h-[100%] object-cover"
            alt="course"
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </>
      )}
    </section>
  );
};

const CourseInfo = ({ course }) => {
  return (
    <section className=" flex flex-col gap-2 px-[2.4rem] py-4 sm:px-3">
      <h1 className="text-2xl font-semibold sm:hidden">{course.name}</h1>
      <p className="font-light text-base sm:hidden">{course.description}</p>
      <CourseContent>
        <CourseInformation course={course} />
        <Mentor mentor={course?.extra?.tutor} />
        <Pricing price={course?.default_price} />
      </CourseContent>
    </section>
  );
};

const CourseContent = ({ children }) => {
  return <section className="flex flex-col py-2">{children}</section>;
};

const Mentor = ({ mentor }) => {
  return (
    <section className="sm:order-3">
      <p className="text-bold font-bold pb-0 my-3">Mentor:</p>
      <Author tutor={mentor} />
    </section>
  );
};

const CourseInformation = ({ course }) => {
  return (
    <div className="sm:order-2">
      <p className="text-bold font-bold pb-0 my-3">Informacion del curso:</p>
      <div className="flex flex-col gap-4 my-4">
        <p className=" flex gap-2 items-center ">
          <span className="">
            <Clock />
          </span>
          Duracion: 1hr 30m
        </p>
        <p className=" flex gap-2 ">
          <span>
            <Paper />
          </span>
          5 recursos descargables
        </p>
        <p className="flex gap-2 ">
          <span>
            <Loop />
          </span>
          Acceso de por vida
        </p>
        <p className="flex gap-2 ">
          <span>
            <Task />
          </span>
          Tareas
        </p>
      </div>
    </div>
  );
};

const Pricing = ({ price }) => {
  const [isBuy, setIsBuy] = useState(false);
  return (
    <div className="sm:order-1 sm:mb-7">
      <div className="pt-20 pb-5 sm:pt-0">
        <p className="font-extrabold text-4xl ">
          <span>$ {(price.unit_amount / 100).toFixed(2)}</span>
          <span className="text-xs">{price.currency.toUpperCase()}</span>
        </p>
      </div>
      <div>
        {isBuy ? (
          <button
            onClick={() => {
              Payment(price);
            }}
            className="border-2 border-primary bg-primary text-white w-full font-semibold px-3 py-4 hover:bg-white hover:text-primary"
          >
            Ver video
          </button>
        ) : (
          <button
            onClick={() => {
              Payment(price);
            }}
            className="border-2 border-primary bg-primary text-white w-full font-semibold px-3 py-4 hover:bg-white hover:text-primary"
          >
            Comprar
          </button>
        )}
      </div>
    </div>
  );
};

const Banner = ({ price }) => {
  return (
    <div className="border-t-2 border-gray-100 fixed w-full bottom-0 bg-white shadow-md flex justify-between items-center gap-2 py-2 px-4 md:hidden z-50">
      <div className="W-1/3 ">
        <p className="text-xl font-bold flex flex-col items-end">
          <span>$ {(price.unit_amount / 100).toFixed(2)}</span>
          <span className="text-xs">{price.currency.toUpperCase()}</span>
        </p>
      </div>
      <button
        onClick={() => {
          Payment(price);
        }}
        className="bg-primary text-white w-2/3 font-semibold px-4 py-4"
      >
        Comprar ahora
      </button>
    </div>
  );
};

const Temary = ({ temary }) => {
  return (
    <section className="flex flex-col gap-2 px-2 sm:px-0 my-12 py-1 ">
      <h2 className="text-2xl font-bold py-2">Contenido del curso</h2>
      <section className=" bg-white p-8">
        <div className="flex flex-col gap-5">
          {Object.keys(temary).map((key, index) => {
            return (
              <div key={"Temary" + key + index}>
                <details>
                  <summary className="p-5 border-2 shadow text-lg font-bold">
                    {key}
                  </summary>
                  <ol className="p-6 bg-gray-100">
                    {temary[key].map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center gap-2 my-3 text-md font-semibold"
                        >
                          <span>
                            <TemaryIcon color="#403BF9" />
                          </span>
                          <span className="">{item}</span>
                        </li>
                      );
                    })}
                  </ol>
                </details>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

const DescriptionSection = ({ course }) => {
  return (
    <section className="my-12 p-0">
      <Description descripcion={course.description} type="detail" />
    </section>
  );
};

const WraperCourseInfo = ({ children }) => {
  return (
    <section className="sm:max-w-[300px] sm:order-1 sm:w-2/6 sm:sticky sm:top-24 sm:border-4 sm:border-white bg-white sm:shadow-lg z-10">
      {children}
    </section>
  );
};
