import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState("false");
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center gap-x-4 p-4 rounded-2xl shadow-md transition-all duration-300 ${
        todo.completed ? "bg-lime-100" : "bg-purple-100"
      }`}
    >
      <input
        type="checkbox"
        className="w-5 h-5 accent-indigo-500 cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      <input
        type="text"
        className={`flex-grow text-base sm:text-lg font-medium bg-transparent outline-none transition-all px-2 py-1 rounded-md ${
          isTodoEditable
            ? "border border-indigo-200 bg-white/70"
            : "border-none"
        } ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      <button
        className="w-9 h-9 flex items-center justify-center text-lg rounded-md bg-white hover:bg-indigo-100 border border-indigo-200 transition disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "✅" : "✏️"}
      </button>

      <button
        className="w-9 h-9 flex items-center justify-center text-lg rounded-md bg-white hover:bg-red-100 border border-red-200 transition"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
