import { Link } from "react-router-dom";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = (): JSX.Element => {
  return (
    <footer className=" py-8 bg-header-background mx-auto">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl ">
        <div className="flex items-end justify-between">
          <h1 className="text-xl font-american_captain text-white text-center">
            © 2023 - Desenvolvido por Giulianno Zanetti
          </h1>

          <div className="flex items-center justify-center space-x-6">
            <Link
              to="https://www.linkedin.com/in/giulianno-zanetti/"
              target="_blank"
            >
              <FaLinkedin className="w-6 h-6 text-white hover:text-red-500" />
            </Link>

            <Link to="https://github.com/Giuzntt" target="_blank" className="">
              <FaGithub
                className="w-6 h-6 text-white
                hover:text-red-500
              "
              />
            </Link>

            <Link
              to="https://github.com/Giuzntt/Desafio-MIndThru"
              target="_blank"
            >
              <FaCode className="w-6 h-6 text-white hover:text-red-500" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
