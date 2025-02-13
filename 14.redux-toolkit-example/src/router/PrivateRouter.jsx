import { useSelector } from "react-redux";
import Login from "../pages/Login";
import News from "../pages/News";
import { Navigate } from "react-router-dom";

const PrivateRouter = () => {
const {email, password} = useSelector((state) => state.yetkiSlice);
  return (
     email==="admin" && password==="admin" ? <Navigate to ="/login"/> 
  );
};

export default PrivateRouter;
