import { Link } from "react-router-dom";

interface NavItemProps {
  label: string;
  to?: string;
}

export const NavIem = ({ label, to = "/" }: NavItemProps) => {
  return (
    <Link
      to={to}
      className="text-gray-100 hover:text-gray-500 font-american_captain uppercase font-semibold"
    >
      {label}
    </Link>
  );
};
