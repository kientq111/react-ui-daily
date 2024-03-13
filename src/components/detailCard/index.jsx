const DetailCard = () => {
  return (
    <div className="w-[578px] h-[620px] rounded-[41px] bg-[#EDE9E2] p-[70px] font-mulish shadow-sm">
      <div className="flex justify-between items-center">
        <h3 className="font-bold tracking-[1.2px]">ABOUT THE COMMUNITY</h3>
        <button className="text-2xl font-extrabold tracking-[1.8px]">
          ...
        </button>
      </div>
      <h1 className="text-3xl font-bold mt-8">Blender Renders</h1>
      <p className="mt-4 text-2xl font-semibold w-[399px]">
        A place where beginner Blender artists can post their creations and get
        feedback on.
      </p>
      <div className="mt-10 w-[230px] flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">13.5K</h1>
          <h4 className="text-lg font-semibold">Members</h4>
        </div>
        <div>
          <h1 className="text-3xl font-bold">47</h1>
          <h4 className="text-lg font-semibold">Online</h4>
        </div>
      </div>
      <div className="flex w-full justify-between mt-10">
        <button className="w-52 h-[71px] flex items-center justify-center p-6 text-lg font-semibold text-black bg-inherit border border-black rounded-lg">
          Joined
        </button>
        <button className="w-52 h-[71px] p-6 text-lg font-semibold flex items-center justify-center text-white bg-black border border-black rounded-lg">
          Create Post
        </button>
      </div>
      <h5 className="mt-10 font-semibold text-[#433E3C]">
        Created Feb.7, 2021
      </h5>
    </div>
  );
};

export default DetailCard;
