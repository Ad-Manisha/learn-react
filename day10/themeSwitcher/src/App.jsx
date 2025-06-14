import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import NavBar from "./components/NavBar";

function App() {
  const [themeMode, setThemeMode] = useState("day");

  const dayTheme = () => {
    setThemeMode("day");
  };

  const nightTheme = () => {
    setThemeMode("night");
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("day", "night");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, dayTheme, nightTheme }}>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-rose-100 transition-colors duration-700">
        <NavBar />
        <div className="flex flex-col items-center justify-center gap-12 mt-16">
          <ThemeBtn />
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
