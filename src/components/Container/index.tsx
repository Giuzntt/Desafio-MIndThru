interface LayoutProps {
  children: React.ReactNode;
}

const Container = ({ children }: LayoutProps) => {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
  );
};

export default Container;
