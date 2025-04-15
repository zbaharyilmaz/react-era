import { Container, Grid, Paper } from "@mui/material";
import { ShiftCycleProvider } from "./context/ShiftCycleContext";  // Provider'ı import et
import ShiftForm from "./components/ShiftForm";
import ShiftTable from "./components/ShiftTable";
import CycleForm from "./components/CycleForm";
import CycleTable from "./components/CycleTable";

function App() {
  return (
    <ShiftCycleProvider> {/* Provider ile sar */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4}>
          {/* Shift Management */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <ShiftForm />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <ShiftTable />
            </Paper>
          </Grid>

          {/* Cycle Management */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <CycleForm />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <CycleTable />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ShiftCycleProvider>
  );
}

export default App;
