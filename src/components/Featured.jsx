import { motion, useAnimation } from "framer-motion";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div data-scroll data-scroll-section className="w-full py-20 bg-gray-500">
      <div className="w-full px-20 pb-20 border-b-[1px] border-zinc-700">
        <h1 className="text-6xl font-['gotham'] font-light tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20 mt-10">
        <div className="cards w-full flex gap-20">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            <h1 className="absolute flex overflow-hidden left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] -pb-20 leading-none text-9xl font-['gotham'] font-medium tracking-tightest uppercase text-[#CDEA68]">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.76, 0, 0.24, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative  w-1/2 h-[80vh]"
          >
            <h1 className="absolute flex overflow-hidden right-full top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] -pb-20 leading-none text-9xl font-['gotham'] font-medium tracking-tightest uppercase text-[#CDEA68]">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.76, 0, 0.24, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
