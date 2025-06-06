import { useState } from "react";

let Colors = () => {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1
            rounded-full text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>

            <button
              onClick={() => setColor("indigo")}
              className="outline-none px-4 py-1
            rounded-full text-white shadow-lg"
              style={{ backgroundColor: "indigo" }}
            >
              Indigo
            </button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1
            rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-1
            rounded-full text-white shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>

            <button
              onClick={() => setColor("cyan")}
              className="outline-none px-4 py-1
            rounded-full text-white shadow-lg"
              style={{ backgroundColor: "cyan" }}
            >
              Cyan
            </button>

            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 py-1
            rounded-full text-white shadow-lg"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>

            <button
              onClick={() => setColor("gray")}
              className="outline-none px-4 py-1
            rounded-full text-white shadow-lg"
              style={{ backgroundColor: "gray" }}
            >
              Gray
            </button>

            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1
            rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Colors;
