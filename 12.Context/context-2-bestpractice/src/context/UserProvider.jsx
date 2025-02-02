import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";


//! CREATE CONTEXT
export const UserContext =createContext()



//& Fonksiyonları bu sayfada belirteceğiz.



const UserProvider = ({children}) => {


const[users,setUsers]=useState([])

  useEffect(()=>{
  fetch("https://api.github.com/users")
.then((response)=>response.json())
.then((data)=>setUsers(data)) 
  },[]) 
  //state açalım.

 
  const changeWidth=(id,px)=>{
    setUsers(
      users.map((a)=>a.id===id? {...a,width:px}:a)
    )

  }

  return (
    <UserContext.Provider value={{users,changeWidth}}>
    {children}
    </UserContext.Provider>
  );
};


//! CUSTOM HOOKS: Consuming burada yaparsak ihtiyaç duyan child larda bir daha çağırmıyoruz (opsiyonel tercih etmeyebilir, eski yoldan yani verileri çağıran sayfalara useContext yazarak devam edebilirsiniz.)(custom hooks)

//Kısaca(gerek yok)
//& export const useEXNAME=()=>{
//&     return useContext(KullaniciContext)
// }



export default UserProvider;