import Stripe from "stripe";
import { buffer } from "micro";
import { ToSaveCourse } from "../../../../utils/Savecourse";
import axios from "axios";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  let data;

  if (req.method === "POST") {
    let event;
    let product;
    try {
      // 1. Retrieve the event by verifying the signature using the raw body and secret
      const rawBody = await buffer(req);
      data = JSON.parse(rawBody.toString());
      const signature = req.headers["stripe-signature"];
      event = stripe.webhooks.constructEvent(
        rawBody.toString(),
        signature,
        process.env.NEXT_endpoint_secret
      );
    } catch (err) {
      console.log(`❌ Error message: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    console.log("✅ Success:", event.id);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const { line_items } = await stripe.checkout.sessions.retrieve(
        session.id,
        {
          expand: ["line_items"],
        }
      );
      product = line_items[0].product;
    } else {
      console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
    }

    const email = event.data.object.customer_details.email;

    try {
      const { data } = await axios.post(
        `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/v0/webhook`,
        {
          email: "6666alvaro666@gmail.com",
          course: "prod_M3QQuIyzvHyCtU",
        }
      );
      res.status(200).json({ received: true });
    } catch (error) {
      console.log(error)
      res.status(200).json({ received: true });
    }

  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
