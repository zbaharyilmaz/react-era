import { createContext, useContext, useState } from "react";
import { mockShifts, mockCycles } from "../data/mockData";

// Context oluşturuluyor
const ShiftCycleContext = createContext();

// Provider bileşeni
export const ShiftCycleProvider = ({ children }) => {
  const [shifts, setShifts] = useState(mockShifts);
  const [cycles, setCycles] = useState(mockCycles);

  // Shift ekleme fonksiyonu
  const handleAddShift = (shift) => setShifts((prev) => [...prev, shift]);

  // Shift silme fonksiyonu
  const handleDeleteShift = (id) =>
    setShifts((prev) => prev.filter((s) => s.id !== id));

  // Cycle ekleme fonksiyonu
  const handleAddCycle = (cycle) => setCycles((prev) => [...prev, cycle]);

  // Cycle silme fonksiyonu
  const handleDeleteCycle = (id) =>
    setCycles((prev) => prev.filter((c) => c.id !== id));

  return (
    <ShiftCycleContext.Provider
      value={{
        shifts,
        cycles,
        handleAddShift,
        handleDeleteShift,
        handleAddCycle,
        handleDeleteCycle,
      }}
    >
      {children}
    </ShiftCycleContext.Provider>
  );
};

// Context'ten değerleri almak için custom hook
export const useShiftCycle = () => useContext(ShiftCycleContext);
