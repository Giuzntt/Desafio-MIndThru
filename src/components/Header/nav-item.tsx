import { useLocation } from "react-router";
import { Link } from "react-router-dom";

interface NavItemProps {
  label: string;
  to?: string;
  href?: string;
}

export const NavIem = ({ label, to = "/", href = "/" }: NavItemProps) => {
  const location = useLocation();

  const ScrollToView = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return location.pathname === "/" ? (
    <button
      onClick={() => ScrollToView(to)}
      className="text-gray-100 hover:text-gray-500 font-american_captain uppercase font-semibold
        cursor-pointer
      "
    >
      {label}
    </button>
  ) : (
    <Link
      to={href}
      className="text-gray-100 hover:text-gray-500 font-american_captain uppercase font-semibold"
    >
      {label}
    </Link>
  );
};
