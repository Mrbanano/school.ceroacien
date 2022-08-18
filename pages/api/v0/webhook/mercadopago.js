import axios from "axios";
import { getSession } from "next-auth/react";
import { authOptions } from "../../auth/[...nextauth]";

const APIPayment = "https://api.mercadopago.com/v1/payments/";
const Secret =
  "TEST-2226779630330778-081701-125b1741056593e450f86d49bf105082-828901094";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { data } = req.body;
    const session = await getSession({ req });
    console.log("session data is always null", session);
    res.json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
