import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    dispatch(addTodo(input.trim()));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="w-full max-w-2xl mx-auto mt-10 flex items-center gap-3 bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl px-4 py-3 transition-all duration-300 hover:shadow-indigo-300 hover:scale-[1.01] active:scale-95"
    >
      <input
        type="text"
        placeholder="Today's priority is..."
        className="flex-grow px-4 py-3 text-base sm:text-lg outline-none bg-transparent placeholder-gray-500 text-gray-800"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-lg rounded-xl transition-all duration-300 active:scale-95"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
