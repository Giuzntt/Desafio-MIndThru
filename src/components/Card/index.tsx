import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  to: string;
}

export const Card = ({ title, date, description, image, to }: CardProps) => {
  return (
    <div className="overflow-hidden bg-white rounded shadow">
      <div className="p-5">
        <div className="relative">
          <a href="#" title="" className="block aspect-w-4 aspect-h-3">
            <img className="object-cover w-full h-full" src={image} alt="" />
          </a>

          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
              {" "}
              {title}
            </span>
          </div>
        </div>
        <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
          {" "}
          {new Intl.DateTimeFormat("pt-BR", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }).format(new Date(date))}
        </span>
        <p className="mt-5 text-2xl font-semibold">
          <a href="#" title="" className="text-black">
            {" "}
            {title}
          </a>
        </p>
        <p className="mt-4 text-base text-gray-600">
          {description.length > 200
            ? description.substring(0, 200) + "..."
            : description}
        </p>
        <Link
          to={to}
          title=""
          className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
        >
          Continue lendo
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
