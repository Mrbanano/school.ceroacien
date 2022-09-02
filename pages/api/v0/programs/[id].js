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
    media: "https://cdn.api.video/vod/vi6W3isNC9twHa7u5M0z5nCX/mp4/source.mp4",
    tutor: {
      Name: "Carlos Valerio",
      Img: "https://media-exp1.licdn.com/dms/image/C5603AQE92-riLYll0A/profile-displayphoto-shrink_800_800/0/1656821470626?e=1666224000&v=beta&t=8YXYW_P8d3y0sZ1qQI7nhMdTR9iGs-NCIN2SnDub5nA",
      Description: "CEO of Ceroacien",
    },
    StartDate: "26 de Septiembre",
    temary: {
      "Ingles técnico": [
        "Abreviaciones en el trabajo ",
        "Ingles modificado",
        "Clasificaciones",
        "posiciones",
        "puestos y departamentos",
        "El día a día de un programador",
        "Términos y neologismos",
        "Introducción al curso",
      ],
      "Como buscar empleo en Tech ": [
        "Ikigai, tu pilar fundamental",
        "Define que puesto va contigo",
        "Busca trabajo en distintas bases de datos",
        "Ejercicio practico",
      ],
      CV: [
        "Como crear un buen CV para Tech",
        "Como crear un buen perfil de LinkedIn",
        "Como armar una buena carta de presentación",
        "Marca personal",
      ],
      "Como abordar una entrevista de trabajo": [
        "Pre-entrevista",
        "Define tu rol",
        "Investiga tu rol y a la la empresa a la que aplicas",
        "Anticipa todas las preguntas",
        "Consejos previos",
        "Remote Interviews Requirementes Checklist",
        "Face to Face Interviews",
        "Ejercicio practico",
        "Entrevistas y sus tipos",
        "Terminos importantes",
        "Consejos generales",
        "Remote interviews",
        "Behavioral interview ",
      ],
      "Puesto laboral": [
        "Puestos",
        "Organización empresarial",
        "Vocabulario de trabajo",
        "Presentación Step by Step ",
        "Canales de comunicación",
        "Comunicación efectiva",
        "Características del Feedback efectivo",
        "Como dar Feedback efectivo",
        "Como recibir Feedback",
        "Liderazgo y equipo",
        "Trabajo acertado en equipo",
        "Comportate, hay reunion",
        "Características de un líder",
        "Estrés laboral",
        "Qué lo provoca",
        "Cómo tu lo identificas",
        "Cómo enfrentarlo",
        "Conflictos",
        "Causas",
        "Cómo afrontarlo",
        "Cómo llegar a un acuerdo",
        "Comunicacion no violenta",
        "Frases comunes",
        "Propuestas de negociación",
        "10. Trabajo internacional",
        "Desafíos",
        "6 consejos para mejorarlo",
        "Conversaciones por teléfono y sesión virtual",
        "Caso Llamada telefónica",
      ],
      "Salida laboral": [
        "Rechazo, como aceptarlo",
        "Manejando el rechazo",
        "5 consejos para lidiar con el rechazo",
        "Rechazo, plataforma hacia el futuro",
        "Mente proactiva y mentalidad de cambio",
        "Crea tu marca personal",
        "Análisis de mercado y Networking",
        "Prepara el CV",
        "Repite el proceso",
      ],
    },
  },
};
