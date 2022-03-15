import { useContent } from "./context";
import { getFontColor } from "./getFontColor";
import { useTheme } from "./theme-context";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const { count, setCount } = useContent();
  return (
    <div>
      <h1 style={{ color: getFontColor(theme) }}>Header{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Counter</button>
      <button
        onClick={() =>
          setTheme((theme) => (theme === "light" ? "dark" : "light"))
        }
      >
        toggle
      </button>
    </div>
  );
};
