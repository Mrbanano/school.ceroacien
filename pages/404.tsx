import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Index() {
  const { asPath } = useRouter();
  const [page, setPage] = React.useState("");

  useEffect(() => {
    setPage(asPath.split("/")[1]);
  }, [asPath]);

  return (
    <>
      <Head>
        <title>404</title>
        <title>
          la pagina {page} no existe | Ceroacien | acelera tu carrera
          profesional
        </title>
        <meta
          name="description"
          content="Aqui encontraras los modulos que te ayudaran a aprender habilidades de esta industrica tecnologica"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-[90vh] w-screen">
        <section className="w-full max-w-7xl h-full mx-auto grid place-content-center">
          <div className="text-center flex flex-col items-center">
            <Ilustration />
            <div>
              <p className="text-5xl text-primary p-5 ">Ooooops!</p>
              <h1 className="p-5 text-4xl  flex gap-2">
                La página <p className="text-primary lowercase">{page}</p> no la
                encontramos
              </h1>
            </div>
            <Link href={"/"}>
              <a className="w-[250px] text-white font-semibold  p-4 my-6 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl">
                <p>Volver a la pagina principal</p>
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Index;

const Ilustration = () => {
  return (
    <svg
      width={300}
      height={300}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M282.385 41H36.499a8.626 8.626 0 0 0-8.615 8.613v149.79a8.624 8.624 0 0 0 8.615 8.613h245.886a8.625 8.625 0 0 0 8.615-8.613V49.613A8.623 8.623 0 0 0 282.385 41Zm7.856 158.403a7.868 7.868 0 0 1-2.301 5.554 7.857 7.857 0 0 1-5.555 2.3H36.499a7.856 7.856 0 0 1-7.856-7.854v-98.552a59.079 59.079 0 0 1 17.312-41.784A59.109 59.109 0 0 1 87.75 41.759h194.635a7.854 7.854 0 0 1 7.856 7.854v149.79Z"
        fill="#3F3D56"
      />
      <path
        d="M267.771 168.437H155.147a4.414 4.414 0 0 1-4.409-4.408v-36.567a4.415 4.415 0 0 1 4.409-4.409h112.624a4.418 4.418 0 0 1 4.41 4.409v36.567a4.417 4.417 0 0 1-4.41 4.408Z"
        fill="#E6E6E6"
      />
      <path
        d="M92.164 65.182c1.812 0 3.281-1.501 3.281-3.353 0-1.852-1.469-3.354-3.28-3.354-1.813 0-3.282 1.502-3.282 3.354s1.469 3.353 3.281 3.353ZM80.83 65.182c1.811 0 3.28-1.501 3.28-3.353 0-1.852-1.469-3.354-3.28-3.354-1.813 0-3.282 1.502-3.282 3.354s1.47 3.353 3.281 3.353ZM69.494 65.182c1.813 0 3.281-1.501 3.281-3.353 0-1.852-1.469-3.354-3.28-3.354-1.813 0-3.282 1.502-3.282 3.354s1.47 3.353 3.281 3.353Z"
        fill="#3F3D56"
      />
      <path
        d="M199.374 96.08h-45.89a2.855 2.855 0 1 1 0-5.708h45.89a2.853 2.853 0 0 1 2.018 4.873 2.853 2.853 0 0 1-2.018.836ZM235.186 105.742h-81.702a2.857 2.857 0 0 1-2.855-2.855 2.85 2.85 0 0 1 2.855-2.854h81.702a2.857 2.857 0 0 1 2.855 2.854 2.857 2.857 0 0 1-2.855 2.855Z"
        fill="#E6E6E6"
      />
      <path
        d="M71.626 254.734h3.831l1.822-14.772-5.653.001v14.771Z"
        fill="#FFB6B6"
      />
      <path
        d="M71.492 258.729H83.27v-.149a4.582 4.582 0 0 0-4.585-4.584l-2.152-1.632-4.014 1.632H71.49v4.733Z"
        fill="#2F2E41"
      />
      <path
        d="M49.483 254.734h3.83l1.823-14.772-5.654.001.001 14.771Z"
        fill="#FFB6B6"
      />
      <path
        d="M49.348 258.729h11.78v-.149a4.582 4.582 0 0 0-4.585-4.584l-2.152-1.632-4.015 1.632h-1.028v4.733Z"
        fill="#2F2E41"
      />
      <path
        d="m97.429 156.658-13.051-12.237 3.535-5.92 12.871 14.716a3.742 3.742 0 0 1 3.744 2.097 3.737 3.737 0 0 1-2.674 5.298 3.744 3.744 0 0 1-3.911-1.765 3.737 3.737 0 0 1-.514-2.189Z"
        fill="#FFB6B6"
      />
      <path
        d="M45.736 174.472s-1.62 14.579 1.89 28.347l-1.322 6.656 2.942 38.159h7.142l5.01-62.903 9.351 62.903h7.502l-.92-34.556 3.246-33.206-1.357-7.56-33.484 2.16Z"
        fill="#2F2E41"
      />
      <path
        d="M65.472 117.676H49.526l-2.682 6.816.647 53.895s31.594 0 33.755-2.16l-6.751-23.487-2.43-29.967-6.593-5.097Z"
        fill="#5653CA"
      />
      <path
        d="m74.225 122.503 11.341 12.149 4.05 2.699 1.08 3.51-4.59 7.829-5.13-1.89-1.62-5.939-9.521-7.781-1.011-12.467 5.4 1.89Z"
        fill="#2F2E41"
      />
      <path
        d="m63.986 118.061 1.866 7.965 2.567 28.468 3.51 21.598h10.128l-6.077-23.487-2.43-30.237-8.102-4.859-1.462.552ZM50.979 118.061l2.858 9.166 4.59 30.237-7.02 21.598-6.817.106-1.774-6.7 4-17.164-5.401-32.936 8.101-4.859 1.463.552Z"
        fill="#2F2E41"
      />
      <path
        d="M56.88 114.976c5.338 0 9.665-4.326 9.665-9.663 0-5.337-4.327-9.663-9.666-9.663-5.338 0-9.665 4.326-9.665 9.663 0 5.337 4.327 9.663 9.665 9.663Z"
        fill="#FFB6B6"
      />
      <path
        d="M51.303 110.097s-.464.704.432 3.691l-4.11-3.299-.449-3.622s-2.091-7.468 5.08-11.052c0 0 6.274-3.286 12.25 1.493 0 0 2.39.299 2.091.598-.298.298-1.792 1.194-.298.896 1.493-.299 2.39-1.792 2.39-.896s-2.69 2.987-2.69 2.987 1.047 2.838-6.124-1.046a8.017 8.017 0 0 1-4.125 4.319l.23.224-1.782 3.821s-1.849-2.446-2.895 1.886Z"
        fill="#2F2E41"
      />
      <path
        d="m52.062 185.502 32.475-73.205a3.14 3.14 0 0 1 4.138-1.595l23.78 10.544a3.142 3.142 0 0 1 1.596 4.138l-32.475 73.205a3.141 3.141 0 0 1-4.138 1.595l-23.78-10.544a3.139 3.139 0 0 1-1.596-4.138Z"
        fill="#fff"
      />
      <path
        d="m52.062 185.502 32.475-73.205a3.14 3.14 0 0 1 4.138-1.595l23.78 10.544a3.142 3.142 0 0 1 1.596 4.138l-32.475 73.205a3.141 3.141 0 0 1-4.138 1.595l-23.78-10.544a3.139 3.139 0 0 1-1.596-4.138Zm61.484-60.342a2.583 2.583 0 0 0-1.314-3.409l-23.78-10.544a2.59 2.59 0 0 0-3.411 1.314l-32.475 73.205a2.587 2.587 0 0 0 1.315 3.41l23.78 10.544a2.585 2.585 0 0 0 3.41-1.315l32.475-73.205Z"
        fill="#3F3D56"
      />
      <path
        d="M87.56 155.57c6.71 0 12.151-5.439 12.151-12.149 0-6.709-5.44-12.149-12.151-12.149-6.712 0-12.152 5.44-12.152 12.149 0 6.71 5.44 12.149 12.152 12.149Z"
        fill="#CCC"
      />
      <path
        d="M81.648 168.896c6.711 0 12.152-5.439 12.152-12.148 0-6.71-5.44-12.149-12.152-12.149-6.711 0-12.152 5.439-12.152 12.149 0 6.709 5.44 12.148 12.152 12.148Z"
        fill="#3F3D56"
      />
      <path
        d="M70.81 181.18a12.15 12.15 0 0 1-3.45-19.906 12.151 12.151 0 0 1 13.303-2.305c6.135 2.72 12.862 16.672 6.181 16.031-7.65-.735-9.9 8.9-16.034 6.18Z"
        fill="#5653CA"
      />
      <path
        d="m54.465 173.972-9.496-23.652 7.594 1.518 6.337 20.283a3.74 3.74 0 1 1-4.435 1.851Z"
        fill="#FFB6B6"
      />
      <path
        d="M39.09 128.138c-.553 6.097.592 11.451 2.645 16.406l.264 4.408 2.11 3.005 9.002 1.175 1.653-5.211-3.7-4.921-.311-12.29-9.23-8.442-2.433 5.87Z"
        fill="#2F2E41"
      />
      <path
        d="M30.6 252.421a.866.866 0 0 1-.834-.529.86.86 0 0 1 .21-.964l.06-.235-.024-.056a2.312 2.312 0 0 0-3.42-1.02 2.311 2.311 0 0 0-.848 1.036c-.698 1.68-1.587 3.364-1.806 5.141a6.843 6.843 0 0 0 .12 2.354 27.432 27.432 0 0 1-2.496-11.395 26.5 26.5 0 0 1 .542-5.35 27.748 27.748 0 0 1 5.505-11.763 7.388 7.388 0 0 0 3.073-3.187 5.641 5.641 0 0 0 .513-1.54c-.15.02-.564-2.258-.452-2.398-.208-.316-.581-.473-.809-.782-1.132-1.535-2.692-1.267-3.507.819-1.74.878-1.756 2.334-.689 3.734.68.891.773 2.096 1.369 3.05-.062.078-.125.154-.187.233a27.951 27.951 0 0 0-2.916 4.619c.199-1.828-.039-3.676-.694-5.394-.663-1.601-1.907-2.949-3.003-4.333a2.38 2.38 0 0 0-4.253 1.232c.163.091.322.189.478.292a1.172 1.172 0 0 1 .492 1.224 1.169 1.169 0 0 1-.963.902l-.024.004c.058.586.16 1.167.306 1.738-1.405 5.434 1.63 7.413 5.962 7.502.096.049.189.098.284.145a28.508 28.508 0 0 0-1.535 7.223 27.037 27.037 0 0 0 .02 4.366l-.007-.052a7.148 7.148 0 0 0-2.44-4.126c-1.878-1.542-4.531-2.11-6.557-3.349a1.347 1.347 0 0 0-1.444-.004 1.34 1.34 0 0 0-.61 1.308l.008.055a7.776 7.776 0 0 1 1.358.716 1.171 1.171 0 0 1 .492 1.224 1.169 1.169 0 0 1-.963.902l-.024.004-.049.007a11.635 11.635 0 0 0 2.14 3.352c.88 4.743 4.654 5.194 8.692 3.812h.002a28.492 28.492 0 0 0 1.915 5.59h6.842c.025-.076.047-.155.07-.231a7.8 7.8 0 0 1-1.894-.112c.508-.623 1.015-1.251 1.523-1.873a.463.463 0 0 0 .032-.037c.257-.319.517-.635.775-.954a11.382 11.382 0 0 0-.334-2.9Z"
        fill="#F2F2F2"
      />
      <path
        d="M107.125 258.548a.441.441 0 0 1-.132.32.456.456 0 0 1-.32.132H10.505a.454.454 0 0 1-.452-.452.452.452 0 0 1 .452-.451h96.168a.441.441 0 0 1 .32.132.437.437 0 0 1 .132.319Z"
        fill="#CCC"
      />
    </svg>
  );
};
