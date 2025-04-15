import { useState } from "react";
import { useShiftCycle } from "../context/ShiftCycleContext"; // useShiftCycle'ı import et
import { TextField, Button } from "@mui/material";

function ShiftForm() {
  const [shift, setShift] = useState({
    id: "",
    shiftNumber: "",
    entryTime: "",
    exitTime: "",
  });

  const { handleAddShift } = useShiftCycle(); // context'ten handleAddShift'i al

  const handleSubmit = (e) => {
    e.preventDefault();
    if (shift.shiftNumber && shift.entryTime && shift.exitTime) {
      handleAddShift(shift);
      setShift({ id: "", shiftNumber: "", entryTime: "", exitTime: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Shift Number"
        value={shift.shiftNumber}
        onChange={(e) => setShift({ ...shift, shiftNumber: e.target.value })}
        fullWidth
        required
      />
      <TextField
        label="Entry Time"
        value={shift.entryTime}
        onChange={(e) => setShift({ ...shift, entryTime: e.target.value })}
        fullWidth
        required
      />
      <TextField
        label="Exit Time"
        value={shift.exitTime}
        onChange={(e) => setShift({ ...shift, exitTime: e.target.value })}
        fullWidth
        required
      />
      <Button type="submit">Add Shift</Button>
    </form>
  );
}

export default ShiftForm;
