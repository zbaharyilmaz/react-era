//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in kullanimini cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi birçok built-in Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede tanimlanmalidir. Yani Hook'lar bir dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react/hooks#state-hooks
//* =============================================================

import React, {useState} from "react";


const UseStateHook = () => {
 const[counter,setCounter]=useState(0)

 const increase=()=>setCounter(counter+1)

// !Daha doğru kullanım:
// ! const increase=()=>setCounter((prevCount)=>prevCount+1)
//  const arttir = () => setCounter((prevCount)=>prevCount + 1);
// Önceki state al ve sonra güncelle. Eski halini  yakala ve arttır diyebilir.Stateler asenkron çalışır. Arkaplanda güncellenir.Ama en fazla bu şekilde yakalanıyor.

    // let counter=0;
    // const increase=()=>{
    //     counter+=1 //counter++
    //     console.log(counter)
    // }
  return (
  <div className="bg-warning w-50 m-auto">
    <h2 className="text-center">Use State Hook</h2>
    <h3>Count:{counter}</h3>
    <button className="btn btn-primary m-1" onClick={increase}>Increase +</button>
    <button className="btn btn-primary" onClick={()=>setCounter(counter-1)}>Decrease -</button> 

    <button className="btn btn-danger m-1" onClick={()=>setCounter(0)}>Reset</button>

      {/* //? Eger setCounter metodunu callback ile yazmazsak bu metot ilk acilistan itibaren doğrudan cagirilmis olur. Bu durumda da counter state'ini gunceller. State guncellendigi icinde component re-render olur. Re-render ise yeniden setCounter araciligi ile state'in guncellenmesine yol acar ve sonsuz donguye girer */}
      {/* <button className="btn btn-primary m-2" onClick={setCounter(counter-1)}>
        👇
      </button> */}

  </div>
  );
}

export default UseStateHook;