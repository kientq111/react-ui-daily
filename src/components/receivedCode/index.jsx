const ReceivedCode = ({ code = "5420" }) => {
  return (
    <div className="w-[752px] h-[482px] border-[4px] border-black rounded-2xl pt-16 pl-32 pr-32 bg-white">
      <h1 className="font-bold text-center text-2xl">
        Verify your email address
      </h1>
      <h4 className="text-center text-sm text-[#1C2537] mt-5">
        To verify your email address, enter this code in <br /> your browser.
      </h4>
      <div className="mt-9 flex text-center w-full justify-center item-center">
        <h1 className=" w-72 h-32 rounded-xl bg-[#F1F1F7] text-[55px] color-[#1C2537] flex items-center justify-center tracking-[10px]">
          {code}
        </h1>
      </div>
      <h4 className="text-center text-sm text-[#1C2537] mt-5">
        If you didn’t request a code, you can safely <br /> ignore this email.
      </h4>
      <h3 className="text-center text-xs text-[#627AD1] mt-10">
        Questions? <b>We’re here to help</b>.
      </h3>
    </div>
  );
};

export default ReceivedCode;
