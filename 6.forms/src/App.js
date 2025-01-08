import FormEvents from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css'; //first "pnpm add bootstrap",then import
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FormObject from './components/1.form-events/FormObjects';
import MouseEvents from './components/2.mouse-events/MouseEvents';
import Keyboard from './components/3.keyboard-events/Keyboard';

function App() {
  return (
    <div>
     {/* <FormEvents/>
     <FormObject/> */}
     {/* <MouseEvents/> */}
     <Keyboard/>
    </div>
  );
}

export default App;
