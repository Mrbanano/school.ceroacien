import Head from "next/head";
import React from "react";
import Chart from "chart.js";

function index() {
  return (
    <>
      <Head>
        // FontAwesome Icons
        <script
          src="https://kit.fontawesome.com/42d5adcbca.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <main className="w-screen  relative z-10 bg-gray-50 dark:bg-slate-900 ">
        <Banner />
        <Wrapper>
          <Dashboard />
        </Wrapper>
      </main>
    </>
  );
}

const Wrapper = ({ children }) => {
  return (
    <section className="z-30 max-w-screen-2xl mx-auto h-full">
      {children}
    </section>
  );
};

const Banner = () => {
  return (
    <div className="z-[-10] h-[300px] bg-blue-600 absolute top-0 w-screen"></div>
  );
};

const Dashboard = () => {
  const [Section, setSection] = React.useState("Inicio");
  return (
    <section className=" w-full  min-h-full flex gap-4 p-5">
      <Aside Section={Section} setSection={setSection} />
      <Main Section={Section} setSection={setSection} />
    </section>
  );
};

const Aside = ({ Section, setSection }) => {
  const NavBar = [
    {
      name: "Inicio",
    },
    {
      name: "Tablas",
    },
  ];

  return (
    <aside className="hidden lg:flex w-64 h-[86vh] max-h-[1200px] items-center sticky top-24">
      <div className="w-full h-[98%] rounded-2xl bg-white antialiased transition-transform duration-200   border-0 shadow-xl dark:shadow-none dark:bg-slate-800 max-w-64 ease-nav-brand z-990  p-3">
        {/* header del aside */}
        <div className="h-19 flex items-center gap-3">
          <p className="block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700">
            <img
              src="https://i.postimg.cc/L6cL3g3W/dashboard-svgrepo-luz.png"
              className="inline h-full max-w-full transition-all duration-200 dark:hidden ease-nav-brand max-h-8"
              alt="main_logo"
            />
            <img
              src="https://i.postimg.cc/yxJ3F7gB/dashboard-svgrepo-dark.png"
              className="hidden h-full max-w-full transition-all duration-200 dark:inline ease-nav-brand max-h-8"
              alt="main_logo"
            />
            <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">
              Dashboard
            </span>
          </p>
        </div>
        {/* fin header del aside */}
        <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"></hr>
        {/* aside menu */}
        <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full my-3">
          <ul className="flex flex-col pl-0 mb-0 gap-3">
            {NavBar.map((item, index) => (
              <li className="mt-0.5 w-full border-2 border-black/10">
                <a
                  className="py-2.7 bg-blue-500/13 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors"
                  onClick={() => setSection(item.name)}
                >
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-3">
                    <i className="relative top-0 leading-normal text-blue-500 ni ni-tv-2 text-sm"></i>
                  </div>
                  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* aside menu */}
      </div>
    </aside>
  );
};

const Main = ({ Section, setSection }) => {
  return (
    <main className="w-full">
      {Section === "Inicio" && (
        <>
          <div className=" h-4 my-4"></div>
          <CardWrapper />
          <SectionWrapper />
        </>
      )}
      {Section === "Tablas" && <Tables />}
    </main>
  );
};

const CardWrapper = () => {
  const cards = [1, 2, 3, 4];

  return (
    <div className="flex flex-wrap -mx-3 my-6">
      {cards.map((card) => (
        <div className="pt-1 w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
          <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-800 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p className="mb-0 font-sans font-semibold leading-normal uppercase dark:text-white dark:opacity-60 text-sm">
                      Today's Money
                    </p>
                    <h5 className="mb-2 font-bold dark:text-white">$53,000</h5>
                    <p className="mb-0 dark:text-white dark:opacity-60 flex flex-col">
                      <span className="font-bold leading-normal text-sm text-emerald-500">
                        +55%
                      </span>
                      since yesterday
                    </p>
                  </div>
                </div>
                <div className="px-3 text-right basis-1/3">
                  <div className="inline-block w-12 h-12 text-center rounded-full bg-gradient-to-tl from-blue-500 to-violet-500">
                    <i className="ni ni-money-coins text-lg relative top-3.5 text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

declare global {
  interface Window {
    // ⚠️ notice that "Window" is capitalized here
    myLine: any;
  }
}

const SectionWrapper = () => {
  return (
    <div className="flex flex-wrap mt-6 -mx-3 ">
      <Graph />
      <Img />
    </div>
  );
};

const Img = () => {
  const imagens = [
    {
      img: "https://demos.creative-tim.com/argon-dashboard-tailwind/assets/img/carousel-1.jpg",
    },
    {
      img: "https://demos.creative-tim.com/argon-dashboard-tailwind/assets/img/carousel-2.jpg",
    },
  ];

  return (
    <div className="w-full max-w-full px-3 lg:w-5/12 lg:flex-none">
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        {imagens.map((img, index) => {
          return (
            <div
              key={index}
              className="absolute w-full h-full transition-all duration-500"
              style={{ transform: "translateX(0%)" }}
            >
              <img
                className="object-cover h-full"
                src={img.img}
                alt="carousel image"
              />
              <div className="block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5 text-white">
                <div className="inline-block w-8 h-8 mb-4 text-center text-black bg-transparent border-2 border-black/10 bg-center rounded-lg fill-current stroke-none">
                  <i className="top-0.75 text-xxs relative text-transparent ni ni-camera-compact "></i>
                </div>
                <h5 className="mb-1 text-white">Comienza con ceroacien</h5>
                <p className="dark:opacity-80">
                  No hay nada que realmente quisiera hacer en la vida en lo que
                  no pudiera ser bueno.
                </p>
              </div>
            </div>
          );
        })}
        <button
          btn-next=""
          className="border-2 border-red-500 absolute z-10 w-10 h-10 p-2 text-white border-none opacity-50 cursor-pointer text-lg hover:opacity-100 far fa-chevron-right active:scale-110 top-6 right-4"
          aria-hidden="true"
        ></button>
        <button
          btn-prev=""
          className="absolute z-10 w-10 h-10 p-2 text-white border-none opacity-50 cursor-pointer text-lg hover:opacity-100 far fa-chevron-left active:scale-110 top-6 right-16"
          aria-hidden="true"
        ></button>
      </div>
    </div>
  );
};

const Graph = () => {
  React.useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: [
          "Lunes",
          "Martes",
          "Miercoles",
          "Jueves",
          "Viernes",
          "Sabado",
          "Domingo",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#3182ce",
            borderColor: "#3182ce",
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var canvas = document.getElementById(
      "line-chart"
    ) as HTMLCanvasElement | null;
    let ctx = null;
    if (canvas != null) {
      ctx = canvas.getContext("2d");
    }

    window.myLine = new Chart(ctx, config);
  }, []);

  return (
    <div className="w-full max-w-full px-2 mt-0 lg:w-7/12  lg:flex-none ">
      <div className="border-black/12.5 dark:bg-slate-800 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
        <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
          <h6 className="capitalize dark:text-white">
            Minutos Vistos esta semana
          </h6>
          <p className="mb-0 leading-normal dark:text-white dark:opacity-60 text-sm">
            <i
              className="fa fa-arrow-up text-emerald-500"
              aria-hidden="true"
            ></i>
            <span className="font-semibold">4% mas</span> que la semana pasada
          </p>
        </div>
        <div className="flex-auto p-5">
          <div>
            <canvas
              id="line-chart"
              height="300px"
              width="100%"
              className="display: block; box-sizing: border-box; height: 300px; width: 476.6px;"
            ></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tables = () => {
  return <p>table</p>;
};

export default index;
