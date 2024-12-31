import data from "./data";
import './App.css';
import Card from "./components/card/Card";

function App() {
  console.log(data)
  //Jsx içinde foreach kuramıyoruz.
  return (
    <div className="App">
     <h1>Languages</h1>
      {/* //!Rendering Lists */}
      {/* //* Each child in a list should have a unique "key" prop. React liste içindeki her bir elemanın uniqe bir key'e sahip olmasını ister.Componente key ver */}

     {/* 1.YOL:
      data.map((item, index)=> (
      <Card key={item.id} language={item.language} image={item.img}/>))
     */}

    {/* //! Birden fazla statemet kullanicaksa o zaman fonksiyonun suslu  ve return keywordu kullanamsi gerekir. Map de süslü de return kulllan.*/}
    {
      data.map((item)=>{ 
      const {language, img, id}=item
      return( <Card key={id} language={language} image={img}/>)
      }) 
    }
     {/* 3.YOL: YOLDA DESTRUCTURE
      data.map({id, language, img})=>{ 
      return( <Card key={id} language={language} image={img}/>)
      }) 
    */}
  
     {/* 4.YOL:
     <Card language={data[0].language} image={data[0].img}/>
     <Card language={data[1].language} image={data[1].img}/>
     <Card language={data[2].language} image={data[2].img}/> */}

    </div>
  );
}

export default App;

