import React from "react";

import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Links = [
  {
    name: "¿Dónde empiezo?",
    href: "/elige-los-mejores-cursos-para-ti",
    id: "TestCourse",
  },
  {
    name: "Inicio",
    href: "/home",
    id: "Home",
  },
  {
    name: "Recursos",
    href: "/content",
    id: "Resources",
  },
  {
    name: "Cursos",
    href: "/course",
  },
];

const LinksMobile = [
  ...Links,
  {
    name: "Profile",
    href: "/profile",
    id: "profile",
  },
];

function Index({ children }) {
  const { asPath } = useRouter();
  const [Show, setShow] = useState(false);
  return (
    <>
      {asPath === "/" ? null : (
        <>
          <header className="w-full py-1 bg-white shadow-lg sticky top-0 z-40">
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-2  flex items-center justify-between max-w-screen-xl mx-auto">
              <div className=" w-1/2 md:w-2/12">
                <Link href="/">
                  <a>
                    <div className="relative grid place-items-center">
                      <Image
                        src="https://i.postimg.cc/R0TGSDqv/logo-cerocien.png"
                        width="180px"
                        height="50%"
                        objectFit="contain"
                        alt="AlvaroCastilloCarreñoDesarolladorWeb"
                      />
                      <span className="absolute right-[-10px] top-0 text-xs font-medium text-gray-400">
                        BETA
                      </span>
                    </div>
                  </a>
                </Link>
              </div>
              <div
                aria-label="main-navigation"
                className="hidden w-0 md:w-9/12 h-full md:grid place-items-center"
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
              <div className=" w-1/2 h-full md:w-3/12 flex justify-end ">
                <div className="hidden md:block w-full p-3 sm:p-0 relative">
                  {children}
                </div>
                <div
                  className="md:hidden grid place-items-center "
                  onClick={() => {
                    setShow(!Show);
                  }}
                >
                  <div className=" md:hidden flex flex-col gap-[5px] ">
                    <span className="block w-8 h-0.5 bg-primary animate-pulse"></span>
                    <span className="block w-8 h-0.5 bg-primary animate-pulse"></span>
                    <span className="block w-8 h-0.5 bg-primary animate-pulse"></span>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          {Show && (
            <section className=" bg-white h-screen">
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
