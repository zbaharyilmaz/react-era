import { useState } from "react";
import { useShiftCycle } from "../context/ShiftCycleContext"; // useShiftCycle'ı import et
import { TextField, Button } from "@mui/material";

function CycleForm() {
  const [cycle, setCycle] = useState({
    id: "",
    cycleNumber: "",
    startDate: "",
    endDate: "",
  });

  const { handleAddCycle } = useShiftCycle(); // context'ten handleAddCycle'ı al

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cycle.cycleNumber && cycle.startDate && cycle.endDate) {
      handleAddCycle(cycle);
      setCycle({ id: "", cycleNumber: "", startDate: "", endDate: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Cycle Number"
        value={cycle.cycleNumber}
        onChange={(e) => setCycle({ ...cycle, cycleNumber: e.target.value })}
        fullWidth
        required
      />
      <TextField
        label="Start Date"
        value={cycle.startDate}
        onChange={(e) => setCycle({ ...cycle, startDate: e.target.value })}
        fullWidth
        required
      />
      <TextField
        label="End Date"
        value={cycle.endDate}
        onChange={(e) => setCycle({ ...cycle, endDate: e.target.value })}
        fullWidth
        required
      />
      <Button type="submit">Add Cycle</Button>
    </form>
  );
}

export default CycleForm;
