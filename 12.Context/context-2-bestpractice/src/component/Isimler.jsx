import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import AnaUser from "./AnaUser";

const Isimler = () => {
  const { users } = useContext(UserContext);

  return (
    <div>
      {users.slice(0, 4).map((a) => (
        <div
          style={{
            textAlign: "center",
            backgroundColor: "gold",
            fontFamily: "Caveat",
            fontSize: "1.5rem",
            margin: "10px",
            padding: "10px",
            borderRadius: "10px",
          }}
          key={a.id}
        >
          {a.login}
          <AnaUser />
          {/* <AnaUser  users={users}/> PROPS KULLNILABİLİR. */}
        </div>
      ))}
    </div>
  );
};

export default Isimler;
