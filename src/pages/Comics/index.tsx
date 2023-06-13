import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { AppDispatch } from "../../store/store";
import { HiArrowLeft, HiInformationCircle } from "react-icons/hi";
import { useEffect } from "react";
import { fetchComicsHQId } from "../../store/reducers/characterSlice";
import { isEmpty } from "lodash";
import ActionButton from "../../components/ActionButton";
import { PacmanLoader } from "react-spinners";

interface Comic {
  id: number;
  title: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  creators: {
    items: {
      name: string;
      role: string;
    }[];
  };
  prices: {
    type: string;
    price: number;
  }[];
  series: {
    resourceURI: string;
    name: string;
  };
  urls: {
    type: string;
    url: string;
  }[];
  images: {
    path: string;
    extension: string;
  }[];
}

interface StateComics {
  character: {
    resultsComicsHQId: Comic[];
    loading: boolean;
  };
}

const Comics = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { resultsComicsHQId, loading } = useSelector(
    (state: StateComics) => state?.character
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchComicsHQId(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <section className="container mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 h-full w-full my-5">
      <div className="flex items-center justify-start my-5">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center justify-center gap-3 uppercase text-3xl font-semibold text-gray-600 transition-all duration-200 bg-transparent border border-none    hover:text-red-600  
          "
        >
          <HiArrowLeft className="text-3xl" />
          Voltar
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center">
          <PacmanLoader color="#EF4444" />
        </div>
      ) : (
        <>
          {resultsComicsHQId.map((item: Comic) => (
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
                    {item.title} - Ultima atualização:{" "}
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

                {
                  <p className="gap-2 text-gray-600 leading-relaxed ">
                    {item.series.name}
                  </p>
                }
                <h3 className="text-2xl font-semibold text-gray-600">
                  Criadores
                </h3>
                <div className="flex flex-col gap-2">
                  {item.creators.items.map((item) => (
                    <p className="gap-2 text-gray-600 leading-relaxed ">
                      {item.name} - {item.role}
                    </p>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold text-gray-600">
                  Valores
                </h3>
                <div className="flex flex-col gap-2">
                  {item.prices.map((item) => (
                    <p className="gap-2 text-gray-600 leading-relaxed ">
                      {item.type === "printPrice"
                        ? "Preço de impressão"
                        : "Preço digital"}
                      :{" "}
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(item.price)}
                    </p>
                  ))}
                </div>
                <h3 className="text-2xl font-semibold text-gray-600">
                  HQ's - Imagens
                </h3>
                <div className="flex flex-col gap-2">
                  {item.images.map((item) => (
                    <img
                      className=" object-cover w-full h-96 
                  "
                      src={`${item.path}.${item.extension}`}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </section>
  );
};

export default Comics;
