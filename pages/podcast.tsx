import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Podcast() {
  return (
    <>
      <Head>
        <title>
          Podcast Extraordinarios | Ceroacien | acelera tu carrera profesional
        </title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner>
          <Wrapper>
            <TextHeader>
              <h1 className="text-3xl md:text-6xl font-medium text-white">
                Descubre nuestro podcast{" "}
                <span className="font-bold  text-ExtraordinariosText">
                  Extraordinarios
                </span>
              </h1>
              <h2 className="text-base md:text-xl font-normal text-white">
                Aprende de las personas más Extraordinarias del mundo de la
                tecnología
              </h2>
              <Social />
            </TextHeader>
          </Wrapper>
        </Banner>
        <Player />
      </main>
    </>
  );
}

const TextHeader = ({ children }) => {
  return (
    <section className="flex h-full justify-center">
      <section className="z-10 relative  h-full w-1/6">
        <div
          className=" z-10 absolute  top-[-3%] right-[-300%] md:top-[5%] md:right-[-50%]  w-[110px] md:w-full aspect-square"
          style={{
            backgroundImage: `url("https://i.postimg.cc/tgY0RRqH/PORTADAPODCAST-1-1.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </section>
      <section className="z-20  px-5 md:px-0 pb-[90px] md:py-[100px] max-w-3xl h-full mx-auto text-center flex flex-col items-center justify-around gap-3">
        {children}
      </section>
      <section className=" z-10 relative h-full  w-1/6">
        <div
          className=" md:z-10 absolute hidden md:block md:bottom-[-3%] md:left-[-50%]   w-full md:h-1/2 md:aspect-square"
          style={{
            backgroundImage: `url("https://i.postimg.cc/vHdqBr7z/PORTADAPODCAST-1-2-1.png")`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </section>
    </section>
  );
};

const Banner = ({ children }) => {
  return (
    <section className="pt-10 md:pt-0 w-screen h-[75vh] md:h-[75vh] bg-gradient-to-r from-Extraordinariosbg1 to-Extraordinariosbg2">
      <div
        className="w-full h-full animate-[fondoAnim_20_alternate_infinite]"
        style={{
          backgroundImage: `url(
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='78' height='78' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(180)'%3E%3Crect width='100%25' height='100%25' fill='rgba(42, 67, 101,0)'/%3E%3Cpath d='M0 40h-10v-60h60L40 0L39 1h-38v38z' fill='rgba(247, 250, 252,0)'/%3E%3Cpath d='M40 0v10h60v60L0 40L1 39h38v-38z' fill='rgba(247, 250, 252,0.1)'/%3E%3Cpath d='M40 0v10h60v60L0 40L0 40h40v-40z' fill='rgba(247, 250, 252,0)'/%3E%3Cpath d='M0 40h-10v-60h60L40 0L40 0h-40v40z' fill='rgba(247, 250, 252,0.1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E "
        )`,
        }}
      >
        {children}
      </div>
    </section>
  );
};

const SocialItem = [
  {
    icon: "https://i.postimg.cc/mkx52d0R/apple-music-ceroacien.png",
    link: "https://podcasts.apple.com/mx/podcast/extraordinarios/id1603965937",
  },
  {
    icon: "https://i.postimg.cc/QdjvTyVd/youtube-ceroacien.png",
    link: "https://www.youtube.com/c/ceroacien-io",
  },
  {
    icon: "https://i.postimg.cc/8CSQtzyN/spotify-ceroacien.png",
    link: "https://open.spotify.com/show/3GMzMaTmCjXbjoBtStEQaN?si=451358a4b7fa48b2",
  },
];

const Social = () => {
  return (
    <div className="flex flex-col gap-3">
      <strong className="text-white text-xs ">Suscríbete</strong>
      <section className="md:w-full grid grid-cols-3 place-content-center gap-4">
        {SocialItem.map((item, index) => (
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <div
              key={index}
              className="flex justify-center items-center h-12 w-12 "
              style={{
                backgroundImage: `url(${item.icon})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </a>
        ))}
      </section>
    </div>
  );
};

const Wrapper = ({ children }) => {
  return <section className="max-w-7xl mx-auto h-full">{children}</section>;
};

const Player = () => {
  return (
    <Wrapper>
      <section className="z-30 p-6 md:p-0 mt-[-100px] max-w-3xl mx-auto bg-PodcastBg mb-10">
        <iframe
          src="https://www.ivoox.com/player_es_podcast_1440123_zp_1.html"
          width="100%"
          height="400"
          frameBorder="0"
          className="z-30 rounded-xl overflow-hidden "
          style={{ backgroundColor: "#424242" }}
          scrolling="no"
          loading="lazy"
        ></iframe>
      </section>
    </Wrapper>
  );
};
