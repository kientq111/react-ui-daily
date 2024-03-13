import React, { useState, useRef } from "react";

const VerifyEmail = ({ length = 4 }) => {
  const [inputValue, setInputValue] = useState(
    [...Array(length)].map(() => "")
  );
  const inputs = useRef([]);

  const handleInputChange = (event, index) => {
    const { key } = event;
    const temp = [...inputValue];
    if (key === "Backspace") {
      inputs.current[index - 1]?.focus();
      temp[index] = "";
    } else if (key === "ArrowRight") {
      inputs.current[index + 1]?.focus();
    } else if (key === "ArrowLeft") {
      inputs.current[index - 1]?.focus();
    } else {
      if (/[^0-9]/.test(key)) return;
      temp[index] = key;
      inputs.current[index + 1]?.focus();
    }
    setInputValue([...temp]);
  };

  return (
    <div className="w-[752px] h-[482px] border-[4px] border-black rounded-2xl pt-20 pl-32 pr-32 bg-white font-montserrat">
      <h1 className="font-bold text-center text-2xl">
        Verify your email address
      </h1>
      <h4 className="text-center text-sm text-[#1C2537] mt-5">
        We emailed you a six-digit code to arthur@email.com.
        <br /> Enter the code below to confirm your email address.
      </h4>
      <div className="mt-9 flex justify-center items-center gap-4">
        {inputValue.map((value, index) => (
          <input
            type="text"
            className={`w-[91px] h-32 border-2 border-[#EAEBEF] focus:border-[#627AD1] focus:outline-none rounded-xl text-center text-6xl ${
              value ? "border-blue-800" : ""
            }`}
            placeholder="0"
            maxLength={1}
            autoFocus={!inputValue[0].length && index === 0}
            value={value}
            onKeyDown={(event) => handleInputChange(event, index)}
            ref={(ref) => inputs.current.push(ref)}
          />
        ))}
      </div>
      <div className="w-full h-[37px] bg-[#F1F1F7] rounded-xl flex justify-center items-center mt-16">
        <h3 className="text-xs text-[#4A5876]">
          Make sure to keep this window open while check your inbox. Resend code
        </h3>
      </div>
    </div>
  );
};

export default VerifyEmail;
