import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchCharacters,
  fetchComicsHQ,
  nextPage,
  prevPage,
} from "../../store/reducers/characterSlice";
import { Card } from "../../components/Card";
import { PacmanLoader } from "react-spinners";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { AppDispatch } from "../../store/store";
interface ResultsCharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  modified: string;
  title: string;
}

interface stateCharacter {
  character: {
    results: ResultsCharacter[];
    resultsComicsHQ: ResultsCharacter[];
    loading: boolean;
    offset: number;
    limit: number;
  };
}

export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { results, resultsComicsHQ, loading, offset, limit } = useSelector(
    (state: stateCharacter) => state?.character
  );

  useEffect(() => {
    dispatch(fetchComicsHQ());
    dispatch(fetchCharacters({ offset, limit }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, limit]);

  return (
    <>
      <section className="text-gray-600 body-font">
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl ">
            <div className="flex items-end justify-between">
              <div className="flex-1 text-center lg:text-left mb-5">
                <h2 className="text-3xl font-bold leading-tight text-red-500 sm:text-4xl lg:text-5xl  uppercase ">
                  HQs - Comics
                </h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0 font-american_captain">
                  Acabou de sair do forno, confira as novidades da Marvel.
                </p>
              </div>
            </div>

            <div
              className="grid  gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:max-w-full
            
            "
            >
              {loading ? (
                <div className="flex flex-col items-center justify-center w-full my-5">
                  <PacmanLoader color="#EF4444" />
                  <h1 className="text-3xl font-bold text-center text-red-500">
                    Carregando...
                  </h1>
                </div>
              ) : (
                resultsComicsHQ.map((item: ResultsCharacter) => (
                  <div
                    key={item.id}
                    className="w-full h-full overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-2xl
              "
                  >
                    <img
                      className="object-cover rounded-lg w-full h-full sm:h-72 md:h-80 lg:h-96"
                      loading="lazy"
                      src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                      alt=""
                    />
                    <h3 className="mt-2 text-xl font-bold leading-tight text-center text-red-500 sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                ))
              )}
            </div>

            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-between mt-8 space-x-3 ">
                <h2 className="text-3xl font-bold leading-tight text-red-500 sm:text-4xl lg:text-5xl  uppercase ">
                  Personagens
                </h2>
                <div className=" lg:flex lg:items-center lg:space-x-3">
                  <button
                    type="button"
                    className={`flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-red-600 hover:text-white focus:bg-red-600 
                    ${
                      offset === 0 &&
                      "cursor-not-allowed bg-gray-300 hover:bg-gray-300"
                    }
              `}
                    onClick={() => {
                      dispatch(prevPage(1));
                    }}
                    disabled={offset === 0 || loading}
                  >
                    <HiArrowLeft />
                  </button>
                  {offset === 0 ? (
                    <p className="text-gray-400">1</p>
                  ) : (
                    <p className="text-gray-400">{offset + 1}</p>
                  )}
                  <button
                    type="button"
                    className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white"
                    onClick={() => {
                      dispatch(nextPage(1));
                    }}
                    disabled={loading}
                  >
                    <HiArrowRight />
                  </button>
                </div>
              </div>

              <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0 font-american_captain">
                Conheça os personagens da Marvel.
              </p>
            </div>
            <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
              {loading ? (
                <div className="flex flex-col items-center justify-center w-full my-5">
                  <PacmanLoader color="#EF4444" />
                  <h1 className="text-3xl font-bold text-center text-red-500">
                    Carregando...
                  </h1>
                </div>
              ) : (
                results.map((item: ResultsCharacter) => (
                  <div key={item.id}>
                    <Card
                      title={item.name}
                      description={item.description}
                      image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                      date={item.modified}
                      to={`/character/${item.id}`}
                    />
                  </div>
                ))
              )}
            </div>

            <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
              <button
                type="button"
                className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white"
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
                className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white"
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
    </>
  );
};
