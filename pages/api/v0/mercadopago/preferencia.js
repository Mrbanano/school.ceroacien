// SDK de Mercado Pago
const mercadopago = require("mercadopago");

mercadopago.configure({
  integrator_id: "dev_34817c18261511eca84a0242ac130004",
  access_token:
    "TEST-2226779630330778-081701-125b1741056593e450f86d49bf105082-828901094",
});

export default async function handler(req, res) {
  const method = req.method;
  switch (method) {
    case "POST":
      const url = req.headers.host;
      const { info } = req.body;

      let preference = {
        external_reference: info.id,
        items: info.items,
        back_urls: {
          success: `http://${url}/profile`,
          failure: `http://${url}courses`,
          pending: `http://${url}/home`,
        },
        payment_methods: {
          excluded_payment_types: [
            {
              id: "ticket",
            },
            {
              id: "atm",
            },
            {
              id: "bank_transfer",
            },
            {
              id: "paypal",
            },
          ],
          installments: 12,
        },
        auto_return: "approved",
        binary_mode: true,
      };
      mercadopago.preferences
        .create(preference)
        .then(function (response) {
          res.json({
            id: response.body.id,
          });
        })
        .catch(function (error) {
          console.log(error);
          res.json({
            error: error,
          });
        });
      break;
    default:
      res.setHeader("Allow", method);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
