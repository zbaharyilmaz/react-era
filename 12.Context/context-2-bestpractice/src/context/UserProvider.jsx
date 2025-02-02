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
.then((data)=>setUsers(data)) //state açalım.
  },[]) 


  return (
    <UserContext.Provider value={{users}}>
    {children}
    </UserContext.Provider>
  );
};

export default UserProvider;