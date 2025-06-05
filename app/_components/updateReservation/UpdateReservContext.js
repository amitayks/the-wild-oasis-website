"use client";
import { createContext, useContext, useState } from "react";

const UpdateReservContext = createContext();

const initialState = { numGuests: null, hasBreakfast: false };

function UpdateReservProvider({ children }) {
  const [state, setState] = useState(initialState);

  return (
    <UpdateReservContext.Provider value={{ state, setState }}>
      {children}
    </UpdateReservContext.Provider>
  );
}

function useUpdateResev() {
  const context = useContext(UpdateReservContext);
  if (!context) {
    throw new Error("UseResevation must be used within a ResevationProvider");
  }
  return context;
}

export { UpdateReservProvider, useUpdateResev };
