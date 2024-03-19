import UserCard from "./UserCard";
import { useState } from "react";
const listData = [
  {
    name: "Lelah Nichols",
    school: "Troy, ML",
    tags: ["clothers", "stem"],
    avatar:
      "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau.jpeg",
  },
  {
    name: "Jesus Weiss",
    school: "Fort Worth, TX",
    tags: ["headset", "gadget", "speed", "winter"],
    avatar:
      "https://top10binhphuoc.vn/wp-content/uploads/2022/10/avatar-cute-anime-13.jpg",
  },
  {
    name: "Annie Rice",
    school: "Austin, TX",
    tags: ["road", "mountain", "trip", "earth"],
    avatar:
      "https://i.pinimg.com/236x/db/c4/f7/dbc4f7f26f83a1cedc0aa9523550ff26.jpg",
  },
  {
    name: "Robert Brower",
    school: "Cincinnati, OH",
    tags: ["Maintainace", "gears", "frames", "repair"],
    avatar:
      "https://i.pinimg.com/564x/93/75/ae/9375aef3b0ea35e0cf4ca12862bb5fef.jpg",
  },
  {
    name: "Nhimmss",
    school: "Warrior, AL",
    tags: ["music", "disks"],
    avatar:
      "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/432749324_2129200177478482_3474451646279061805_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCY2zvO3SKEEMHOJs2ZSDNckpK5eAz8yVySkrl4DPzJSJclXzzKeyY6miMz9Ia4hRVRNUWfM3HNjjIfFBFHVs9&_nc_ohc=HYWuRReuIuoAX-BWiag&_nc_ht=scontent.fhan2-3.fna&oh=00_AfAtUfeZtt5ocVqqdiIT5SxOXtWrKYCHFA6EHnpxm7yZ8w&oe=65FD6D0C",
  },
  {
    name: "Anthony S. Morin",
    school: "Lyndhurst, NJ",
    tags: ["vintage", "electric"],
    avatar: "https://o.rada.vn/data/image/2022/06/02/avatar-doi-chibi-2.jpg",
  },
];

const ListUser = () => {
  const [searchUser, setSearchUser] = useState("");
  const onchangeHandle = (event) => {
    setSearchUser(event.target.value);
  };
  return (
    <div className="w-[1213px] h-[830px] bg-white rounded-2xl p-24 font-poppins">
      <h1 className="text-3xl font-black font-merriweather">User</h1>
      <div className="flex justify-between items-center mt-6">
        <div class="relative flex ">
          <input
            type="search"
            placeholder="Search users"
            value={searchUser}
            onChange={(e) => onchangeHandle(e)}
            class="w-72 h-14 rounded-md pl-12 pr-3 py-2 border border-purple-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <span class="absolute left-4 top-1/2 transform -translate-y-1/2">
            <svg
              class="h-6 w-6 text-black"
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
        <div className="flex items-center">
          <span className="w-auto h-auto hover:bg-[#849FFF] hover:text-white rounded-lg p-4">
            Reputation
          </span>
          <span className="w-auto h-auto  hover:bg-[#849FFF] hover:text-white rounded-lg p-4">
            New users
          </span>
          <span className="w-auto h-auto  hover:bg-[#849FFF] hover:text-white rounded-lg p-4">
            Voters
          </span>
          <span className="w-auto  h-auto   hover:bg-[#849FFF] hover:text-white rounded-lg p-4">
            Editors
          </span>
          <span className="w-auto  h-auto  hover:bg-[#849FFF] hover:text-white rounded-lg p-4">
            Reputation
          </span>
        </div>
      </div>
      <div className="mt-[70px] flex flex-wrap w-[1200px] gap-4">
        {listData
          .filter((data) =>
            data.name.toLowerCase().includes(searchUser.toLowerCase())
          )
          .map((filteredData) => (
            <UserCard user={filteredData} />
          ))}
      </div>
    </div>
  );
};

export default ListUser;
