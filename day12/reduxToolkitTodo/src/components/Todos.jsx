import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  updateTodo,
  toggleComplete,
} from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div className="mt-10 space-y-5 max-w-2xl mx-auto px-4">
      {todos.length === 0 && (
        <p className="text-center text-gray-500 italic">
          Add a task to get started
        </p>
      )}

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [tempText, setTempText] = useState(todo.text);

  useEffect(() => {
    setTempText(todo.text);
  }, [todo.text]);

  const saveUpdatedTodo = () => {
    if (tempText.trim() !== "") {
      dispatch(updateTodo({ id: todo.id, newText: tempText.trim() }));
    }
    setIsEditing(false);
  };

  return (
    <div
      className={`flex items-center gap-x-4 p-4 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-indigo-300 hover:scale-[1.01] active:scale-95 ${
        todo.completed ? "bg-lime-100" : "bg-purple-100"
      }`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleComplete(todo.id))}
        className="w-5 h-5 accent-indigo-500 cursor-pointer"
        title="Mark as complete"
      />

      <input
        type="text"
        className={`flex-grow text-base sm:text-lg font-medium bg-transparent outline-none transition-all px-2 py-1 rounded-md ${
          isEditing ? "border border-indigo-200 bg-white/70" : "border-none"
        } ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}
        value={tempText}
        onChange={(e) => setTempText(e.target.value)}
        readOnly={!isEditing}
      />

      <button
        title={isEditing ? "Save" : "Edit"}
        className="w-9 h-9 flex items-center justify-center text-lg rounded-md bg-white hover:bg-indigo-100 border border-indigo-200 transition disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          if (isEditing) {
            saveUpdatedTodo();
          } else {
            setIsEditing(true);
          }
        }}
        disabled={todo.completed}
      >
        {isEditing ? "✅" : "✏️"}
      </button>

      <button
        title="Delete"
        className="w-9 h-9 flex items-center justify-center text-lg rounded-md bg-white hover:bg-red-100 border border-red-200 transition"
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        ❌
      </button>
    </div>
  );
}

export default Todos;
