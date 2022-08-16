export const TestRight = ({ children, color }) => {
  return (
    <section className="h-1/2 grid place-items-center p-7 py-10 md:w-1/2 md:h-screen" style={{ background: color }}>
      {children}
    </section>
  );
};
