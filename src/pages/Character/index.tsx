import { HiArrowNarrowLeft, HiInformationCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { fetchCharacterId } from "../../store/reducers/characterSlice";
import { isEmpty } from "lodash";
import ActionButton from "../../components/ActionButton";
import { PacmanLoader } from "react-spinners";
import { AppDispatch } from "../../store/store";

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  modified: string;
  urls: {
    type: string;
    url: string;
  }[];
  series: {
    items: {
      name: string;
    }[];
  };
  stories: {
    items: {
      name: string;
    }[];
  };
}

interface StateCharacterId {
  character: {
    loading: boolean;
    resultsCharacterId: Character[];
  };
}

const Character = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, resultsCharacterId } = useSelector(
    (state: StateCharacterId) => state?.character
  );

  console.log(resultsCharacterId);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      dispatch(fetchCharacterId(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <section className="container mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 h-screen w-screen my-5">
      <div className="flex items-center justify-start">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center justify-center  uppercase text-3xl font-semibold text-gray-600 transition-all duration-200 bg-transparent border border-none    hover:text-red-600 focus:bg-red-600 focus:text-white
          "
        >
          <HiArrowNarrowLeft className="text-3xl" />
          Voltar
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <PacmanLoader color="#e23636" size={50} />
        </div>
      ) : (
        resultsCharacterId.map((item: Character) => (
          <div
            className="grid   md:grid-cols-2 lg:grid-cols-2 gap-4  sm:grid-cols-1"
            key={item.id}
          >
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {item.name} - Ultima atualização:{" "}
                  {new Intl.DateTimeFormat("pt-BR", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  }).format(new Date(item.modified))}
                </div>
                <p className="text-gray-700 text-base">
                  {isEmpty(item.description)
                    ? "Sem descrição"
                    : item.description}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {item.urls.map((item) => (
                  <ActionButton
                    key={item.type}
                    title={item.type}
                    to={item.url}
                    icon={<HiInformationCircle className="text-2xl" />}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full ">
              <h3 className="text-3xl font-bold text-red-600">
                Participou em quais séries?
              </h3>

              {item.series.items.map((item) => (
                <p className="text-gray-600 leading-relaxed w-full">
                  {item.name}
                </p>
              ))}

              <h3 className="text-2xl font-semibold text-gray-600">
                Histórias
              </h3>

              {item.stories.items.map((item) => (
                <p className="text-gray-600 leading-relaxed w-full">
                  {item.name}
                </p>
              ))}
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default Character;
