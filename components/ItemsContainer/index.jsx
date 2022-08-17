import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Payment } from "../../utils/Payment";

const Header = ({ label, text }) => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <p className="font-bold text-xs text-yellow-500 px-3 py-1 md:text-sm">
        {label.toUpperCase()}
      </p>
      <h3 className="my-5 mb-9 font-bold text-xl text-center text-slate-700 md:text-3xl">
        {text}
      </h3>
    </div>
  );
};

const ErrorMessage = ({ Error }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-bold text-xs text-red-500 px-3 py-1 md:text-sm">
        {Error}
      </p>
    </div>
  );
};

const CardBootcamp = ({ item }) => {
  const course = item;
  return (
    <article className="flex flex-col justify-between gap-1 md:gap-4  w-full md:max-w-40 p-2 border-2  rounded-2xl cursor-pointer transition ease-in-out hover:scale-105 transform-gpu duration-300 hover:border-yellow-300 hover:shadow-md">
      <header className=" rounded-md md:rounded-2xl overflow-hidden relative">
        <span className="absolute text-xs top-1 left-1 md:top-4 md:left-6 md:text-3xl font-bold z-50">
          {course.title}
        </span>
        <div className=" h-[120px] md:h-[300px]">
          <Image
            className="w-full border-2 border-blue-500"
            src={course.image}
            alt={course.title}
            width={"100%"}
            height={"50%"}
            layout={"fill"}
            objectFit="cover"
          />
        </div>
      </header>
      <div className="flex p-0 m-0 flex-col md:p-2 ">
        <h3 className="p-0  md:pt-3 font-bold w-full text-md md:text-3xl">
          {course.title}
        </h3>
        <p className="text-xs font-light text-left my-2 md:text-base">
          {course.description}
        </p>
      </div>
      <Link href="/inicia-aqui-regristrandote">
        <a className="text-center w-full p-2 rounded-md font-bold text-sm bg-yellow-300 text-black md:py-2 md:text-lg ">
          Registrate ahora
        </a>
      </Link>
    </article>
  );
};

