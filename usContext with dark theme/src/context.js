import { useContext, createContext, useState } from "react";

const ContentContext = createContext({ count: 5 });

const ContentProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <ContentContext.Provider value={{ count, setCount }}>
      {children}
    </ContentContext.Provider>
  );
};

const useContent = () => useContext(ContentContext);

export { ContentProvider, useContent };
