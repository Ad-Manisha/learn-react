import Navbar from "./components/Navbar";
import PasswordGen from "./components/PasswordGen";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
        <PasswordGen />
      </div>
    </div>
  );
}

export default App;
