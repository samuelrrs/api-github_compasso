import React, { createContext, useContext, useState } from "react";

export const GitUserDataContext = createContext();

export default function GitUserProvider({ children }) {
  const [user, setUser] = useState("");
  return (
    <GitUserDataContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </GitUserDataContext.Provider>
  );
}

export function useGitHubData() {
  const context = useContext(GitUserDataContext);
  const { user, setUser } = context;
  return { user, setUser };
}
