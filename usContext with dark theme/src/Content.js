import { useContent } from "./context";
import { getFontColor } from "./getFontColor";
import { useTheme } from "./theme-context";
export const Content = () => {
  const { count } = useContent();
  const { theme } = useTheme();
  return (
    <div>
      <h1 style={{ color: getFontColor(theme) }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
        temporibus aspernatur, possimus optio mollitia doloribus sapiente fuga
        at facere!{count}
      </h1>
    </div>
  );
};
