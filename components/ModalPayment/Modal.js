import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const Modal = () => {
  MySwal.fire({
    position: "center",
    html: `<section className=" mt-5 bg-white rounded-lg  w-[300px]  flex flex-col p-5">
            <div className="w-full flex flex-row items-center justify-between ">
              <h1 className="text-lg font-bold text-primary">
                ¿Cómo quieres pagar?
              </h1>
              <span
                className="w-[30px] h-[30px] grid place-content-center"
                onClick={() => {
                  handleCloseModal();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </span>
            </div>
            <div className=" py-4 flex flex-col gap-4 ">
              <button
                className="border-2 border-black/50 w-full flex items-center justify-between p-1 px-3 rounded-lg"
                onClick={() => {
                  Payment(course?.default_price);
                }}
              >
                <h2 className="font-semibold text-base">Stripe</h2>
                <div className=" h-[50px] w-[50px]">
                  <img
                    src={"https://i.postimg.cc/wjX0QHP8/stripe.png"}
                    alt="Profile"
                    width="100%"
                    height="100%"
                    className="aspect-ratio-1/1"
                  />
                </div>
              </button>
              <button
                className="border-2 border-black/50 w-full flex items-center justify-between p-1 px-3 rounded-lg"
                onClick={() => {
                  alert(JSON.stringify(course));
                }}
              >
                <h2 className="font-semibold text-base">Mercado Pago</h2>
                <div className=" h-[50px] w-[50px]">
                  <img
                    src={"https://i.postimg.cc/3JyqpsYY/mercadopago-1.png"}
                    alt="Profile"
                    width="100%"
                    height="100%"
                    className="aspect-ratio-1/1"
                  />
                </div>
              </button>
            </div>
          </section>`,
    showConfirmButton: false,
    timer: 10000,
    showCloseButton: true,
  });
};
