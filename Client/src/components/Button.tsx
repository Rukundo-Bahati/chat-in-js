import { useTheme } from "next-themes";

const Button = ({ bg, text }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        className={`${bg} text-white px-4 py-2 rounded-3xl`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {text}
      </button>
    </div>
  );
};

export default Button;
