import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { email, password } = useSelector((state) => state.authSlice);
  return email === "admin@example.com" && password === "12345" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
//* şart durumu Navigate, butona basılınca vs için navigate kullanılır
export default PrivateRouter;
