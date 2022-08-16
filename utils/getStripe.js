import { loadStripe } from "@stripe/stripe-js";

let stripePromise = null;

export default function getStripe() {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE);
  }
  return stripePromise;
}
