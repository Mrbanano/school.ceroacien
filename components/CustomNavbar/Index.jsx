import React from "react";

import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

/*
const Links = [
  {
    name: "¿Dónde empiezo?",
    href: "/donde-empiezo",
    id: "TestCourse",
  },
  {
    name: "Inicio",
    href: "/home",
    id: "Home",
  },

  {
    name: "Cursos para mi",
    href: "cuales-cursos-son-para-mi",
    id: "cuales-cursos-son-para-mi",
  },
];

const LinksMobile = [
  ...Links,
  {
    name: "Profile",
    href: "/profile",
    id: "profile",
  },
];*/

const Links = [];
const LinksMobile = [];

function Index({ children }) {
  const { asPath } = useRouter();
  const [Show, setShow] = useState(false);
  return (
    <>
      {asPath === "" || asPath === "/login" ? null : (
        <>
          <header className="w-full py-1 bg-white dark:bg-slate-900 shadow-lg sticky top-0 z-40">
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-2  flex items-center justify-between max-w-screen-2xl mx-auto ">
              <div className="w-1/2 md:w-2/12">
                <Link href="/">
                  <a>
                    <div className="relative grid place-items-center dark:hidden">
                      <Image
                        src="https://i.postimg.cc/R0TGSDqv/logo-cerocien.png"
                        width="180px"
                        height="50%"
                        objectFit="contain"
                        alt="AlvaroCastilloCarreñoDesarolladorWeb"
                      />
                      <span className="absolute right-[-10px] top-0 text-xs font-medium text-gray-400 dark:text-white">
                        School
                      </span>
                    </div>
                    <div className="relative  place-items-center hidden dark:grid">
                      <Image
                        src="https://i.postimg.cc/Mp6Fd3wc/logo-cerocien-lio.png"
                        width="180px"
                        height="50%"
                        objectFit="contain"
                        alt="AlvaroCastilloCarreñoDesarolladorWeb"
                      />
                      <span className="absolute right-[-10px] top-0 text-xs font-medium text-gray-400 dark:text-white">
                        School
                      </span>
                    </div>
                  </a>
                </Link>
              </div>
              <div
                aria-label="main-navigation"
                className=" hidden w-0 md:w-9/12 h-full lg:grid place-items-center"
              >
                <ul className="flex flex-row gap-14">
                  {Links.map((link, index) => (
                    <li key={index}>
                      <Link id={link.id} href={link.href}>
                        <a
                          className={`
                        text-bold
                        text-lg
                        ${
                          asPath === link.href
                            ? "text-primary"
                            : " text-gray-300 "
                        }
                        hover:text-black
                        text-base
                        transition duration-150 ease-out hover:ease-in
                        `}
                        >
                          {link.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" w-1/2 h-full md:w-2/12 flex justify-end  ">
                <div className="hidden lg:block w-full p-3 sm:p-0 relative">
                  {children}
                </div>
                <div
                  className="lg:hidden grid place-items-center "
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setShow(!Show);
                  }}
                >
                  <div className="flex flex-col gap-[5px] lg:hidden">
                    <span className="block w-8 h-0.5 bg-primary dark:bg-white animate-pulse"></span>
                    <span className="block w-8 h-0.5 bg-primary dark:bg-white animate-pulse"></span>
                    <span className="block w-8 h-0.5 bg-primary  dark:bg-white animate-pulse"></span>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          {Show && (
            <section className="z-50 bg-white min-h-screen ">
              <ul className="flex flex-col">
                {LinksMobile.map((link, index) => (
                  <li key={index} className=" w-full">
                    <Link id={link.id} href={link.href}>
                      <div className="border-b-2 border-gray-200 p-14 grid place-items-center text-center">
                        <a
                          className={`
                        w-full
                        text-bold
                        text-lg
                        ${
                          asPath === link.href
                            ? "text-primary"
                            : " text-gray-400 "
                        }
                        hover:text-black
                        transition duration-150 ease-out hover:ease-in
                        `}
                          onClick={() => setShow(false)}
                        >
                          {link.name}
                        </a>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}
    </>
  );
}

export default Index;
