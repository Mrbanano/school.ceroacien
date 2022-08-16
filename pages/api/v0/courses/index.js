const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const method = req.method;
  switch (method) {
    case 'GET':
      const products = await stripe.products.list({
        limit: 9,
        expand: ['data.default_price']
      });
      res.status(200).json(products);
      break;
    default:
      res.setHeader('Allow', 'POST');
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
