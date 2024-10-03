import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

const App = () => {
  const [Copy, setCopy] = useState("Default Content");

  const handleCopy = async () => {
    try {
      await window.navigator.clipboard.writeText(Copy);
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      alert("Copy to clipboard failed.");
    }
  };

  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="rounded-[5px] w-[320px] h-[320px] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:w-[450px] md:h-[320px] lg:w-[550px]">
        <div className="div w-full flex flex-col items-center">
          <h2 className="text-center mt-8 text-lg text-blue-300">
            Copying Text
          </h2>
          <textarea
            name=""
            id=""
            onChange={(e) => {
              setCopy(e.target.value);
            }}
            placeholder="Enter a text to voice"
            className="text-blue-300 resize-none rounded-[5px] p-2 w-[85%] h-[150px] border border-blue-300 outline-none mt-[10px]"
          ></textarea>
          <div className="button flex gap-3">
            <button
              onClick={() => {
                handleCopy();
              }}
              className="mt-[10px] border text-blue-300 border-blue-300 px-8 py-2 rounded-[5px] flex items-center "
            >
              <IoCopyOutline className="text-sm mr-1 text-blue-300" />
              Copy Text
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
