// MyContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

// Define a type for your context data
type MyContextData = {
  username: string;
};

// Define a type for the context
type MyContextType = {
  data: MyContextData;
  setData: Dispatch<SetStateAction<MyContextData>>;
};

// Create the context
const MyContext = createContext<MyContextType | undefined>(undefined);

// Create a provider component
type MyContextProviderProps = {
  children: ReactNode;
};

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  // Initialize state from localStorage or use default values
  const storedData = localStorage.getItem("myContextData");
  const initialData: MyContextData = storedData
    ? JSON.parse(storedData)
    : { username: "Default Username" };

  const [data, setData] = useState<MyContextData>(initialData);

  // Update localStorage whenever the data changes
  useEffect(() => {
    localStorage.setItem("myContextData", JSON.stringify(data));
  }, [data]);

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to consume the context
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
