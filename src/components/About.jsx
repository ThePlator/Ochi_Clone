const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-[#172210]">
      <h1 className="text-[3vw] leading-[3.5vw] font-[franklin_gothic_book] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex gap-5 pt-10 border-t-[1px] mt-20 border-[#172210]">
        <div className="w-1/2">
          <h1 className="text-7xl text-[#172210] pt-10">Our approach</h1>
          <button className="flex gap-10 items-center px-10 py-6 bg-zinc-900 mt-5 rounded-full text-white text-xl uppercase">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <img
          className="w-1/2 h-[70vh] rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
          src="images/1office.jpg"
          alt="working professionals"
        />
      </div>
    </div>
  );
};

export default About;
