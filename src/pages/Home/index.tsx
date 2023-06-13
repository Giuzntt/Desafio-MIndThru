import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchCharacters,
  fetchComicsHQ,
  nextPage,
  prevPage,
} from "../../store/reducers/characterSlice";
import { motion } from "framer-motion";

import { Card } from "../../components/Card";
import { PacmanLoader } from "react-spinners";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { AppDispatch } from "../../store/store";
import { Banner } from "../../components/Banner";
import { Link } from "react-router-dom";
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

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { results, resultsComicsHQ, loading, offset, limit } = useSelector(
    (state: stateCharacter) => state?.character
  );
  const random = Math.floor(Math.random() * 20);
  useEffect(() => {
    // generate random integer between 0 and 20

    dispatch(fetchComicsHQ(random.toString()));
    dispatch(fetchCharacters({ offset, limit }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, limit]);

  return (
    <>
      <Banner />
      <section className="text-gray-600 body-font" id="characters">
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl ">
            <div className="flex items-end justify-between">
              <div className="flex-1 text-center lg:text-left mb-5">
                <motion.h2
                  className="text-3xl font-bold leading-tight text-red-500 sm:text-4xl lg:text-5xl uppercase"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  HQs - Comics
                </motion.h2>
                <motion.p
                  className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0 font-american_captain"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Acabou de sair do forno, confira as novidades da Marvel.
                </motion.p>
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
                    <Link to={`/comic/${item.id}`}>
                      <img
                        className="object-cover rounded-lg w-full h-full sm:h-72 md:h-80 lg:h-96"
                        loading="lazy"
                        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                        alt=""
                      />
                      <h3 className="mt-2 text-xl font-bold leading-tight text-center text-red-500 sm:text-2xl">
                        {item.title}
                      </h3>
                    </Link>
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
                <HiArrowLeft />
              </button>

              <button
                type="button"
                className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white"
              >
                <HiArrowRight />
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
