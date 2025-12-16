import React, { useState } from "react";

const App = () => {
  const [colour, setColour] = useState("white");

  return (
    <div
      className="w-screen h-screen"
      style={{ backgroundColor: colour }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3">
        <div className="flex justify-center gap-3 shadow-white bg-amber-200 px-3 py-4 rounded-3xl">
          
          <button
          onClick={()=>{setColour("red")}}
            className="rounded-2xl px-1 py-1.5 bg-red-400"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
          onClick={()=>{setColour("green")}}
            className="rounded-2xl px-1 py-1"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
          onClick={()=>{setColour("pink")}}
            className="rounded-2xl px-1 py-1.5"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={()=>{setColour("blue")}}
            className="rounded-2xl px-1 py-1.5"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

        </div>
      </div>
    </div>
  );
};

export default App;
