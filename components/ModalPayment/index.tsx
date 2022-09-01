import React, { useEffect } from "react";
import { Payment } from "../../utils/Payment";
import { PaymentMeli } from "../../utils/PaymentMeli";
import Classes from "./Spinner.module.css";

import { useSession } from "next-auth/react";

export default function Index({ show, handleCloseModal, course }) {
  const [ShowMeli, setShowMeli] = React.useState(false);
  const [Info, setInfo] = React.useState({
    id: "",
    Payer: {
      Name: "",
      email: "",
    },
    items: [
      {
        id: "",
        title: "",
        description: "",
        picture_url: "",
        quantity: 1,
        unit_price: 1,
      },
    ],
  });
  const [Loading, setLoading] = React.useState(false);
  const { data: session, status } = useSession();

  console.log(course?.default_price);

  useEffect(() => {
    setInfo({
      id: course?.id,
      Payer: {
        Name: session?.user?.name,
        email: session?.user?.email,
      },
      items: [
        {
          id: course?.id,
          title: course?.name,
          description: course?.description,
          picture_url: course?.images[0],
          quantity: 1,
          unit_price: Number(course?.default_price.unit_amount / 100),
        },
      ],
    });
  }, [course]);

  const Paymentmeli = async () => {
    setLoading(true);

    const payment = await PaymentMeli(Info);

    await redirectToMercadoPago(payment.id, setLoading);
  };

  return (
    <>
      {show ? (
        <main className="absolute top-0 left-0 z-[100] h-screen w-screen grid place-content-center bg-black/40">
          <section className=" mt-5 bg-white rounded-lg  w-[300px]  flex flex-col p-5">
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
                  Payment(course?.default_price, course?.default_price?.coupon);
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
                onClick={Paymentmeli}
              >
                <div>
                  {!ShowMeli && !Loading && (
                    <h2 className="font-semibold text-base">Mercado Pago</h2>
                  )}
                  {!ShowMeli && Loading && <Spinner></Spinner>}
                  {ShowMeli && !Loading && <div className="mp-container"></div>}
                </div>
                <div className="h-[50px] w-[50px]">
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
          </section>
        </main>
      ) : null}
    </>
  );
}

const Spinner = () => (
  <div className={Classes.ldsRing}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export const redirectToMercadoPago = (preferenceId: string, setLoading) => {
  const loadScript = (url: string, callback: () => void) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (script.readyState) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      script.onreadystatechange = () => {
        if (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          script.readyState === "loaded" ||
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          script.readyState === "complete"
        ) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = () => callback();
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };
  const handleScriptLoad = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mp = new window.MercadoPago(
      "TEST-0c5f9b79-d068-4e5c-9c19-3db581ec70e6",
      {
        locale: "es-MX",
      }
    );
    mp.checkout({
      preference: {
        id: preferenceId,
      },
      autoOpen: true,
    });
  };

  setLoading(false);
  loadScript("https://sdk.mercadopago.com/js/v2", handleScriptLoad);
};
