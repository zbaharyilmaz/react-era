import { useContext } from "react";


const AnaUser = () => {

const {users}= useContext(UserContext)

  return (
    <div>

        <div>
          <h3>
            {}
          </h3>

          <img src={} alt="" 
            width={}
          />

          <div>
            <label htmlFor=""> Image width(px)</label>
            <input type="number"
             onChange={(e)=>changeWidth(a.id,e.target.value)}
             />
          </div>
        </div>

    </div>
  );
}

export default AnaUser