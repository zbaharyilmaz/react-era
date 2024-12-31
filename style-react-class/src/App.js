import data from "./data";
import './App.css';
import Card from "./components/card/Card";

function App() {
  console.log(data)
  //Jsx içinde foreach kuramıyoruz.
  return (
    <div className="App">
     <h1>Languages</h1>
    

     {/* <Card language={data[0].language} image={data[0].img}/>
     <Card language={data[1].language} image={data[1].img}/>
     <Card language={data[2].language} image={data[2].img}/> */}

    </div>
  );
}

export default App;

