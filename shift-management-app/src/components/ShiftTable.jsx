import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { useShiftCycle } from "../context/ShiftCycleContext";




//Edit ekle


const ShiftTable = () => {
  const {shifts, deleteShift}=useShiftCycle()
  if(shifts.length===0){
    return(
      <Typography variant="body1" sx={{}}>
        Tanımlı bir vardiya yok.
      </Typography>
    )
  }
  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell><strong>Vardiya Adı</strong></TableCell>
          <TableCell><strong>Başlangıç</strong></TableCell>
          <TableCell><strong>Bitiş</strong></TableCell>
          <TableCell align="right"><strong>İşlem</strong></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {shifts.map((shift) => (
          <TableRow key={shift.id}>
            <TableCell>{shift.name}</TableCell>
            <TableCell>{shift.start}</TableCell>
            <TableCell>{shift.end}</TableCell>
            <TableCell align="right">
              <IconButton
                color="error"
                onClick={() => deleteShift(shift.id)}
              >
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
};

export default ShiftTable;