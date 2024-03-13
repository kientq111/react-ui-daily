import { useState } from "react";

const SubjectTag = () => {
  const [findSubject, setFindSubject] = useState("");

  const subjects = [
    "Pizza",
    "Pasta",
    "Sushi",
    "Tacos",
    "Burrito",
    "Fried Rice",
    "Chicken Curry",
    "Hamburger",
    "French Fries",
    "Salad",
    "Soup",
    "Sandwich",
    "Steak",
    "Eggs",
    "Ice Cream",
    "Cake",
    "Chocolate",
    "Apple",
  ];

  const onchangeHandle = (e) => {
    setFindSubject(e.target.value);
  };

  return (
    <div className="bg-[#111620] w-[985px] h-[576px] p-[100px] rounded-2xl font-merriweather">
      <h4 className="text-[#7A90BB] text-base ">All recipes / Vegetarian</h4>
      <h1 className="mt-6 text-2xl font-bold text-[#9AB7EF]">
        All recipes / Vegetarian
      </h1>
      <div class="mt-7 flex justify-between items-center">
        <div class="relative flex ">
          <input
            type="search"
            placeholder="Search hundreds of recipes"
            value={findSubject}
            onChange={(e) => onchangeHandle(e)}
            class="w-[785px] h-[80px] rounded-md pr-3 py-3 pl-16 border bg-[#161C27] border-[#273245] focus:outline-none focus:ring-1 focus:ring-blue-500 text-white text-lg"
          />
          <span class="absolute left-5 top-1/2 transform -translate-y-1/2">
            <svg
              class="h-8 w-8 text-[#7A90BB]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="mt-9 flex gap-[10px] w-[785px] h-auto items-start flex-wrap">
        {subjects
          .filter((subject) =>
            subject.toLowerCase().includes(findSubject.toLowerCase())
          )
          .map((filteredSubject) => (
            <button
              key={filteredSubject}
              className="rounded-3xl bg-[#142037] text-[#7A90BB] text-base h-auto w-auto px-5 py-2 hover:bg-[#92B6FF] hover:text-[#111620]"
            >
              {filteredSubject}
            </button>
          ))}
      </div>
    </div>
  );
};

export default SubjectTag;
