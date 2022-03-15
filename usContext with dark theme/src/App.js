import { Content } from "./Content";
import { getBgColor } from "./getBgColor";
import { Header } from "./Header";
import "./styles.css";
import { useTheme } from "./theme-context";

export default function App() {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <div className="App" style={{ backgroundColor: getBgColor(theme) }}>
      <Header />
      <Content />
    </div>
  );
}
