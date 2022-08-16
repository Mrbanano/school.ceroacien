import React, { useEffect, useState } from "react";
//import Loading from "../components/Loading";
//import ErrorMessage from "../components/ErrorMessage";
import Link from "next/link";
import { CeroacienInstances } from "../config";
import Head from "next/head";
import { getContentProfile } from "../utils/getContentProfile";
import { useSession } from "next-auth/react";
import Redirect from "../components/Redirect";
import Spinner from "../components/Spinner";

export default function Profile() {
  const { data: session, status } = useSession();
  const [user, setuser] = useState(session?.user);
  const isLoading = status === "loading";

  return (
    <>
      {isLoading && (
        <div className="h-screen w-screen grid place-content-center">
          <Spinner />
        </div>
      )}
      {status === "authenticated" && (
        <>
          <Head>
            <title>
              {user?.name} | Ceroacien | acelera tu carrera profesional
            </title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            {user && !isLoading && (
              <>
                <Header />
                <Banner />
                <Wrapper>
                  <section className="flex flex-col md:flex-row  bg-white md:bg-transparent ">
                    <div className="h-full w-full md:w-3/12 md:sticky md:top-56 md:h-[300px] z-50 ">
                      <ProfileCard user={user} />
                    </div>
                    <div className="w-full md:w-6/12 my-30 ">
                      <WraperCourse />
                      <div className="h-[50px] w-full"></div>
                    </div>
                    <div className="hidden w-0 md:block h-full  md:w-3/12 sticky top-40">
                      <Newletter />
                    </div>
                  </section>
                </Wrapper>
              </>
            )}
          </main>
        </>
      )}
      {status === "unauthenticated" && <Redirect href="/" />}
    </>
  );
}

const Banner = () => {
  return (
    <nav
      className="hidden md:block h-[50px] w-full"
      style={{ background: "#ECEBEE" }}
    >
      <Wrapper>
        <section className="hidden md:flex h-[50px] w-full md: items-center">
          <div className=" h-full w-3/12"></div>
          <div className=" h-ful w-6/12 flex items-center">
            <p className="text-3xl font-semibold tracking-wide p-3">
              Tus <span className="text-primary">cursos</span>
            </p>
          </div>
          <div className="h-full w-3/12"></div>
        </section>
      </Wrapper>
    </nav>
  );
};

const Newletter = () => {
  return (
    <section className="sticky top-40">
      <aside className="p-5 m-5 shadow-2xl rounded-xl sticky top-40 border-4 border-white bg-white z-10  max-h-[380px]">
        <div className="grid place-content-center relative">
          <Paper />
        </div>
        <h3 className="text-xl  my-3 text-center font-semibold">
          Todo un nuevo que viene
        </h3>
        <ul className="">
          <li className="text-gray-400 font-light text-sm my-2">
            - progreso del curso{" "}
          </li>
        </ul>
      </aside>
    </section>
  );
};

const Wrapper = ({ children }) => {
  return (
    <section className=" bg-white sm:bg-transparent mx-auto max-w-7xl">
      {children}
    </section>
  );
};

const ProfileCard = ({ user }) => {
  return (
    <WraperProfileInfo>
      <section className="m-6 flex flex-col items-center gap-7">
        <div className=" rounded-full overflow-hidden w-[50%] h-[50%] sm:w-[30%] sm:h-[30%]  lg:w-[75%] lg:h-[75%]">
          <img
            src={user.image}
            alt="Profile"
            className="aspect-square w-full h-full "
            decode="async"
            data-testid="profile-picture"
          />
        </div>
        <div className="">
          <div className="flex  items-center justify-between">
            <h1 className="font-semibold capitalize text-2xl max-h-[35px] overflow-hidden">
              {user.name}
            </h1>
            <div className="border-2 border-transparent w-[20px] h-[20px] m-1 grid place-content-center">
              {user.email_verified ? <Check /> : <Unckeck />}
            </div>
          </div>
          <p className="text-gray-400 font-light text-sm  my-2">{user.email}</p>
        </div>
      </section>
    </WraperProfileInfo>
  );
};

