import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import AnaUser from "./AnaUser";

const Isimler = () => {
  const { users } = useContext(UserContext);

  return (
  
    <div style={{textAlign:"center",fontFamily:"Caveat", fontSize:"1.5rem", margin:"10px", padding:"10px", borderRadius:"10px"}}>
      {users.slice(0, 4).map((a) => (
        <li key={a.id}>
          {a.login}
          
          {/* <AnaUser  users={users}/> PROPS KULLANILABİLİR. */}
      </li>
       

      ))}
        <AnaUser />
    </div>
  );
};

export default Isimler;
