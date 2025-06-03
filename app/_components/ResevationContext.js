"use client";
import { createContext, useContext, useState } from "react";

const ResevationContext = createContext();

const initialState = { from: undefined, to: undefined };

function ResevationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);
  return (
    <ResevationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ResevationContext.Provider>
  );
}

function useResevation() {
  const context = useContext(ResevationContext);
  if (!context) {
    throw new Error("UseResevation must be used within a ResevationProvider");
  }
  return context;
}

export { ResevationProvider, useResevation };
