const LoginVerification = () => {
  return (
    <div className="w-[425px] h-[752px] bg-white rounded-2xl shadow-lg flex flex-col items-center pl-11 pr-11 font-roboto">
      <h1 className="text-black font-bold text-2xl mt-20">
        Login Verification
      </h1>
      <a
        href="#"
        className="mt-5 font-medium leading-5 text-lg text-center w-[368px]"
      >
        To continue logging in we need you to complete one of the following
      </a>
      <div className="flex mt-14 w-full">
        <input
          type="radio"
          name="group1"
          value={1}
          className="w-7 h-7 accent-black"
        />
        <h4 className="text-lg font-medium ml-2">
          Verification code via email
        </h4>
      </div>
      <div className="flex mt-10 w-full">
        <input
          type="radio"
          name="group1"
          value={2}
          className="w-7 h-7 accent-black"
        />
        <h4 className="text-lg font-medium ml-2">Verification code via SMS</h4>
      </div>
      <h5 className="text-sm text-[#1B1A34AB] w-64">
        We’ll send a code to your mobile phone that can enter to verify your
        identity.
      </h5>
      <div className=" w-64">
        <button className="bg-black rounded-xl text-white w-36 h-12 mt-6">
          Send SMS Code
        </button>
      </div>
      <div className="mt-11 w-full flex">
        <input type="checkbox" className="w-6 h-6 accent-black" />
        <h4 className="ml-2 font-medium ">Remember this device</h4>
      </div>
      <h5 className="text-sm text-[#1B1A34AB] w-64 mt-2">
        Don’t select this option if you’re using a public computer
      </h5>
      <a className="mt-20 text-blue-500 cursor-pointer">Return to Login</a>
    </div>
  );
};

export default LoginVerification;
