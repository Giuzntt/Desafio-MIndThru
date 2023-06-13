interface NavItemProps {
  label: string;
  to?: string;
}

export const NavIem = ({ label, to = "/" }: NavItemProps) => {
  const ScrollToView = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button
      onClick={() => ScrollToView(to)}
      className="text-gray-100 hover:text-gray-500 font-american_captain uppercase font-semibold
        cursor-pointer
      "
    >
      {label}
    </button>
  );
};
