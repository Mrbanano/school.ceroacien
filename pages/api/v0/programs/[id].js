const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const method = req.method;
  switch (method) {
    case "GET":
      const id = req.query.id;
      const product = await stripe.products.retrieve(id, {
        expand: ["default_price"],
      });
      const extra = { ...ProgramsItem[id] };
      res.status(200).json({ ...product, extra: { ...extra } });
      break;
    default:
      res.setHeader("Allow", "POST");
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

const ProgramsItem = {
  prod_MLmBPGedrKpcI2: {
    media: "https://embed.api.video/vod/vi98Hkfb2MNnO1q4MuhawJQ",
    tutor: {
      Name: "Carlos Valerio",
      Img: "https://media-exp1.licdn.com/dms/image/C5603AQE92-riLYll0A/profile-displayphoto-shrink_800_800/0/1656821470626?e=1666224000&v=beta&t=8YXYW_P8d3y0sZ1qQI7nhMdTR9iGs-NCIN2SnDub5nA",
      Description: "CEO of Ceroacien",
    },
    temary: {
      "Bloque 1": ["¿Qué es JavaScript?", "Introducción al curso"],
      "Bloque 2": ["", ""],
      "Bloque 3": ["", ""],
      "Bloque 4": ["", "", ""],
      "Bloque 5": ["", "", ""],
      "Bloque 6": ["", ""],
    },
  },
};
