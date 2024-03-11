const Login = () => {
  return (
    <div className="w-[425px] h-[752px] bg-white rounded-2xl shadow-lg flex flex-col items-center">
      <h1 className="text-black font-bold text-2xl mt-20">Login</h1>
      <a
        href="#"
        className="mt-5 text-[#505DD1] font-medium leading-5 text-base"
      >
        Create an account
      </a>
      <div>
        <h3 className="text-lg font-bold mt-6">Username</h3>
        <input
          type="text"
          className="border-gray-400 border-2 w-[302px] h-[56px] rounded-xl pl-5"
          placeholder="Enter your username"
        />
      </div>
      <div>
        <h3 className="text-lg font-bold mt-7">Password</h3>
        <input
          type="text"
          className="border-gray-400 border-2 w-[302px] h-[56px] rounded-xl pl-5"
          placeholder="Enter your password"
        />
      </div>
      <button
        type="button"
        className="mt-7 w-[302px] h-[56px] bg-black rounded-xl text-white text-base"
      >
        Log in
      </button>
      <div className="mt-11 w-[302px] flex">
        <input type="checkbox" className="w-6 h-6 accent-black" />
        <h4 className="ml-1 font-medium ">Keep me logged in</h4>
      </div>
      <h4 className="text-[#505DD1] mt-32 text-base font-medium">Forgot pasword?</h4>
      <h5 className="text-[#1B1A34AB] text-sm">@2001 - 2020 All Right Reserved</h5>
    </div>
  );
};

export default Login;
