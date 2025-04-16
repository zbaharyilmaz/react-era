import { Container } from '@mui/material'
import Typography from '@mui/material/Typography'
import ShiftForm from "../components/ShiftForm";
import ShiftTable from "../components/ShiftTable";


const ShiftManagement = () => {
  return(
  <Container maxWidth="lg">
    <Typography variant="h4" color="initial">Vardiya Seçimi</Typography>
    <ShiftForm />
    <ShiftTable />
  </Container>
  )
}
export default ShiftManagement;