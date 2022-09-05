import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAllClasseByCourse } from "../../utils/getAllClasseByCourse";
import { getCourseDetail } from "../../utils/getCourseDetail";
import Router from "next/router";

export default function Player() {
  //const { data } = clases;

  //States
  const [isLoading, setIsLoading] = useState(true);
  const [clases, setClases] = useState([]);
  const [course, setCourse] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentClase, setCurrentClase] = useState(null);

  const ChangeClase = (index) => {
    setCurrentIndex(index);
    setCurrentClase(clases[index]);
  };

  const { asPath } = useRouter();
  const courseID = asPath.split("/")[2];

  useEffect(() => {
    if (courseID === "[player]") return;
    (async () => {
      try {
        const { data } = await getAllClasseByCourse(courseID);
        const resp = await getCourseDetail(courseID);
        setClases(data);
        setCourse(resp);
        setCurrentClase(data[currentIndex]);
        setIsLoading(false);
      } catch (error) {
        setClases([]);
        setCourse([]);
        console.log(error);
        setIsLoading(false);
        Router.push(`/course/${courseID}`);
      }
    })();
    //preguntar si el curso esta comprado
    //si no esta comprado, mostrar modal de pago
    //si esta comprado, mostrar solo las clases que estan disponibles
  }, [asPath]);

  return (
    <>
      {isLoading && <LoadingPage />}
      {!isLoading && (
        <>
          <Head>
            <title>{currentClase.title} | ceroacien |</title>
          </Head>
          <Wrappper>
            <WrapperPlayer>
              <VideoContainer>
                <VideoPlayer src={currentClase.assets.player} />
              </VideoContainer>
              <CourseDescription course={course} />
              <VideoDescriptionWrapper>
                <VideoDescription
                  Title={currentClase.title}
                  Description={currentClase.description}
                />
              </VideoDescriptionWrapper>
            </WrapperPlayer>
            <WrapperPlayList>
              <PlayListContainer>
                <VideoPlaylistItems
                  clases={clases}
                  currentIndex={currentIndex}
                  ChangeClase={ChangeClase}
                />
              </PlayListContainer>
            </WrapperPlayList>
          </Wrappper>
        </>
      )}
    </>
  );
}

const LoadingPage = () => {
  return (
    <>
      <Head>
        <title>Tu curso esta cargando | ceroacien |</title>
      </Head>
      <Wrappper>
        <WrapperPlayer>
          <VideoContainer>
            <div className="w-full h-full animate-pulse bg-gray-200 "></div>
          </VideoContainer>
          <div className="animate-pulse  w-full px-2 py-2 flex items-center gap-3 md:gap-5 max-h-[86px]">
            <div className="h-9 w-9 rounded-full bg-gray-200"></div>
            <div className="bg-gray-200 animate-pulse w-1/2   flex items-center max-w-[80%]  max-h-[48px] overflow-hidden">
              <div className="h-[1.25rem]"></div>
            </div>
          </div>
          <VideoDescriptionWrapper>
            <div className="py-5 animate-pulse">
              <div className="bg-gray-200 animate-pulse w-5/6  flex items-center max-w-[80%]  max-h-[48px] overflow-hidden">
                <div className="h-[2rem]"></div>
              </div>
            </div>
          </VideoDescriptionWrapper>
        </WrapperPlayer>
        <WrapperPlayList>
          <PlayListContainer>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className=" animate-pulse flex w-full h-[94px] relative z-0 border-2 border-transparent"
              >
                <div className="animate-pulse z-0 border-2 border-transparent h-full aspect-video bg-gray-200"></div>
                <div className="ml-2 w-1/2 flex flex-col gap-2 justify-center ">
                  <div className="bg-gray-200 animate-pulse w-5/6 border-2  flex items-center max-w-[80%]  max-h-[13px] overflow-hidden">
                    <div className="h-[0.5rem]"></div>
                  </div>
                  <div className="bg-gray-200 animate-pulse w-5/6 border-2  flex items-center max-w-[80%]  max-h-[20px] overflow-hidden">
                    <div className="h-[2rem]"></div>
                  </div>
                </div>
              </div>
            ))}
          </PlayListContainer>
        </WrapperPlayList>
      </Wrappper>
    </>
  );
};

const Wrappper = ({ children }) => {
  return (
    <main className=" relative max-w-screen-xl mx-auto flex flex-col items-stretch justify-evenly py-5 sm:bg-white md:flex-row md:gap-4">
      {children}
    </main>
  );
};

