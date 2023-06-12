import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NavIem } from "./nav-item";
import { GiSecretBook } from "react-icons/gi";

const NAV_ITEMS = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Personagens",
    href: "/personagens",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-header-background ">
      <div className="container flex items-center justify-between w-full mx-auto h-full max-w-7xl">
        <Link to="/">
          <div className="flex items-center justify-center  rounded-full gap-3">
            <GiSecretBook className="text-3xl text-white" />
            <h3 className="text-2xl font-bold text-white ">
              MINHAS <span className="text-red-500">.HQS</span>
            </h3>
          </div>
        </Link>
        <nav
          className={`hidden ${
            menuOpen ? "block" : "lg:flex"
          } lg:items-center lg:justify-center lg:space-x-10`}
        >
          <ul className="flex gap-4 sm:gap-10 text-white">
            {NAV_ITEMS.map((item, index) => (
              <NavIem {...item} key={index} />
            ))}
          </ul>
        </nav>

        {menuOpen && (
          <div
            className="sm:hidden absolute top-16 left-0 w-full bg-header-background text-white shadow-md py-2 
            "
          >
            <nav className="flex flex-col items-center justify-center space-y-2 ">
              <ul className="flex flex-col space-y-2 ">
                {NAV_ITEMS.map((item, index) => (
                  <li key={item.label}>
                    <NavIem {...item} key={index} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}

        <button
          className="block sm:hidden text-white hover:text-gray-300"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <HiX className="text-4xl" />
          ) : (
            <HiMenu className="text-4xl" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
