interface Header {
  children: React.ReactNode;
}

const Header = () => {
  return (
    <header className="bg-gray-700 h-16 flex justify-between items-center px-4 sm:px-6 lg:px-8">
      <nav className=" lex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img
            src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg"
            alt="Workflow"
            className="fill-current h-8 w-8 mr-2"
          />
          <span className="font-semibold text-xl tracking-tight">
            Tailwind CSS
          </span>
        </div>

        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 0h20v20H0z" fill="none" />
              <path d="M0 4h20v1.5H0zM0 9.5h20V11H0zM0 15h20v1.5H0z" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
