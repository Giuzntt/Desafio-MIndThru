import { motion } from "framer-motion";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Banner = () => {
  const variants = {
    initial: { backgroundPosition: "center top" },
    scroll: { backgroundPosition: "center calc(50% + 50px)" },
  };

  const ScrollToView = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      id="home"
      className="bg-[url(/banner.jpg)] bg-cover bg-center bg-no-repeat"
      variants={variants}
      initial="initial"
      animate="scroll"
      style={{
        backgroundAttachment: "fixed",
        backgroundImage: "url(/banner.jpg)",
      }}
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl h-[800px] w-full">
        <div
          className=" flex flex-col justify-center h-full
        "
        >
          <div className="flex flex-col justify-center items-start gap-5">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold text-gray-50 text-start shadow-lg sm:truncate
              "
            >
              Explore o Universo Marvel
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl font-bold text-white  shadow-lg max-w-[500px] leading-relaxed
              "
            >
              Aqui você pode conhecer os personagens da Marvel
            </motion.p>
            <div className="flex items-center justify-center space-x-6">
              <Link
                to="https://www.linkedin.com/in/giulianno-zanetti/"
                target="_blank"
              >
                <FaLinkedin className="w-6 h-6 text-white hover:text-red-500" />
              </Link>

              <Link
                to="https://github.com/Giuzntt"
                target="_blank"
                className=""
              >
                <FaGithub
                  className="w-6 h-6 text-white
                hover:text-red-500
              "
                />
              </Link>

              <Link
                to="https://github.com/Giuzntt/Desafio-MIndThru"
                target="_blank"
              >
                <FaCode className="w-6 h-6 text-white hover:text-red-500" />
              </Link>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="px-8 py-3 text-lg font-bold text-white uppercase transition-all duration-200 bg-red-500 rounded shadow-lg hover:bg-red-600"
              onClick={() => ScrollToView("characters")}
            >
              Quero conhecer o universo Marvel
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
