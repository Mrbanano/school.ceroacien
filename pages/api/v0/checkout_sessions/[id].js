import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handle(req, res) {
  const id = req.params.id;

  try {
    if (!id.startsWith("cs_")) {
      throw new Error("Invalid Checkout Session ID");
    }
    const session = await stripe.checkout.sessions.retrieve(id);
    res.status(200).json(session);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
