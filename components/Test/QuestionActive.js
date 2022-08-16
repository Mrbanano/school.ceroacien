export const QuestionActive = ({ text = '', color = '#ff881d', step = '1', length = '8', font }) => {
  return (
    <div className="h-full w-full grid place-items-center relative" style={{ background: color }}>
      <span className="absolute top-5 font-bold" style={{ color: font }}>{`${step}/${length}`}</span>
      <h1 className="border-2 border-transparent text-3xl font-bold text-center" style={{ color: font }}>
        {text}
      </h1>
    </div>
  );
};
