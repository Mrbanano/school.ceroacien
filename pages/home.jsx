import Head from "next/head";
import React from "react";
import { useEffect, useState } from "react";
import ItemsContainer from "../components/ItemsContainer/index";
import { CeroacienInstances } from "../config/index";
import { useSession } from "next-auth/react";

import Spinner from "../components/Spinner";
import Redirect from "../components/Redirect";

import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

import ModalPayment from "../components/ModalPayment";

export default function Home({
  Bootcamp = BootcampItems,
  userServer,
  CoursesServer,
}) {
  const [Courses, setCourses] = useState([]);
  const { data: session, status } = useSession();
  const [user, setuser] = useState(session?.user);
  const loading = status === "loading";

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  console.log("server user", userServer);
  console.log("server courses", CoursesServer);

  //Create a
  useEffect(() => {
    (async () => {
      if (user) {
        await CeroacienInstances.post("/user", { user });
      }
    })();
  }, [user]);

  //custom hook
  useEffect(() => {
    (async () => {
      try {
        const res = await CeroacienInstances("/courses");
        console.log("respuesta", res.data.data);
        setCourses(res.data.data);
      } catch (error) {
        setCourses([]);
      }
    })();
  }, []);

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading)
    return (
      <main className="w-screen h-screen grid place-content-center">
        <Spinner></Spinner>
      </main>
    );

  // If no session exists, redirect to login page
  if (!session) {
    return <Redirect />;
  }

  if (session) {
    return (
      <>
        <Head>
          <title>Inicio | Ceroacien | acelera tu carrera profesional</title>
          <meta
            name="description"
            content="Aqui encontraras los modulos que te ayudaran a aprender habilidades de esta industrica tecnologica"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ModalPayment
          show={showModal}
          handleCloseModal={handleCloseModal}
          course={selectedItem}
        />
        <div className={`${showModal ? "max-h-[85vh] overflow-hidden" : ""}`}>
          <header>
            <section className="w-full  bg-slate-200 z-0  md:h-[400px] flex items-center ">
              <div className="max-w-screen-xl mx-auto flex justify-center h-full z-0 p-2 md:h-[150px]">
                <div className="z-10 flex flex-col items-center pt-0 md:pt-0">
                  <span className="bg-orange-200 text-orange-700 px-4 py-1 rounded-md font-semibold ">
                    Programas
                  </span>
                  <h1 className="py-14 px-2 font-bold text-center text-3xl md:text-5xl md:w-[500px] text-slate-700">
                    Acelera tu éxito profesional
                  </h1>
                </div>
              </div>
            </section>
            <section className="max-w-screen-xl mx-auto  px-5 mb-10 z-50">
              <div className="bg-white w-full mt-[-35px] rounded-xl shadow-md z-50 p-3 flex flex-col gap-4  md:flex-row md:justify-around">
                {ItemInfo.map((item, index) => (
                  <CardInfo key={index} item={item} />
                ))}
              </div>
            </section>
          </header>
          <main className="max-w-screen-xl mx-auto md:mb-10">
            {!Courses && null}
            {Courses && Courses.length > 1 && (
              <ItemsContainer
                Items={Courses}
                setSelectedItem={setSelectedItem}
                setShowModal={setShowModal}
                show={showModal}
                Error={Error}
                label="Categorias"
                text="Explora nuestros cursos más populares"
                type="courses"
              />
            )}
            {!Bootcamp && null}
            {Bootcamp && Bootcamp.length > 1 && (
              <ItemsContainer
                Items={Bootcamp}
                Error={Error}
                label="Categorias"
                text="Explora nuestros programas de educación acelerada más populares"
              />
            )}
          </main>
        </div>
      </>
    );
  }
}

const CardInfo = ({ item }) => {
  return (
    <div className="flex items-center gap-4 py-1 w-full ">
      <p className="font-bold text-2xl border-2 border-transparent rounded-full p-2 bg-yellow-300">
        {item.Quantity}
      </p>
      <h2 className="font-light text-sm ">{item.Name}</h2>
    </div>
  );
};

const ItemInfo = [
  {
    Quantity: "01",
    Name: "26 Semanas de aprendizaje",
  },
  {
    Quantity: "02",
    Name: "Una comunidad que te ayudará a aprender",
  },
  {
    Quantity: "03",
    Name: "Obten un trabajo en tecnologia ",
  },
];

const BootcampItems = [
  {
    _id: "62abc4479cd75edec6b1a400",
    id: "2",
    title: "Desarrollo Web",
    description:
      "Descubre que carrera es la más adecuada de acuerdo con tus habilidades",
    image: "https://i.postimg.cc/sfSG5Dxs/Frame-10.png",
    slug: "frontend",
    createdAt: "2022-06-17T00:01:11.507Z",
    updatedAt: "2022-06-17T00:01:11.507Z",
  },
  {
    _id: "62abbcdfad9cd6b670d088f7",
    id: "1",
    title: "Softskills for Developers",
    description:
      "Descubre que carrera es la más adecuada de acuerdo con tus habilidades",
    image: "https://i.postimg.cc/bNW5Wg8Q/Frame-11.png",
    slug: "uniworkshop",
  },
  {
    _id: "62abc4799cd75edec6b1a403",
    id: "3",
    title: "Ciencia de datos",
    description:
      "Descubre que carrera es la más adecuada de acuerdo con tus habilidades",
    image: "https://i.postimg.cc/4xHDxMwL/ceroacienplataformaenlinea2.png",
    slug: "backend",
    createdAt: "2022-06-17T00:02:01.352Z",
    updatedAt: "2022-06-17T00:02:01.352Z",
  },
];

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  const res = await CeroacienInstances("/courses");

  return {
    props: { userServer: session?.user, CoursesServer: res.data.data },
  };
}
