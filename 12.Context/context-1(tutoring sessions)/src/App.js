import React, { useState } from "react";
import Home from "./components/Home";
import { StudentContext } from "./context/StudentContext";
import data from "./data";


const App = () => {

  const [students, setStudents] = useState(data);
  const changeColor=(id,newColor)=>{
    setStudents(students.map((a)=> a.id===id?{...a,color:newColor}:a))  
  }
  // tamircinin içinde bir condition kullanılacaksa, (mesela id si tutanı değiştir, tutmazsa aynen kalsın gibi) && (shortcircuit) kullanamayız, ternary kullanmalıyız, çünkü && li yazımda, set tamirci değişikliği yapar, diğerlerini yok sayar


  return (
    //! 2- bütün projeye gönderilmek üzere ilk Home u, gönderilecek elemanlar ve Context sayfasıyla sarmallayalım (provide edelim).Context API kullanılarak students verisi bağlam (context) üzerinden tüm bileşenlere aktarılıyor.{ students }, bir prop değil, context value'si olarak kullanılıyor.StudentContext.Provider içine value={{ students }} şeklinde konarak, bu veriye uygulamanın farklı noktalarından erişim sağlanıyor.
    <StudentContext.Provider value={{students,changeColor}}>
      <Home />
    </StudentContext.Provider>
   
  );
};

export default App;
