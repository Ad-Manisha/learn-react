import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { TodoProvider } from "./context";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <NavBar />
      <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-rose-100 to-pink-200 px-4 transition-colors duration-700">
        <div className="py-16">
          <div className="w-full max-w-3xl mx-auto bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl px-8 py-10 text-indigo-800">
            <h1
              className="text-4xl font-extrabold text-center mb-12"
              style={{ wordSpacing: "0.6rem" }}
            >
              Today's Todo List
            </h1>

            <div className="mb-8">
              <TodoForm />
            </div>

            <div className="space-y-5">
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className="transition transform hover:scale-[1.01]"
                >
                  <TodoItem todo={todo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
