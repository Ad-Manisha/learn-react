import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="mt-20 flex justify-center gap-8">
          <Card
            title="Day 4"
            content=" Yesterday I uncovered how React works behind the scenes— and learned about the Virtual DOM, Reconciliation, and Fiber."
            btnText="Learn More"
          />
          <Card
            title="Day 5"
            content="I'm diving into Tailwind CSS and learning how to style
            components efficiently. Today, I also explored React props and how
            they help make components dynamic and reusable."
            btnText="Explore"
          />
        </div>
      </div>
    </>
  );
}

export default App;
