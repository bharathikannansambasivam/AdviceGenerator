import axios from "axios";
import React, { useEffect, useState } from "react";
import dice from "./images/dice.svg";
import desktopPattern from "./images/desktopPattern.svg";
import MobilePattern from "./images/MobilePattern.svg";

function AdviceGenerate() {
  const [advice, setAdvice] = useState("");
  const [adviceID, setAdviceID] = useState("");
  const fetchAdvice = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdviceID(response.data.slip.id);

      setAdvice(response.data.slip.advice);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <div className="bg-darkBlue h-screen w-screen flex flex-col justify-center  items-center font-manrope">
      <div className=" bg-darkGrayishBlue w-80 sm:w-2/4  h-60  flex rounded-lg  flex-col  items-center justify-around p-7 text-center">
        <h3 className="text-neonGreen  tracking-widest  font-manrope font-medium text-sm">
          ADVICE #{adviceID}
        </h3>
        <p className="text-lightCyan mb-2 font-extrabold"> "{advice}"</p>
        <img className="block sm:hidden" src={MobilePattern} alt="" />
        <img className="hidden sm:block" src={desktopPattern} alt="" />
      </div>
      <button
        onClick={fetchAdvice}
        className="p-3 rounded-full bg-neonGreen  relative bottom-5  hover:backdrop-blur-3xl hover:bg-opacity-75 "
      >
        <img src={dice} alt="Generate Advice" />
      </button>
    </div>
  );
}

export default AdviceGenerate;
