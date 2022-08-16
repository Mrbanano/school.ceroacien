export const TestWrapper = ({ children }) => {
  return (
    <main className="w-screen h-screen flex flex-col md:flex-row">
      {children}
    </main>
  );
};
