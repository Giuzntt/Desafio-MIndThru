const Footer = (): JSX.Element => {
  return (
    <footer
      className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-header-background
    "
    >
      <div className="flex justify-between items-center border-t-2 border-gray-200 py-8 md:justify-start md:space-x-10 max-w-7xl">
        <div className="flex justify-start space-x-6 md:order-2">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
          </a>
        </div>
        <div className="md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; 2021 Tailwind Labs Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
