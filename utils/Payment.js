import axios from 'axios';
import getStripe from './getStripe';

export const Payment = async price => {
  const {
    data: { id }
  } = await axios.post('/api/v0/checkout_sessions', {
    Items: [{ price: price.id, quantity: 1 }]
  });

  const stripe = await getStripe();
  await stripe.redirectToCheckout({ sessionId: id });
};
