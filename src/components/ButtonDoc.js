import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ButtonDoc = () => {
  const handleClick = () => {
    const url = "https://github.com/CubySoft/connextJS";
    if (window.electron) {
      window.electron.shell.openExternal(url);
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <div>
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center">
        <button
          onClick={handleClick}
          className="flex items-center text-white font-semibold text-lg rounded-lg shadow-lg"
        >
          <div className="flex items-center px-6 py-2.5 bg-blue-400 rounded-l-lg">
            LEER DOCUMENTACIÓN
          </div>
          <div className="flex items-center justify-center px-3 py-3 bg-blue-400 rounded-r-lg ml-1.5">
            <MdArrowOutward className="text-2xl" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ButtonDoc;
