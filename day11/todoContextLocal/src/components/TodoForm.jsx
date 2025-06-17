import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form
      onSubmit={add}
      className="flex items-center shadow-lg rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm"
    >
      <input
        type="text"
        placeholder="What's on your mind?"
        className="flex-1 px-5 py-3 text-lg outline-none bg-transparent placeholder-gray-500"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-lg transition-all duration-300"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
