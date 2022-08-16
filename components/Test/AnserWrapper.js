import { Answer } from './Anser';

export const AnserWrapper = ({ Answers, nextStep, addResponse }) => {
  return (
    <div className="flex flex-col gap-8  w-full text-center  p-2 ">
      {Answers.map((response, index) => {
        return <Answer key={index} Response={response} nextStep={nextStep} addResponse={addResponse} />;
      })}
    </div>
  );
};
