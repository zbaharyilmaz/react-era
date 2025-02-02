import { createContext } from "react";


//! CREATE CONTEXT
export const UserContext =createContext()

//Buraya fonksiyonlar yazılacak.

const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={{}}>
    {children}
    </UserContext.Provider>
  );
};

export default UserProvider;