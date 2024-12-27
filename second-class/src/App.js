import './App.css';
import Header from './Header';

function App() {
  return (
    <>
     //* JSX elementleri birden fazla olduğu takdirde mutlaka bir parent element ile sarmallanmalıdır. Bunun için div, section vb. kapsayıcı elementler kullanılabileceği gibi boş React Fragment elementi "<></>" de kullanılabilir. Fragmentlar DOM'da yer kaplamaz.
    <h1>JSX COMPONENTS</h1>
    <Header/>

    
    </>
  );
}

export default App;
