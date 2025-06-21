import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-rose-100 to-pink-200 px-4 py-10 transition-colors duration-700">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl px-8 py-10 text-indigo-900 transition-all duration-300">
            <h1
              className="text-4xl font-extrabold text-center mb-10 drop-shadow-sm"
              style={{ wordSpacing: "0.4rem" }}
            >
              Todo App with Redux
            </h1>

            <div className="mb-8">
              <AddTodo />
            </div>

            <div className="transition-all hover:scale-[1.01]">
              <Todos />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
