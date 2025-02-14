import FlexAndResponsive from "./components/FlexAndResponsive";
import HoverAndFocus from "./components/HoverAndFocus";
import Navbar from "./components/Navbar";
import SpacingAndSizing from "./components/SpacingAndSizing";
import Typography from "./components/Typography";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="text-center">Tailwind CSS</h1>
      {/* <Typography /> */}
      {/* <SpacingAndSizing /> */}
      {/* <HoverAndFocus /> */}
      <FlexAndResponsive />
    </div>
  );
}

export default App;
