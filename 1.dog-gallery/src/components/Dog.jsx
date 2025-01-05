import Name from "./Name";
const Dog = ({name, img, color, isBlueEyed, age}) => {
  return (
    <div>
      <Name name={name}/> 
       {/* //* JSX içinde if/else, for döngüleri kullanılamaz, ternary kullanılabilir */}
       <p>Blue Eyed: {isBlueEyed? "yes":"no"}</p> 
       <p>Color:{color}</p>
       <p>Age: {age}</p>
       <img
         src={img}
         alt="dog"
         width="300px"
       />
    </div>
  );
};

export default Dog;

//? NOT: JSX'de prop Yollamanın Yolu: React bileşenlerine prop göndermek için, prop adı ve değeri arasında eşittir (=) işareti kullanmamız gerekir. Bu, JavaScript ifadesinin doğru bir şekilde geçirilmesini sağlar.JSX'te prop atamaları propAdı={değer} şeklinde yapılır. Şöyle olmalı:  <Name name={name} />
//name={name}: Burada, name bileşenin prop adı ve {name} değerini ifade eder (dışarıdaki name değişkeninin değerini).
//burada {} sadece bir JavaScript ifadesini JSX içinde geçirebilmek için gereklidir.

{/* 
const Dog = (props) => {
  return (
    <div>
       <h2>{props.name}</h2>
      <img src={props.img} alt="dog"/>
      <p>{props.color}</p>
    </div>
  );
};

export default Dog; 

*/}

