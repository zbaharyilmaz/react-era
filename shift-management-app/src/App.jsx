import ShiftManagement from "./pages/ShiftManagement";
import CycleManagement from "./pages/CycleManagement"

const App = () => {
  return (
  <ShiftCycleProvider>
    <ShiftManagement/>
    <CycleManagement/>
  </ShiftCycleProvider>
  );
};

export default App;