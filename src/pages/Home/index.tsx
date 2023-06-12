import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCharacters } from "../../store/reducers/characterSlice";
import { Card } from "../../components/Card";
import { PacmanLoader } from "react-spinners";
interface ResultsCharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  modified: string;
}

export const Home = () => {
  const dispatch = useDispatch();
  const { results, loading } = useSelector((state: any) => state?.character);
  console.log(results);
  console.log(loading);

  useEffect(() => {
    dispatch(fetchCharacters() as any);
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-end justify-between">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl font-bold leading-tight text-red-500 sm:text-4xl lg:text-5xl  uppercase ">
                Ultimos lançamentos
              </h2>
              <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0 font-american_captain">
                Acabou de sair do forno, os ultimos lançamentos de HQs.
              </p>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-3">
              <button
                type="button"
                className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                type="button"
                className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center w-full my-5">
              <PacmanLoader color="#EF4444" />
              <h1 className="text-3xl font-bold text-center text-red-500">
                Carregando...
              </h1>
            </div>
          ) : (
            <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
              {results.map((item: ResultsCharacter) => (
                <div key={item.id}>
                  <Card
                    title={item.name}
                    description={item.description}
                    image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    date={item.modified}
                    to={`/character/${item.id}`}
                  />
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
            <button
              type="button"
              className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              type="button"
              className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};
