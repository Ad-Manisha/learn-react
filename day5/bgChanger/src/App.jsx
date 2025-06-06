import Colors from "./components/Colors";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="mt-0 flex justify-center gap-8">
          <Colors />
        </div>
      </div>
    </>
  );
}

export default App;
