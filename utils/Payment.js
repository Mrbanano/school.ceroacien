import axios from "axios";
import getStripe from "./getStripe";

export const Payment = async (price, coupon) => {
  if (!coupon) {
    const {
      data: { id },
    } = await axios.post("/api/v0/checkout_sessions", {
      Items: [{ price: price.id, quantity: 1 }],
    });
    const stripe = await getStripe();
    await stripe.redirectToCheckout({ sessionId: id });
  } else {
    const {
      data: { id },
    } = await axios.post("/api/v0/checkout_sessions", {
      Items: [{ price: price.id, quantity: 1 }],
      Discounts: [{ coupon: coupon }],
    });
    const stripe = await getStripe();
    await stripe.redirectToCheckout({ sessionId: id });
  }
};
