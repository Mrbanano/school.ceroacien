import Head from "next/head";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import { CeroacienServerInstances } from "../../config/server";

import Author from "../../components/CourseInfo/Author";
import Clock from "../../components/Icon/Clock";
import Paper from "../../components/Icon/Paper";
import Task from "../../components/Icon/Task";
import Loop from "../../components/Icon/Loop";
import TemaryIcon from "../../components/Icon/TemaryIcon";
import { CourseInfo as Description } from "../../components/CourseInfo";
import Image from "next/image";
import Router from "next/router";

export default function index({ course }) {
  return (
    <>
      <Head>
        <title>{course.name}</title>
        <meta name="description" content={course.descripcion} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`relative max-w-screen-xl mx-auto sm:flex justify-evenly items-start sm:mt-14`}
      >
        <WraperCourseInfo>
          <HeroCourse media={course?.extra?.media} />
          <CourseInfo course={course} />
        </WraperCourseInfo>
        <Banner id={course.id} />
        <WrapperCourseContent>
          <HeaderCourse course={course} />
          <DescriptionSection course={course} />
          <Temary temary={course?.extra?.temary} />
        </WrapperCourseContent>
      </main>
    </>
  );
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

  let data = null;

  try {
    const resp = await CeroacienServerInstances("/courses/" + slug);
    data = resp.data;
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
    <section className="shadow-lg sm:max-w-[300px] sm:order-1 sm:w-2/6 sm:sticky sm:top-24 sm:border-4 sm:border-white bg-white sm:shadow-lg z-10">
      {children}
    </section>
  );
};

const HeaderCourse = ({ course }) => {
  return (
    <section className="shadow-lg bg-white hidden px-12 py-6 sm:flex sm:flex-col gap-8  z-0">
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
          Duracion: {course?.Duration}
        </p>
        <p className=" flex gap-2 ">
          <span>
            <Paper />
          </span>
          {course?.Resourses} recursos descargables
        </p>
        <p className="flex gap-2 ">
          <span>
            <Loop />
          </span>
          {course?.FeedBack}
        </p>
        <p className="flex gap-2 ">
          <span>
            <Task />
          </span>
          {course?.Task}
        </p>
      </div>
    </div>
  );
};

const Pricing = ({ id }) => {
  return (
    <div className="sm:order-1 sm:mb-7">
      <div className="pt-20 pb-5 sm:pt-0"></div>
      <div>
        <a className=" hidden sm:block sm:w-full">
          <button
            onClick={() => {
              Router.push("/clases/" + id);
            }}
            className="w-full p-[9px] lg:p-3  border-2 rounded-lg font-bold text-sm bg-primary text-white md:text-lg   hover:text-white hover:font-black hover:border-primary transition duration-150 ease-out hover:ease-in "
          >
            ir a clases
          </button>
        </a>
      </div>
    </div>
  );
};

const Banner = ({ id }) => {
  return (
    <div className=" border-t-2 border-gray-100 fixed w-full bottom-0 bg-white shadow-md flex justify-between items-center gap-2 py-2 px-4 md:hidden z-50">
      <button
        onClick={() => {
          Router.push("/clases/" + id);
        }}
        className="bg-primary h-12 text-white w-full font-semibold "
      >
        ir a clases
      </button>
    </div>
  );
};

const Temary = ({ temary }) => {
  return (
    <section className=" flex flex-col gap-2 px-2 sm:px-0 my-12 py-1 ">
      <h2 className="text-2xl font-bold py-2">Contenido del curso</h2>
      <section className=" bg-white p-8 shadow-lg">
        <div className="flex flex-col gap-5">
          {Object.keys(temary).map((key, index) => {
            return (
              <div key={"Temary" + key + index}>
                <details open>
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
    <section className="my-12 p-0 border-2 shadow-lg">
      <Description descripcion={course.description} type="detail" />
    </section>
  );
};
