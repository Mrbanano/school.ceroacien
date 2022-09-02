import Head from "next/head";
import React, { useEffect, useState } from "react";

import Author from "../../components/CourseInfo/Author";
import Clock from "../../components/Icon/Clock";
import Paper from "../../components/Icon/Paper";
import Task from "../../components/Icon/Task";
import Loop from "../../components/Icon/Loop";
import TemaryIcon from "../../components/Icon/TemaryIcon";
import { CourseInfo as Description } from "../../components/CourseInfo";
import SEO from "../../components/SEO";

import Image from "next/image";

import Router, { useRouter } from "next/router";
import { getProgramDetail } from "../../utils/getProgramDetails";
import ModalPayment from "../../components/ModalPayment";

import { CheckIfCourseIsBuy } from "../../utils/checkIfCourseIsBuy";
import { useSession } from "next-auth/react";

import { useCountdown } from "../../hook/useCountdown";
import { motion } from "framer-motion";

import bg from "../../public/img/bg-2.png";

const Coupon = {
  Natalia: {
    Value: 0.85,
    Name: "Natalia",
  },
};

export default function index() {
  const [Loading, setLoading] = useState(true);
  const [course, setCourse] = useState({});
  const { asPath } = useRouter();
  const couponUrl = asPath?.split("?")[1]?.split("=")[1];
  const id = asPath.split("/")[2];
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    (async () => {
      if (id === "[slug]") return;
      setLoading(true);
      const data = await getProgramDetail(id);
      console.log(data?.default_price?.unit_amount);
      if (couponUrl) {
        if (Coupon[couponUrl]) {
          data.default_price.unit_amount =
            data.default_price.unit_amount * Coupon[couponUrl].Value;
          data.default_price.unit_amount_decimal =
            data.default_price.unit_amount_decimal * Coupon[couponUrl].Value;
          data.default_price.coupon = couponUrl;
        }
      }
      setCourse(data);
      setLoading(false);
    })();
  }, [id]);

  return (
    <>
      <Head>
        <title>
          {course.name} | ceroacien | potencia tu carrera profesional
        </title>
        <meta name="description" content={course.descripcion} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SEO
        url={"https://ceroacienweb-gilt.vercel.app/" + asPath}
        description={course.descripcion}
        title={course.name}
        img
      />
      {!Loading && (
        <ModalPayment
          show={showModal}
          handleCloseModal={handleCloseModal}
          course={course}
        />
      )}
      {Loading ? null : <CountDown date={course?.extra?.StartDate} />}
      <main
        className={`${
          showModal ? "max-h-[75vh] overflow-hidden" : ""
        }  relative max-w-screen-xl mx-auto sm:flex justify-evenly items-start sm:mt-14`}
      >
        {Loading ? (
          <p>Cargando...</p>
        ) : (
          <>
            <WraperCourseInfo>
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

const WraperCourseInfo = ({ children }) => {
  return (
    <section className="sm:max-w-[300px] sm:order-1 sm:w-2/6 sm:sticky sm:top-52 sm:border-4 sm:border-white bg-white sm:shadow-lg z-10">
      {children}
    </section>
  );
};

const HeaderCourse = ({ course }) => {
  return (
    <section className="bg-white hidden px-12 py-6 sm:flex sm:flex-col gap-8  z-0">
      <h1 className="text-5xl font-semibold ">{course.name}</h1>
      <p className="font-light text-xl ">{course.description}</p>
    </section>
  );
};

const CountDown = ({ date }) => {
  const [days, hours, minutes, seconds] = useCountdown(date);

  return (
    <>
      {days + hours + minutes + seconds <= 0 ? null : (
        <section className="rounded-lg p-2 overflow-hidden sticky top-16  md:top-28 z-50  w-full max-w-7xl mx-auto my-0 md:my-4  grid place-content-center bg-white">
          <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
          <motion.div
            initial={{ y: 0, z: 0 }}
            animate={{
              y: -400,
              z: 0,
              transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 75,
                ease: "linear",
              },
            }}
            style={{
              backgroundImage: `url("${bg.src}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="absolute w-full h-[240px] z-0"
          ></motion.div>
        </section>
      )}
    </>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex gap-3 items-center  z-50  w-full h-full ">
      <DateTimeDisplay value={days} type={"Dias"} />
      <p className="border-[0.5px] border-black/50 h-[35%]"></p>
      <DateTimeDisplay value={hours} type={"Horas"} />
      <p className="border-[0.5px] border-black/50 h-[35%]"></p>
      <DateTimeDisplay value={minutes} type={"Minutos"} />
      <p className="border-[0.5px] border-black/50 h-[35%]"></p>
      <DateTimeDisplay value={seconds} type={"Segundos"} />
    </div>
  );
};

const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className="flex flex-col text-center">
      <p className="border-2 border-transparent p-1 text-2xl font-semibold">
        {value}
      </p>
      <span className="text-xs font-thin">{type}</span>
    </div>
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

const CourseInfo = ({ course, handleCloseModal, show }) => {
  return (
    <section className="flex flex-col gap-2 px-[2.4rem] py-4 sm:px-3">
      <h1 className="text-2xl font-semibold sm:hidden">{course.name}</h1>
      <p className="font-light text-base sm:hidden">{course.description}</p>
      <CourseContent>
        <CourseInformation course={course} />
        <Pricing
          id={course.id}
          price={course?.default_price}
          handleCloseModal={handleCloseModal}
          show={show}
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
          Duracion: 2 meses
        </p>
        <p className=" flex gap-2 ">
          <span>
            <Paper />
          </span>
          Recursos descargables.
        </p>
        <p className="flex gap-2 ">
          <span>
            <Loop />
          </span>
          Feedback continuo.
        </p>
        <p className="flex gap-2 ">
          <span>
            <Task />
          </span>
          Tareas, retos y proyectos
        </p>
      </div>
    </div>
  );
};

const Pricing = ({ id, price, handleCloseModal, show }) => {
  //Custom Hook
  const { data: session, status } = useSession();
  const [isBuy, setIsBuy] = useState(false);
  useEffect(() => {
    (async () => {
      if (status === "loading") return;
      try {
        const state = await CheckIfCourseIsBuy(session.user.email, id);
        setIsBuy(state);
      } catch (error) {
        setIsBuy(false);
      }
    })();
  }, [id]);
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
              Router.push("/clases/" + id);
            }}
            className="border-2 border-primary bg-primary text-white w-full font-semibold px-3 py-4 hover:bg-white hover:text-primary"
          >
            Ver curso
          </button>
        ) : (
          <button
            onClick={() => {
              handleCloseModal(show);
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

const Banner = ({ id, price, handleCloseModal, show }) => {
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
    <section className="my-12 p-0">
      <Description descripcion={course.description} type="detail" />
    </section>
  );
};
