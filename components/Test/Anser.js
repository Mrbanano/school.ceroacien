export const Answer = ({ Response, nextStep, addResponse }) => {
  const handleResponse = () => {
    addResponse(Response);
    nextStep();
  };
  return (
    <div
      className="border-2 bg-white px-9 py-6 md:py-8 md:px-14 hover:border-2 hover:border-primary hover:underline hover:decoration-solid hover:text-white hover:bg-primary transition duration-200 ease-in-out "
      onClick={handleResponse}>
      <p className="md:text-2xl">{Response.text}</p>
    </div>
  );
};
