import useTheme from "../context/theme";
export default function ThemeBtn() {
  const { themeMode, dayTheme, nightTheme } = useTheme();

  const onChangeBtn = (e) => {
    const isNight = e.currentTarget.checked;
    if (isNight) {
      nightTheme();
    } else {
      dayTheme();
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "night"}
      />
      <div className="w-11 h-6 bg-yellow-300 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer bg-yellow-100 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-800"></div>
      <span className="ml-3 text-sm font-medium text-gray-900">
        {themeMode === "night" ? "Night Mode 🌙" : "Day Mode ☀️"}
      </span>
    </label>
  );
}
