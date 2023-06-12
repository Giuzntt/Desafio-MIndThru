import { Link } from "react-router-dom";

interface ActionButtonProps {
  icon: React.ReactNode;
  title: string;
  to: string;
}

const ActionButton = ({ icon, title = "", to }: ActionButtonProps) => {
  return (
    <Link to={to}>
      <button
        type="button"
        className="flex items-center justify-center text-2xl uppercase text-red-500 gap-3"
      >
        {icon} {title}
      </button>
    </Link>
  );
};

export default ActionButton;
