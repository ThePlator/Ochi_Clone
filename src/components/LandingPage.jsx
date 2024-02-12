import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-52 px-20 mb-60">
        {["we create", "eye opening", "presentation"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1] }}
                    className="w-[9vw] h-[6vw] bg-red-500 rounded-lg"
                  ></motion.div>
                )}
                <h1
                  key={index}
                  className="text-[7vw] leading-[6vw] tracking-tightest font-bold uppercase font-['century_gothic']"
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-xl font-light tracking-light leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-700 uppercase text-xl font-light rounded-full">
            Start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1.5px] border-zinc-700 rounded-full">
            <span className="rotate-[-45deg]">
              <IoArrowForward />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
