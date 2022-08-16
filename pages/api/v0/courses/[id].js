const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const method = req.method;
  switch (method) {
    case 'GET':
      const id = req.query.id;
      const product = await stripe.products.retrieve(id, {
        expand: ['default_price']
      });
      const extra = { ...courseItem[id] };
      res.status(200).json({ ...product, extra: { ...extra } });
      break;
    default:
      res.setHeader('Allow', 'POST');
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

const courseItem = {
  prod_M3QQuIyzvHyCtU: {
    media: 'https://embed.api.video/vod/vi3bK2TskGSPrgUPotyMLhzi',
    tutor: {
      Name: 'Lorenzo Carasco',
      Img: 'https://media-exp1.licdn.com/dms/image/C5603AQED5Y32jEo_Ow/profile-displayphoto-shrink_800_800/0/1656984814224?e=1663200000&v=beta&t=YVSo51NSQFTHWd8bAlVeVe7QgDywIX8WDI-9BFYmNyw',
      Description: 'COO of Ceroacien'
    },
    temary: {
      'Bloque 1': ['Aspectos básicos de python', 'Introduccion al curso'],
      'Bloque 2': ['Hacer preguntas y procesar datos', 'Continuacion de excel'],
      'Bloque 3': ['Analisis de datos', 'SQL'],
      'Bloque 4': ['Visualizacion de datos', 'Tableau', 'R'],
      'Bloque 5': ['Analisis de datos usuando Python', 'Pandas', 'NumPy'],
      'Bloque 6': ['Imercion', 'Ejercicios de repaso general']
    }
  },
  prod_M2wcHFPlwjpthz: {
    media: 'https://embed.api.video/vod/vit9NZc2UmlnsEHnHGbR9hS',
    tutor: {
      Name: 'Alvaro Castillo',
      Img: 'https://media-exp1.licdn.com/dms/image/C5603AQGj9ezXAiLL3w/profile-displayphoto-shrink_400_400/0/1656728608909?e=1665619200&v=beta&t=HIIheRCMIubEGl2Pzne2_P20UANM4O9LJFx835sg3wU',
      Description: 'CTO of Ceroacien'
    },
    temary: {
      'Bloque 1': ['¿Qué es JavaScript?', 'Introducción al curso'],
      'Bloque 2': ['', ''],
      'Bloque 3': ['', ''],
      'Bloque 4': ['', '', ''],
      'Bloque 5': ['', '', ''],
      'Bloque 6': ['', '']
    }
  }
};
