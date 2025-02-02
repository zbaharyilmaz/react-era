import { useContext } from "react"
import { UserContext } from "../context/UserProvider";
//Kısaca(gerek yok): import useEXNAME from "../context/UserProvider";



const AnaUser = () => {

const {users,changeWidth}=useContext(UserContext)

// Kısaca(gerek yok): const{users,changeWidth}=useEXNAME()


  return (
    <div>
    
      {users.map((a) => (
        <div style={{textAlign:"center",backgroundColor:"gold",fontFamily:"Caveat",fontSize:"1.5rem",margin:"10px",padding:"10px",borderRadius:"10px"}} key={a.id}>
            <h3> Meet Your Brand Ambassadors</h3>
          <h3>
            Nickname: {a.login}
          </h3>

          <img src={a.avatar_url} alt="" style={{borderRadius:"50%",margin:"10px"}}
            width={a.width}
          />

          <div>
            <label htmlFor=""> Change My Image Width(px)</label>
            <input type="number" style={{width:"100px",height:"30px",borderRadius:"5px",border:"1px solid black",margin:"10px"}}
             onChange={(e)=>changeWidth(a.id,e.target.value)}
             />
          </div>
        </div>
      ))}
    </div>
  );
}

export default AnaUser