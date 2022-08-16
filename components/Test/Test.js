import Head from "next/head";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { AnserWrapper } from "./AnserWrapper";
import { Presentation } from "./Presentation";
import { QuestionActive } from "./QuestionActive";
import { ResponseActive } from "./ResponseActive";
import { TestLeft } from "./TestLeft";
import { TestRight } from "./TestRight";
import { TestWrapper } from "./TestWrapper";

export default function Test({ questionnaire = [], evalfuncion, title }) {
  const [step, setStep] = useState(0);
  const [questionActive, setQuestionActive] = useState(questionnaire[step]);
  const [finished, setFinished] = useState(false);
  const [responses, setResponses] = useState([]);
  const [initTest, setInitTest] = useState(true);

  const router = useRouter();

  const StartTest = () => {
    setInitTest(false);
    setStep(0);
  };

  useEffect(() => {
    if (finished) {
      const Result = evalfuncion(responses);

      if (Result > 0 && Result <= 69)
        router.push(`/elige-los-mejores-cursos-para-ti/Buscador-de-la-verdad`);
      if (Result >= 70 && Result <= 72)
        router.push(
          `/elige-los-mejores-cursos-para-ti/Una-gran-historia-por-contantar`
        );
      if (Result >= 73 && Result <= 78)
        router.push(
          `/elige-los-mejores-cursos-para-ti/Creando-un-camino-donde-no-lo-hay`
        );
      if (Result >= 79)
        router.push(
          `/elige-los-mejores-cursos-para-ti/Construyendo-un-mejor-futuro-para-todos`
        );
    }
  }, [finished]);

  const nextStep = () => {
    if (step === questionnaire.length - 1) {
      setFinished(true);
      return;
    }

    if (step <= questionnaire.length - 1) {
      setStep(step + 1);
      setQuestionActive(questionnaire[step + 1]);
    }
  };

  const addResponse = (response) => {
    setResponses([...responses, response]);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="recomendacion de cursos para oriental tu carrera profesional"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {initTest && <Presentation StartTest={StartTest} />}
      {!initTest && !finished && (
        <TestWrapper>
          <TestLeft>
            <QuestionActive
              text={questionActive?.Question}
              step={step + 1}
              length={questionnaire?.length}
              color="#403BF9"
              font="#fff"
            />
          </TestLeft>
          <TestRight color={"#f7f7f7"}>
            <ResponseActive>
              <AnserWrapper
                Answers={questionActive?.Answers || []}
                nextStep={nextStep}
                addResponse={addResponse}
              />
            </ResponseActive>
          </TestRight>
        </TestWrapper>
      )}
    </>
  );
}
