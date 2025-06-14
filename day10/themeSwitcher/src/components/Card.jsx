import { useState, useEffect } from "react";
import useTheme from "../context/theme";
import day from "../assets/day2.jpg";
import night from "../assets/night.jpg";

export default function Card() {
  const { themeMode } = useTheme();
  const [visible, setVisible] = useState(true);
  const [displayText, setDisplayText] = useState(
    themeMode === "night" ? "Good Night 🌙" : "Good Day ☀️"
  );

  useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => {
      setDisplayText(themeMode === "night" ? "Good Night 🌙" : "Good Day ☀️");
      setVisible(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, [themeMode]);

  const backgroundImage =
    themeMode === "night" ? `url(${night})` : `url(${day})`;

  return (
    <div
      className="
        w-[460px] h-[460px] rounded-3xl shadow-2xl
        bg-cover bg-center overflow-hidden relative
        transition-transform duration-500 ease-in-out
        hover:scale-[1.03] hover:shadow-[0_20px_30px_rgba(0,0,0,0.4)]
        ring-2 ring-transparent focus:ring-blue-400 outline-none
        cursor-pointer

        sm:w-[380px] sm:h-[420px]  /* smaller on small screens */
        xs:w-[320px] xs:h-[360px]  /* extra small screens */
      "
      style={{ backgroundImage }}
      tabIndex={0}
    >
      <div
        className={`
          absolute inset-0 rounded-3xl
          ${
            themeMode === "night"
              ? "bg-gradient-to-t from-black/70 via-black/40 to-transparent"
              : "bg-gradient-to-t from-white/70 via-white/40 to-transparent"
          }
          pointer-events-none
        `}
      />

      <div
        className={`
          absolute bottom-8 left-6 right-6
          text-3xl sm:text-2xl xs:text-xl
          font-semibold font-sans tracking-wide
          transition-opacity duration-300
          select-none text-center drop-shadow-md
          ${themeMode === "night" ? "text-white" : "text-gray-900"}
          ${visible ? "opacity-90" : "opacity-0"}
        `}
      >
        {displayText}
      </div>
    </div>
  );
}
