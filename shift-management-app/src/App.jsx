import ShiftManagement from "./pages/ShiftManagement";
import CycleManagement from "./pages/CycleManagement"
import { ShiftCycleProvider } from "./context/ShiftCycleContext";

const App = () => {
  return (
  <ShiftCycleProvider>
    <ShiftManagement/>
    <CycleManagement/>
  </ShiftCycleProvider>
  );
};

export default App;