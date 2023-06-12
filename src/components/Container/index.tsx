interface LayoutProps {
  children: React.ReactNode;
}

const Container = ({ children }: LayoutProps) => {
  return (
    <main
      className="container my-6 mx-auto px-4 md:px-12 
    "
    >
      {children}
    </main>
  );
};

export default Container;
