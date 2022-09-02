import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { CeroacienInstances } from "../../config";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function index() {
  //custom hook
  const [course, setcourse] = useState([]);
  const [program, setprogram] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterCourse, setFilterCourse] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [tags, setTags] = useState([
    "Todos los cursos",
    "Python",
    "JavaScript",
  ]);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await CeroacienInstances("/courses");
        const products = data.data.filter(
          (item) => item.metadata.bootcamp === "true"
        );
        const courses = data.data.filter(
          (item) => item.metadata.bootcamp !== "true"
        );
        setcourse(courses);
        setFilterCourse(courses);
        setprogram(products);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setcourse([]);
      }
    })();
  }, []);

  const Search = ({ target }) => {
    const search = target.outerText;
    if (search === "Todos los cursos") {
      setFilterCourse(course);
      return;
    }
    const filteredCouse = course.filter((course) => {
      return course.metadata.topic.includes(search);
    });
    setFilterCourse(filteredCouse);
  };

  const Filter = ({ target }) => {
    const search = target.value.trim().toLowerCase();
    const filteredCouses = course.filter((course) => {
      return course.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilterCourse(filteredCouses);
  };

  return (
    <>
      <Head>
        <title>
          Todos los cursos | Ceroacien | acelera tu carrera profesional
        </title>
        <meta
          name="description"
          content="Aqui encontraras los modulos que te ayudaran a aprender habilidades de esta industrica tecnologica"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-4 w-full max-w-7xl md:mx-auto flex mt-10">
        <aside className="hidden w-0 md:block md:w-3/12 mr-4">
          <div className="h-[80px] "></div>
          <SearchBar Filter={Filter} />
          <TagsSection
            tags={tags}
            isOpen={isOpen}
            toggle={toggle}
            Search={Search}
          />
        </aside>
        <section className="w-full md:w-9/12">
          <BannerTest />
          <SearchBar Filter={Filter} isMobile={true} />
          <CourseGrid
            filterCourse={filterCourse}
            isLoading={isLoading}
            title={"Todos los cursos"}
            type={"course"}
          />
          <CourseGrid
            filterCourse={program}
            isLoading={isLoading}
            title={"Todos los programas"}
            type={"programa"}
          />
        </section>
      </main>
    </>
  );
}

const TagsSection = ({ tags, isOpen, toggle, Search }) => {
  return (
    <div className="my-4">
      <details open>
        <summary
          className="p-3 text-xl flex justify-between "
          style={{
            paddingLeft: "0",
            backgroundImage: "none",
            webkitAppearance: "none",
          }}
        >
          <h2 className="font-semibold text-2xl text-left">Lenguajes</h2>
          <div
            className={`${
              isOpen ? "rotate-0" : "rotate-180"
            } transition duration-200 ease-out `}
            onClick={toggle}
          >
            <svg
              width={30}
              height={30}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="m15 10 8.75 10H6.25L15 10Z"
                fill="#000"
              />
            </svg>
          </div>
        </summary>
        <div className=" my-6">
          <ul>
            {tags.map((tag) => (
              <li
                className="text-lg  font-medium border-2 border-transparent py-2 pl-4 hover:text-primary"
                onClick={Search}
                key={"filtrar por" + tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </details>
    </div>
  );
};

const SearchBar = ({ Filter, isMobile }) => {
  const Mobile = "md:hidden";
  const Desktop = "hidden md:block";

  return (
    <>
      <form className={`${isMobile ? Mobile : Desktop} my-6 md:pb-5 md:pr-2`}>
        <label
          forhtml="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Buscar
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""
            required
            onChange={Filter}
          />
        </div>
      </form>
    </>
  );
};

const BannerTest = () => {
  return (
    <section
      className=" md:top-24 z-30 my-6 w-full h-[80px] max-w-[936px]  grid place-content-center "
      style={{
        backgroundImage: 'url("https://i.postimg.cc/658YCdSs/Frame-16.png")',
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <p className="p-3  md:text-xl flex flex-col md:flex-row  items-center  gap-3 text-black font-semibold">
        ¿No estás seguro por dónde empezar ?
        <Link href="cuales-cursos-son-para-mi">
          <a className="border-2 border-transparent  p-1 text-primary underline hover:border-2 hover:border-primary">
            Haz nuestro cuestionario
          </a>
        </Link>
      </p>
    </section>
  );
};

const CourseGrid = ({ filterCourse, isLoading, title, type }) => {
  const course = filterCourse;
  const courseLoading = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div>
        <h2 className="font-semibold text-3xl">{title}</h2>
      </div>
      {!isLoading && filterCourse.length === 0 && (
        <div className="grid h-[45vh] m-2  my-10  place-content-center">
          <div className="flex flex-col">
            <Empty />
            <p>Aun no tenemos ese curso</p>
          </div>
        </div>
      )}
      {isLoading && (
        <div className="grid min-h-[50vh] grid-cols-1 md:grid-cols-3 gap-5  py-10">
          {courseLoading.map((item, index) => (
            <CourseItemLoading key={"course" + index} course={item} />
          ))}
        </div>
      )}
      {!isLoading && filterCourse.length > 0 && (
        <motion.div
          layout
          className="grid grid-cols-1 min-h-[50vh] md:grid-cols-3 gap-5 py-10"
        >
          {course.map((item) => (
            <CourseItem key={"loading " + item.id} course={item} type={type} />
          ))}
        </motion.div>
      )}
    </>
  );
};

const Empty = (props) => {
  return (
    <svg
      width={200}
      height={105}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          d="M100.724.084c-27.715 1.764-48.445 26.152-45.727 53.79l.03.302a.048.048 0 0 0 .03.04c23.207 9.64 46.476 10.328 69.707 6.583 12.708-2.048 21.318-14.191 18.862-26.827l-.112-.592c-3.728-20.332-22.159-34.61-42.79-33.296Z"
          fill="#A3A1F1"
        />
        <path
          d="m112.761 30.325-.006 1.978c-.006-.65-.006-1.31-.006-1.978 0-.185 0-.373.003-.563.003-.654.006-1.313.015-1.981l-.006 1.98v.564ZM100.887 86.8c-4.283-.026-9.652-.253-16.342-.534-5.086-.211-10.935-.456-17.655-.665-61.957.758-51.276 11.377-52.37-51.651.059.718.114 1.445.166 2.18 1.82 26.024 23.62 46.032 49.707 45.85 6.712-.047 13.423.037 20.134.254 4.134.128 8.263.31 12.387.546 1.88.104 3.757.22 5.634.349.026 0 .052 0 .078-.003a10.557 10.557 0 0 0 10.255-10.619 3599.333 3599.333 0 0 1-.126-40.204c.021 3.675.126 7.105.284 10.311.125 2.497.28 4.857.465 7.081 2.586 31.904 9.754 37.246-12.617 37.105Z"
          fill="#000"
        />
        <path
          d="M75.756 47.063c-6.254-1.109-11.108 1.475-15.17 6.03 5.222-.445 11.73-2.787 15.17-6.03ZM13.04 34.448c31.241-3.75 64.04-2.053 94.874-7.877-18.44-.946-41.08-3.954-61.073-4.12-10.698 7.973-21.776 8.136-33.8 11.997Z"
          fill="#000"
        />
        <path
          d="M129.906 6.115c-.036 7.143-.236 12.467-1.274 16.285a13.158 13.158 0 0 1-1.506 3.6c-2.324 3.672-6.577 4.868-14.365 4.326h-.012c-2.332-.165-4.981-.48-7.988-.937 2.989.236 5.647.373 7.991.373h.009c6.103-.003 10.1-.958 12.393-3.66a9.292 9.292 0 0 0 1.832-3.603c.909-3.254.817-7.82-.066-14.109a701.766 701.766 0 0 0-79.09.537C33.495 11.89 13.347 7.281 2.096 16.8c-.024.09-.045.179-.066.271-.999 4.271-.817 12.468 2.795 15.218-4.304-2.404-6.383-9.673-3.475-15.495 2.383-4.773 8.122-8.57 18.732-7.916C56.236 3.335 93.424 2.64 129.906 6.115Z"
          fill="#000"
        />
        <path
          d="M4.825 32.288a6.385 6.385 0 0 0 5.2.468c-2.226.794-3.926.502-5.2-.468ZM182.855 47.923l-.006 1.978c-.006-.65-.006-1.31-.006-1.978 0-.184 0-.372.003-.563.003-.654.006-1.313.015-1.98-.003.658-.003 1.317-.006 1.98v.563ZM136.984 103.2c-46.498.569-52.085 6.69-52.44-16.934a220.544 220.544 0 0 1-.017-4.032c4.134.128 8.263.31 12.387.546a49.59 49.59 0 0 0 37.573 16.799c12.731-.09 25.449.293 38.155 1.148l.078-.003a10.558 10.558 0 0 0 10.255-10.619c-.12-13.404-.161-26.806-.126-40.204.379 61.244 23.224 55.449-45.865 53.299Z"
          fill="#000"
        />
        <path
          d="M145.85 64.66c-6.253-1.107-11.108 1.477-15.17 6.032 5.222-.446 11.729-2.788 15.17-6.031ZM178.008 44.168c-20.962 3.961-42.832 4.444-64.504 5.527l-.749.036c-.006-2.315-.009-4.63-.009-6.947a6.69 6.69 0 0 0 .292-.17 39.56 39.56 0 0 0 3.896-2.565c19.993.167 42.635 3.174 61.074 4.12Z"
          fill="#000"
        />
        <path
          d="M200 23.713c-.102 19.283-1.378 25.311-17.145 24.21h-.012c-2.332-.164-4.981-.48-7.988-.936 2.989.235 5.647.373 7.991.373h.009c13.175-.006 16.536-4.445 14.159-21.372-23.265-1.136-46.605-1.163-69.888.012-.656.03-1.316.066-1.972.102a9.306 9.306 0 0 0 1.832-3.603c.549-.033 1.097-.069 1.646-.099A460.43 460.43 0 0 1 200 23.713Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h200v104.402H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

const CourseItem = ({ course, type }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={CardVariants}
    >
      <Link key={"course" + course.name} href={`/${type}/${course.id}`}>
        <div className="border-2 border-black h-[180px] p-4 flex flex-col justify-between bg-white hover:border-primary">
          <div className="">
            <p className="font-light text-sm">
              {type === "course" ? "Curso" : "Programa"}
            </p>
            <h2 className="font-bold text-lg md:text-sm my-3">{course.name}</h2>
          </div>
          <div className="flex justify-end">
            {type === "courses" ? (
              <p className="text-xs">Lenguaje: {course.metadata.topic}</p>
            ) : null}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const CardVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  hidden: { opacity: 0, scale: 1 },
};

const CourseItemLoading = ({ course }) => {
  return (
    <div
      key={"course" + course.name}
      className="animate-pulse  border-2 border-black h-[180px] p-4 flex flex-col justify-between bg-white hover:border-primary"
    >
      <div className="">
        <p className=" bg-slate-200 w-[50px] h-[17px] rounded-xl my-3"></p>
        <h2 className=" bg-slate-200 w-full h-[17px] rounded-xl py-3"></h2>
      </div>
      <div className="flex justify-end">
        <p className=" bg-slate-200 w-[130px] h-[17px] rounded-xl"></p>
      </div>
    </div>
  );
};
