import Head from "next/head";
import React, { useState } from "react";
import { authOptions } from "../api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import { CeroacienInstances } from "../../config";

import Author from "../../components/CourseInfo/Author";
import Clock from "../../components/Icon/Clock";
import Paper from "../../components/Icon/Paper";
import Task from "../../components/Icon/Task";
import Loop from "../../components/Icon/Loop";
import TemaryIcon from "../../components/Icon/TemaryIcon";
import { CourseInfo as Description } from "../../components/CourseInfo";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { getCourseDetail } from "../../utils/getCourseDetail";

export default function index({ course }) {
  return <p>{JSON.stringify(course)}</p>;
}

const getRedirect = (url) => {
  return url.split("/").join("%2F");
};

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  const url = getRedirect(context.resolvedUrl);
  const slug = context.resolvedUrl.split("/")[2];
  try {
    const { data } = await CeroacienInstances("/api/v0/courses/" + slug);
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=${url}`,
        permanent: false,
      },
    };
  }

  if (!data.product) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      course: data.product,
    },
  };
}

const WrapperCourseContent = ({ children }) => {
  return (
    <section className="sm:w-4/6 relative min-h-screen">{children}</section>
  );
};

const WraperCourseInfo = ({ children }) => {
  return (
    <section className="sm:max-w-[300px] sm:order-1 sm:w-2/6 sm:sticky sm:top-24 sm:border-4 sm:border-white bg-white sm:shadow-lg z-10">
      {children}
    </section>
  );
};

const HeaderCourse = ({ course }) => {
  return (
    <section className="bg-white hidden px-12 py-6 sm:flex sm:flex-col gap-8  z-0">
      <h1 className="text-5xl font-semibold ">{course.name}</h1>
      <p className="font-light text-xl ">{course.description}</p>
      <Mentor mentor={course?.extra?.tutor} />
    </section>
  );
};

const HeroCourse = ({ media, type = "video" }) => {
  return (
    <section className=" aspect-video">
      {type === "video" ? (
        <iframe
          loading="lazy"
          src={media}
          width="100%"
          height="100%"
          scrolling="no"
        ></iframe>
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

const CourseInfo = ({ course, handleCloseModal, show }) => {
  return (
    <section className="flex flex-col gap-2 px-[2.4rem] py-4 sm:px-3">
      <h1 className="text-2xl font-semibold sm:hidden">{course.name}</h1>
      <p className="font-light text-base sm:hidden">{course.description}</p>
      <CourseContent>
        <CourseInformation course={course} />
        <Mentor mentor={course?.extra?.tutor} />
        <Pricing
          id={course.id}
          price={course?.default_price}
          handleCloseModal={handleCloseModal}
          show={show}
          Status={course?.metadata?.Status}
        />
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

const Pricing = ({ id, price, handleCloseModal, show, Status }) => {
  //Custom Hook

  const [isBuy, setIsBuy] = useState(true);

  return (
    <div className="sm:order-1 sm:mb-7">
      <div className="pt-20 pb-5 sm:pt-0"></div>
      <div>
        {!isBuy && (
          <a className=" hidden sm:block sm:w-full">
            <button
              onClick={() => {
                handleCloseModal(show);
              }}
              className="w-full p-[9px] lg:p-3  border-2 rounded-lg font-bold text-sm bg-primary text-white md:text-lg   hover:text-white hover:font-black hover:border-primary transition duration-150 ease-out hover:ease-in "
            >
              Comprar ahora
            </button>
          </a>
        )}
        {isBuy && Status == "Preventa" && (
          <a className=" hidden sm:block sm:w-full">
            <button className="w-full p-[9px] lg:p-3  border-2 rounded-lg font-bold text-sm bg-primary text-white md:text-lg   hover:text-white hover:font-black hover:border-primary transition duration-150 ease-out hover:ease-in ">
              Proximamente
            </button>
          </a>
        )}
        {isBuy && Status !== "Preventa" && (
          <a className=" hidden sm:block sm:w-full">
            <button
              onClick={() => {
                Router.push("/clases/" + id);
              }}
              className="w-full p-[9px] lg:p-3  border-2 rounded-lg font-bold text-sm bg-primary text-white md:text-lg   hover:text-white hover:font-black hover:border-primary transition duration-150 ease-out hover:ease-in "
            >
              Ver curso
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

const Banner = ({ handleCloseModal, show }) => {
  return (
    <div className="border-t-2 border-gray-100 fixed w-full bottom-0 bg-white shadow-md flex justify-between items-center gap-2 py-2 px-4 md:hidden z-50">
      <div className="W-1/3 "></div>
      <button
        onClick={() => {
          handleCloseModal(show);
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

/**
 * <>
    
      <Head>
        <title>{course.name}</title>
        <meta name="description" content={course.descripcion} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`${
          showModal ? "max-h-[75vh] overflow-hidden" : ""
        }  relative max-w-screen-xl mx-auto sm:flex justify-evenly items-start sm:mt-14`}
      >
        {Loading ? (
          <p>Cargando...</p>
        ) : (
          <>
            {/*<WraperCourseInfo>
              <HeroCourse media={course?.extra?.media} />
              <CourseInfo
                course={course}
                handleCloseModal={handleCloseModal}
                show={showModal}
              />
            </WraperCourseInfo>
            <Banner
              id={course.id}
              price={course?.default_price}
              handleCloseModal={handleCloseModal}
              show={showModal}
            />
            <WrapperCourseContent>
              <HeaderCourse course={course} />
              <>
                <DescriptionSection course={course} />
                <Temary temary={course?.extra?.temary} />
              </>
        </WrapperCourseContent>}
          </>
        )}
      </main>
    </>
  /*
    <>
 */
