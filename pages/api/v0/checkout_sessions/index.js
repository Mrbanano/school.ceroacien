import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handle(req, res) {
  if (req.method === "POST") {
    try {
      const { Items, Discounts } = req.body;
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items: req?.body?.Items ?? [],
        discounts: req?.body?.Discounts ?? [],
        success_url: `${req.headers.origin}/profile`,
        cancel_url: `${req.headers.origin}/home`,
      });

      res.status(200).json(session);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
