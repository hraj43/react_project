import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
});
export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");
  function showCart() {
    setUserProgress("cart");
  }
  function hideCart() {
    setUserProgress("");
  }
  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
  };
  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}
export default UserProgressContext;
