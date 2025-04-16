// import { useShiftCycle } from "../context/ShiftCycleContext"; // useShiftCycle'ı import et
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";

import { Typography } from "@mui/material";
import { useShiftCycle } from "../context/ShiftCycleContext";

// function ShiftTable() {
//   const { shifts, handleDeleteShift } = useShiftCycle(); // context'ten shifts ve handleDeleteShift al

//   return (
//     <TableContainer>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Shift Number</TableCell>
//             <TableCell>Entry Time</TableCell>
//             <TableCell>Exit Time</TableCell>
//             <TableCell>Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {shifts.map((shift) => (
//             <TableRow key={shift.id}>
//               <TableCell>{shift.shiftNumber}</TableCell>
//               <TableCell>{shift.entryTime}</TableCell>
//               <TableCell>{shift.exitTime}</TableCell>
//               <TableCell>
//                 <Button onClick={() => handleDeleteShift(shift.id)}>Delete</Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// export default ShiftTable;


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
    <div>
    </div>
  );
};

export default ShiftTable;