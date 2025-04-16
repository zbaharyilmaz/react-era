import { createContext, useContext, useState } from "react";
import {mockShifts} from "../data/mockData.js"
import { mockCycles } from "../data/mockData.js";

const ShiftCycleContext = createContext();
export const ShiftCycleProvider = ({ children }) => {
  const [shifts, setShifts] = useState(mockShifts);
  const [cycles, setCycles] = useState(mockCycles);

  const addShift = (newShift) => {
    setShifts((prev) => [...prev, { ...newShift, id: Date.now() }]);
  };
  const deleteShift = (id) => {
    setShifts((prev) => prev.filter((shift) => shift.id !== id));
  };
  const addCycle = (newCycle) => {
    setCycles((prev) => [...prev, { ...newCycle, id: Date.now() }]);
  };
  const deleteCycle = (id) => {
    setCycles((prev) => prev.filter((cycle) => cycle.id !== id));
  };
  return (
    <ShiftCycleContext.Provider
      value={{
        shifts,
        cycles,
        addShift,
        deleteShift,
        addCycle,
        deleteCycle,
      }}
    >
      {children}
    </ShiftCycleContext.Provider>
  );
};
export const useShiftCycle=()=> useContext(ShiftCycleContext)