const CardCourse = (props) => {
  console.log("props", props);

  const item = props.item;
  const Status = item.metadata.Status;
  return (
    <>
      <section className=" hidden md:flex bg-white  md:w-[95%] md:h-[400px] m-4 md:m-6 shadow-lg rounded-lg overflow-hidden justify-around p-2 ">
        <div className=" h-[100%] w-3/6 relative">
          <p className="absolute top-0  left-0  px-3 bg-blue-400 text-xs sm:text-sm text-white font-medium">
            {Status}
          </p>
          <div className="h-[60px] sm:h-[300px]  bg-white">
            <h2 className="text-sm mt-3 sm:h-2/6 border-2 border-transparent font-semibold overflow-hidden p-2 md:text-3xl md:p-4 ">
              {item.name}
            </h2>
            <p className="hidden sm:block sm:h-2/6 px-1 text-xs font-light text-left my-2 md:text-base md:p-4">
              {item.description}
            </p>
          </div>
          <div className="flex p-1 gap-5 flex-row  ">
            <Link href={`/course/${item.id}`}>
              <a className="w-full ">
                <button className=" w-full border-2 p-[9px] lg:p-3  rounded-lg font-bold text-xs  border-primary text-primary   md:text-lg hover:bg-primary hover:text-white  transition duration-150 ease-out hover:ease-in">
                  Mas información
                </button>
              </a>
            </Link>
            <a className=" hidden sm:block sm:w-full">
              <button
                onClick={() => {
                  props.setSelectedItem(item);
                  props.setShowModal(true);
                }}
                className="w-full p-[9px] lg:p-3  border-2 rounded-lg font-bold text-sm bg-primary text-white md:text-lg   hover:text-white hover:font-black hover:border-primary transition duration-150 ease-out hover:ease-in "
              >
                Comprar ahora
              </button>
            </a>
          </div>
        </div>
        <div className="h-[100%] w-2/6 grid place-items-center md:p-10 p-1  relative">
          <Image
            className="w-full "
            src={item.images[0]}
            alt={item.name}
            width={"90%"}
            height={"90%"}
            layout={"fill"}
            objectFit="cover"
          />
        </div>
      </section>
      <section className=" my-4 p-2 md:hidden w-[90%] mx-auto h-[550px] flex flex-col justify-between bg-white rounded-2xl overflow-hidden shadow-2xl">
        <div className=" h-3/6 p-3">
          <div className="h-full relative grid place-content-center">
            <Image
              className="w-full"
              src={item.images[0]}
              alt={item.name}
              layout={"fill"}
              objectFit="contain"
            />
          </div>
        </div>
        <div className=" h-2/6">
          <div className=" h-full">
            <h2 className="text-sm mt-3 sm:h-2/6 border-2 border-transparent font-semibold overflow-hidden p-2 md:text-3xl md:p-4 ">
              {item.name}
            </h2>
            <p className=" sm:block sm:h-2/6 px-1 text-xs font-light text-left my-2 md:text-base md:p-4">
              {item.description}
            </p>
          </div>
        </div>
        <div className="min-h-1/6 ">
          <div className="flex flex-col gap-3 h-full ">
            <button
              onClick={() => {
                props.setSelectedItem(item);
                props.setShowModal(true);
              }}
              className="w-full border-2 p-4 rounded-lg font-bold text-sm bg-primary text-white md:text-lg "
            >
              Comprar ahora
            </button>
            <Link href={`/course/${item.id}`}>
              <a className="">
                <button className="w-full border-2 p-4 rounded-lg font-bold text-sm  border-primary text-primary   md:text-lg ">
                  Mas información
                </button>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default function index({
  Items,
  Error,
  label,
  text,
  type = "bootcamp",
  setSelectedItem,
  setShowModal,
  showModal,
}) {
  return (
    <section className="p-5 flex flex-col gap-6 ">
      <Header label={label} text={text} />
      {Error && <ErrorMessage Error={Error} />}
      {type == "courses" && (
        <CardCourseWrapper
          TopsCourses={Items}
          setShowModal={setShowModal}
          show={showModal}
          setSelectedItem={setSelectedItem}
        ></CardCourseWrapper>
      )}
      {Items && (
        <div className=" grid  grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
          {Items.map((course, index) => {
            if (type === "bootcamp") {
              return <CardBootcamp item={course} key={index} />;
            }
          })}
        </div>
      )}
    </section>
  );
}

const CardCourseWrapper = (props) => {
  const Items = props.TopsCourses.slice(0, 5);

  const [Step, setStep] = useState(0);
  const [CourseActive, setCourseActive] = useState(Items[Step]);

  const next = () => {
    if (Step < Items.length - 1) {
      setStep(Step + 1);
      setCourseActive(Items[Step + 1]);
    }

    if (Step === Items.length - 1) {
      setStep(0);
      setCourseActive(Items[0]);
    }
  };

  const prev = () => {
    if (Step > 0) {
      setStep(Step - 1);
      setCourseActive(Items[Step - 1]);
    }
    if (Step === 0) {
      setStep(Items.length - 1);
      setCourseActive(Items[Items.length - 1]);
    }
  };

  return (
    <section className="m-0 p-0  w-full  max-w-[1200px] mx-auto relative ">
      <Link href={"/course"}>
        <p className="text-right py-2 md:px-10 px-5 font-semibold text-primary hover:underline">
          Ver todos los cursos
        </p>
      </Link>
      <div>
        <CardCourse item={CourseActive} {...props} />
      </div>
      <a
        onClick={prev}
        className="absolute left-[20px] md:left-[-30px] top-1/2 p-4 -translate-y-1/2 bg-black/5 hover:bg-black/8 text-white hover:text-primary cursor-pointer"
      >
        ❮
      </a>
      <a
        onClick={next}
        className="absolute right-[20px] md:right-[-30px] top-1/2 p-4 -translate-y-1/2 bg-black/5 hover:bg-black/8 text-white hover:text-primary cursor-pointer"
      >
        ❯
      </a>
      <div className="h-4 flex justify-center items-center space-x-5 ">
        {Items.map((item, index) => (
          <div
            key={"point" + index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              Step === index ? "bg-primary" : " bg-black/30"
            } `}
          ></div>
        ))}
      </div>
    </section>
  );
};