const Check = () => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#a)" fill="#403BF9">
      <path d="m19.557 11.167-.376-.515a1.234 1.234 0 0 1-.013-1.435l.368-.519a1.23 1.23 0 0 0-.425-1.794l-.56-.303a1.233 1.233 0 0 1-.633-1.287l.106-.63a1.227 1.227 0 0 0-1.16-1.43l-.639-.029a1.228 1.228 0 0 1-1.128-.887l-.175-.613a1.226 1.226 0 0 0-1.668-.784l-.584.253a1.227 1.227 0 0 1-1.402-.31l-.425-.475a1.23 1.23 0 0 0-1.844.013l-.417.482a1.231 1.231 0 0 1-1.393.33L6.6.995a1.23 1.23 0 0 0-1.655.813l-.168.613a1.21 1.21 0 0 1-1.108.908l-.637.036c-.74.041-1.271.724-1.136 1.447l.114.626a1.227 1.227 0 0 1-.613 1.295l-.556.31a1.227 1.227 0 0 0-.396 1.8l.376.514c.31.425.314 1.002.012 1.435l-.368.519a1.23 1.23 0 0 0 .425 1.794l.56.303c.466.249.72.768.634 1.287l-.11.625a1.227 1.227 0 0 0 1.16 1.431l.638.029c.527.02.98.38 1.128.887l.175.613a1.226 1.226 0 0 0 1.668.785l.585-.254a1.232 1.232 0 0 1 1.401.307l.426.474a1.23 1.23 0 0 0 1.843-.013l.417-.482a1.231 1.231 0 0 1 1.394-.33l.588.24a1.23 1.23 0 0 0 1.655-.813l.168-.613c.139-.507.589-.87 1.116-.903l.638-.037a1.225 1.225 0 0 0 1.136-1.447l-.115-.625a1.227 1.227 0 0 1 .613-1.296l.556-.31a1.227 1.227 0 0 0 .393-1.795ZM10 16.46a6.454 6.454 0 1 1 0-12.908 6.454 6.454 0 0 1 0 12.908Z" />
      <path d="M9.175 10.178 8.603 9.6a.877.877 0 0 0-1.239-.004.877.877 0 0 0-.004 1.239l.573.576.637.638a.852.852 0 0 0 1.206.004l.638-.634 2.223-2.21a.877.877 0 0 0-1.234-1.243l-2.228 2.21Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

const Unckeck = () => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#a)" fill="#D9D9D9">
      <path d="m19.557 11.167-.376-.515a1.234 1.234 0 0 1-.013-1.435l.368-.519a1.23 1.23 0 0 0-.425-1.794l-.56-.303a1.233 1.233 0 0 1-.633-1.287l.106-.63a1.227 1.227 0 0 0-1.16-1.43l-.639-.029a1.228 1.228 0 0 1-1.128-.887l-.175-.613a1.226 1.226 0 0 0-1.668-.784l-.584.253a1.227 1.227 0 0 1-1.402-.31l-.425-.475a1.23 1.23 0 0 0-1.844.013l-.417.482a1.231 1.231 0 0 1-1.393.33L6.6.995a1.23 1.23 0 0 0-1.655.813l-.168.613a1.21 1.21 0 0 1-1.108.908l-.637.036c-.74.041-1.271.724-1.136 1.447l.114.626a1.227 1.227 0 0 1-.613 1.295l-.556.31a1.227 1.227 0 0 0-.396 1.8l.376.514c.31.425.314 1.002.012 1.435l-.368.519a1.23 1.23 0 0 0 .425 1.794l.56.303c.466.249.72.768.634 1.287l-.11.625a1.227 1.227 0 0 0 1.16 1.431l.638.029c.527.02.98.38 1.128.887l.175.613a1.226 1.226 0 0 0 1.668.785l.585-.254a1.232 1.232 0 0 1 1.401.307l.426.474a1.23 1.23 0 0 0 1.843-.013l.417-.482a1.231 1.231 0 0 1 1.394-.33l.588.24a1.23 1.23 0 0 0 1.655-.813l.168-.613c.139-.507.589-.87 1.116-.903l.638-.037a1.225 1.225 0 0 0 1.136-1.447l-.115-.625a1.227 1.227 0 0 1 .613-1.296l.556-.31a1.227 1.227 0 0 0 .393-1.795ZM10 16.46a6.454 6.454 0 1 1 0-12.908 6.454 6.454 0 0 1 0 12.908Z" />
      <path d="M9.175 10.178 8.603 9.6a.877.877 0 0 0-1.239-.004.877.877 0 0 0-.004 1.239l.573.576.637.638a.852.852 0 0 0 1.206.004l.638-.634 2.223-2.21a.877.877 0 0 0-1.234-1.243l-2.228 2.21Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