const WrapperPlayer = ({ children }) => {
  return <section className="relative md:w-4/6 bg-white ">{children}</section>;
};

const WrapperPlayList = ({ children }) => {
  return (
    <section className=" relative md:w-2/6 z-0 bg-transparent md:bg-white ">
      {children}
    </section>
  );
};

const VideoDescriptionWrapper = ({ children }) => {
  return (
    <>
      <div className="border-t-2 border-black/10 mx-auto mt-2 "></div>
      <section className="px-2">{children}</section>
    </>
  );
};

const VideoContainer = ({ children }) => {
  return (
    <section className="border-2 border-transparent bg-white w-full aspect-video">
      {children}
    </section>
  );
};

const PlayListContainer = ({ children }) => {
  return <section className="z-0 m-2  py-2 ">{children}</section>;
};

const CourseDescription = ({ course }) => {
  return (
    <section className="w-full px-2 py-2 flex items-center gap-3 md:gap-5 max-h-[86px]">
      <div
        className="h-9 w-9 rounded-full"
        style={{
          backgroundImage: `url(${course.metadata.icon})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="flex items-center max-w-[80%] w-full max-h-[48px] overflow-hidden">
        <h2 className="text-xl font-semibold">{course.name}</h2>
      </div>
    </section>
  );
};

const VideoPlaylistItems = ({ clases, currentIndex, ChangeClase }) => {
  return (
    <div className=" z-0 flex flex-col gap-2 ">
      {clases.map((clase, index) => (
        <VideoPlaylistItem
          clase={clase}
          key={index}
          index={index}
          currentIndex={currentIndex}
          ChangeClase={ChangeClase}
          lastItem={clases.length}
        />
      ))}
    </div>
  );
};

const VideoPlaylistItem = ({
  clase,
  index,
  currentIndex,
  ChangeClase,
  lastItem,
}) => {
  const ClickVideo = () => {
    ChangeClase(index);
  };

  return (
    <>
      <section
        className={`${
          index === currentIndex ? "bg-black/10 shadow" : "bg-white"
        } 
          flex w-full h-[94px] relative  z-0 border-2 border-transparent hover:border-primary
          `}
        onClick={ClickVideo}
      >
        <div
          className="z-0 border-2 border-transparent h-full aspect-video"
          style={{
            backgroundImage: `url(${clase.assets.thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="z-0 border-2 border-black/10 w-full px-1 overflow-hidden flex  justify-between">
          <div className="pl-2 flex flex-col gap-2">
            <span>Clase {index + 1}</span>
            <h3 className="text-base font-semibold ">{clase.title}</h3>
          </div>
          {/*<div
            className={`${
              lastItem - 1 === index ? "h-[100%] " : "h-[130%] "
            } absolute top-0 right-0 border-2 border-primary/50`}
          ></div>*/}
        </div>
      </section>
    </>
  );
};

const VideoPlayer = ({ src }) => {
  const [video, setVideo] = useState(src);

  useEffect(() => {
    setVideo(src);
  }, [src]);

  return (
    <section className="h-full w-full bg-black">
      {src && (
        <iframe
          loading="lazy"
          src={video}
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          allowFullScreen={true}
        ></iframe>
      )}
      {!src && (
        <div className="flex justify-center items-center h-full w-full bg-black">
          <div className="text-center">
            <h1 className="text-white font-semibold">Video no disponible</h1>
          </div>
        </div>
      )}
    </section>
  );
};

const VideoDescription = ({ Title, Description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <details className="border-0 border-transparent">
      <summary
        className="p-3 text-xl flex justify-between  items-center"
        style={{
          paddingLeft: "0",
          backgroundImage: "none",
          webkitAppearance: "none",
        }}
      >
        <h2 className="font-semibold text-2xl text-left  h-[50px] flex items-center">
          {Title}
        </h2>
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
        <p className="text-lg font-medium border-2 border-transparent py-2 pl-4">
          {Description}
        </p>
      </div>
    </details>
  );
};

/*export async function getServerSideProps(context) {
  const courseID = context.params.player;
  const { data } = await getAllClasseByCourse(courseID);
  const resp = await getCourseDetail(courseID);

  if (data.length === 0 || !resp.id) {
    return {
      redirect: {
        destination: `/course/${courseID}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      course: resp,
      clases: {
        data,
      },
    },
  };
}*/
