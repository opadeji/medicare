import { useTheme } from "./ThemeContext";
import { LuSun, LuMoon } from "react-icons/lu";

export default function Toggle() {
  const { dark, setDark } = useTheme();

  return (
    <div className="flex items-center gap-3">
      <div className="text-black dark:text-white">
        {dark ? <LuMoon size={18} /> : <LuSun size={18} />}
      </div>{" "}
      <button
        onClick={() => setDark(!dark)}
        className={`relative w-8 h-4 flex items-center rounded-full transition-colors duration-300 ${
          dark ? "bg-gray-200" : "bg-gray-200"
        }`}
      >
        <span
          className={`absolute left-1 top-1 w-2 h-2 rounded-full transition-transform duration-300 ${
            dark ? "translate-x-4" : "translate-x-0"
          } ${dark ? "bg-gray-700" : "bg-gray-700"}`}
        />
      </button>
      <h1 className=" text-xs font-bold text-gray-500 dark:text-white">
        {dark ? "Apply light theme" : "Apply dark theme"}
      </h1>
    </div>
  );
}
