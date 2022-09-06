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
    <section className="z-30 border-2 border-red-500 max-w-screen-2xl mx-auto h-full">
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
  return (
    <section className=" w-full border-2 border-y-lime-500  min-h-full flex gap-4 p-5">
      <Aside />
      <Main />
    </section>
  );
};

const Aside = () => {
  return (
    <aside className="hidden lg:flex w-64 h-[86vh] max-h-[1200px] items-center sticky top-24">
      <div className="w-full h-[98%] rounded-2xl bg-white antialiased transition-transform duration-200   border-0 shadow-xl dark:shadow-none dark:bg-slate-800 max-w-64 ease-nav-brand z-990  p-3">
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
      </div>
    </aside>
  );
};

const Main = () => {
  return (
    <main className="border-2 border-black w-full">
      <div className=" h-8 my-4"></div>
      <CardWrapper />
      <SectionWrapper />
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

const SectionWrapper = () => {
  return (
    <div className="flex flex-wrap mt-6 -mx-3 border-2 border-red-500">
      <Graph />
      <Img />
    </div>
  );
};

const Img = () => {
  return <div className=""></div>;
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
    var ctx = document.getElementById("line-chart")?.getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);

  return (
    <div className="w-full max-w-full px-2 mt-0 lg:w-7/12  lg:flex-none border-2 border-black">
      <div className="border-black/12.5 dark:bg-slate-800 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
        <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
          <h6 className="capitalize dark:text-white">Sales overview</h6>
          <p className="mb-0 leading-normal dark:text-white dark:opacity-60 text-sm">
            <i
              className="fa fa-arrow-up text-emerald-500"
              aria-hidden="true"
            ></i>
            <span className="font-semibold">4% more</span> in 2021
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
export default index;
