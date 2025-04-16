import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack
} from "@mui/material";
import { useShiftCycle } from "../context/ShiftCycleContext";

const shiftSchema = z.object({
  name: z.string().min(1, "Vardiya adı zorunludur"),
  start: z.string().min(1, "Başlangıç saati zorunludur"),
  end: z.string().min(1, "Bitiş saati zorunludur"),
});

const ShiftForm=()=>{
  const {register, handleSubmit,reset, formState:{errors}}=useForm({resolver: zodResolver(shiftSchema)})
  const {addShift}= useShiftCycle()

const onSubmit=(data)=>{
  addShift(data);
  reset();
}
return(
  <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 4 }}>
  <Typography variant="h6" gutterBottom>
    Yeni Vardiya Ekle
  </Typography>
  <Stack spacing={2}>
    <TextField
      label="Vardiya Adı"
      {...register("name")}
      error={!!errors.name}
      helperText={errors.name?.message}
    />
    <TextField
      label="Başlangıç Saati"
      type="time"
      InputLabelProps={{ shrink: true }}
      {...register("start")}
      error={!!errors.start}
      helperText={errors.start?.message}
    />
    <TextField
      label="Bitiş Saati"
      type="time"
      InputLabelProps={{ shrink: true }}
      {...register("end")}
      error={!!errors.end}
      helperText={errors.end?.message}
    />
    <Button type="submit" variant="contained">
      Ekle
    </Button>
  </Stack>
</Box>

)



}
export default ShiftForm;



//ShiftForm’a animasyon / toast 