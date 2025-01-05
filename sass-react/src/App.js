import Card from "./components/Card";
import Header from "./components/Header";
import "./scss/app.scss";
import data from "./data";

function App() {
 //console.log(data)
  return (
  
    <div className="App">
     <Header/>
     {/*  Other Way: {data.map((item)=>(<Card key={item.id} name={item.name} img={item.img} job={item.job} comment={item.comment}/>))
     Not:React'te key prop'u, bir bileşen listesi oluştururken, her bir öğenin benzersizliğini sağlamak amacıyla kullanılır. Bu, React'in her bir bileşeni tanıyıp gerektiğinde yalnızca ilgili bileşeni yeniden render etmesine olanak tanır. Ancak, bu key prop'u doğru şekilde kullanmazsanız, React bileşenlerinizin doğru şekilde güncellenmesini sağlayamayabilir.

    */}
   {data.map((item)=>(<Card key={item.id} {...item}/>))}
    
    
    </div>
  );
}

export default App;
