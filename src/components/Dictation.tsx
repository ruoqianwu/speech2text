import React from "react";
import { FiMic } from "react-icons/fi";

const Dictation = () => {
  const [text, setText] = React.useState("Speak something...");

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <button
        title="start recording"
        type="button"
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        <FiMic />
      </button>
      <div className="mt-6 border-2 border-solid w-1/2 h-1/2">{text}</div>
    </div>
  );
};

export default Dictation;
