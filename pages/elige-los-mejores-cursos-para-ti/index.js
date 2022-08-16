import Test from "../../components/Test/Test";

export default function Index() {
  return (
    <Test
      questionnaire={questionnaire}
      evalfuncion={evalfuncion}
      title="Recomendacion de cursos | ceroacien"
    />
  );
}

const evalfuncion = (responses) => {
  let total = 0;
  responses.forEach((response) => {
    total += response.value;
  });
  return total;
};

const questionnaire = [
  {
    Question: "¿Cómo te gusta aprender?",
    Answers: [
      {
        text: "Disfruto la teoría. ",
        value: 9,
      },
      {
        text: "Aprendo haciendo.",
        value: 10,
      },
    ],
  },
  {
    Question: "¿Qué frase de define más?",
    Answers: [
      {
        text: "Me gusta seguir las reglas.",
        value: 9,
      },
      {
        text: "Invento mis propias reglas.",
        value: 10,
      },
    ],
  },
  {
    Question: "¿Con qué actividad pasarías un buen rato?",
    Answers: [
      {
        text: "Resolviendo rompecabezas.",
        value: 10,
      },
      {
        text: "Investigando nuevos temas.",
        value: 9,
      },
      {
        text: "Creando nuevas historias.",
        value: 8,
      },
    ],
  },
  {
    Question: "¿Cómo solucionas un problema? ",
    Answers: [
      {
        text: "Lo resuelvo a la primera.",
        value: 9,
      },
      {
        text: " Lo divido en partes.",
        value: 10,
      },
    ],
  },
  {
    Question: "Si tu vida fuera una película ¿qué genero sería?",
    Answers: [
      {
        text: "Acción",
        value: 10,
      },
      {
        text: "Drama",
        value: 9,
      },
      {
        text: "Documental",
        value: 9,
      },
    ],
  },
  {
    Question: "Si tuvieras que elegir un objeto, ¿Cuál elegirías?",
    Answers: [
      {
        text: "Una pintura.",
        value: 9,
      },
      {
        text: "Una lente de aumento.",
        value: 8,
      },
      {
        text: "Un cohete.",
        value: 10,
      },
    ],
  },
  {
    Question: "¿Cómo armarías algo?",
    Answers: [
      {
        text: "Siguiendo las instrucciones puntualmente.",
        value: 8,
      },
      {
        text: "Buscaría las solución de alguien más.",
        value: 9,
      },
      {
        text: "Comienzo pronto y ajusto mientras avanzo.",
        value: 10,
      },
    ],
  },
  {
    Question: "¿Con qué palabra te identificas más? ",
    Answers: [
      {
        text: "Pinturas.",
        value: 9,
      },
      {
        text: "Sistemas.",
        value: 10,
      },
      {
        text: "Historias.",
        value: 8,
      },
    ],
  },
];
