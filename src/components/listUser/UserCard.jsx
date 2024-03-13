const UserCard = ({ user }) => {
  return (
    <div className="w-[327px] h-[208px] p-6 bg-[#FBFCFF] rounded-2xl border-[#BFC8E5] gap-4 flex hover:border-blue-500 hover:shadow-md">
      <img src={user.avatar} className="w-24 h-24 rounded-full" />
      <div className="mt-5 gap-4">
        <div>
          <h1 className="text-lg font-extrabold">{user.name}</h1>
          <h2 className="text-sm">{user.school}</h2>
        </div>
        <div className="w-44 gap-[4px] flex flex-wrap mt-4">
          {user.tags.map((tag) => (
            <span className="px-3 py-[2px] border border-[#BFC8E6] text-[#516FD4] rounded-xl text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