const Paper = () => {
  return (
    <img src="https://i.postimg.cc/JzDc263T/ceroacien.png" alt="ceroacien" />
  );
};

const Header = () => {
  return (
    <header className=" w-full z-0 h-[180px] md:h-[290px] grid place-items-center shadow-lg relative bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="max-w-screen-xl mx-auto flex justify-center h-full z-0 p-2 md:h-[150px] relative ">
        <div className="grid place-items-center relative"></div>
      </div>
    </header>
  );
};

const WraperProfileInfo = ({ children }) => {
  return (
    <section className="mt-[-100px]  border-2 border-transparent rounded-3xl h-[335px]  md:mt-[-140px]  sm:w-full sm:sticky sm:top-24 md:border-4 lg:border-white lg:max-w-[250px] lg:mx-auto lg:h-[310px] lg:shadow-xl bg-transparent md:bg-white sm:shadow-lg z-10 md:max-h-[200px] xl:max-h-[400px] ">
      {children}
    </section>
  );
};

const WraperCourse = () => {
  const { data: session, status } = useSession();
  const [user, setuser] = useState(session?.user);
  const [courses, setcourses] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    getContentProfile(user?.email).then((res) => {
      setcourses(res?.Course);
      setloading(false);
    });
  }, [user]);

  return (
    <div
      className="md:w-full mx-auto sm:my-3 flex flex-col gap-10   md:border-transparent"
      style={{ background: "#f7f7f7" }}
    >
      <div className="border-t-2 border-black w-[90%] mx-auto my-4"></div>
      {courses?.length === 0 && (
        <div className="w-full px-2 h-[40vh] md:w-[90%] md:mx-auto grid place-items-center ">
          <div>
            <p className="text-center text-xl px-5">
              Aún no tienes cursos agregados, Mira todos nuestros cursos o
              averigua cuáles son los más adecuados para ti.
            </p>
            <div className="mt-12 px-2 flex flex-col gap-5 text-center">
              <Link href="/course">
                <a className=" p-4 bg-primary text-white font-medium">
                  Explora nuestros todos nuestros cursos
                </a>
              </Link>
              <Link href="elige-los-mejores-cursos-para-ti">
                <a className="border-2 border-primary p-4 bg-white text-primary font-medium">
                  Averigua cuáles son los más adecuados
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
      {courses?.length > 0 && (
        <>
          {courses.map((course, index) => (
            <CouseItem key={index} courses={course} />
          ))}
        </>
      )}
    </div>
  );
};

const CouseItem = ({ courses }) => {
  //custom hook
  const [course, setcourse] = useState(null);
  useEffect(async () => {
    const { data } = await CeroacienInstances.get(`/courses/${courses}`);
    setcourse(data);
  }, [course]);

  return (
    <Link href={`/course/${course?.id}`}>
      <section className="relative px-2 md:h-72 w-full max-w-2xl ">
        <div className="border-2 border-transparent h-full py-5 pt-8">
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
