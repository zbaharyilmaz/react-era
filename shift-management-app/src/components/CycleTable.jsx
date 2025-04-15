import { useShiftCycle } from "../context/ShiftCycleContext"; // useShiftCycle'ı import et
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";

function CycleTable() {
  const { cycles, handleDeleteCycle } = useShiftCycle(); // context'ten cycles ve handleDeleteCycle al

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Cycle Number</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cycles.map((cycle) => (
            <TableRow key={cycle.id}>
              <TableCell>{cycle.cycleNumber}</TableCell>
              <TableCell>{cycle.startDate}</TableCell>
              <TableCell>{cycle.endDate}</TableCell>
              <TableCell>
                <Button onClick={() => handleDeleteCycle(cycle.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CycleTable;
