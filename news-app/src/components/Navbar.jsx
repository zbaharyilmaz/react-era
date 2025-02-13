import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { email } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "var(--color-texture-1)", height: "100px" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "var(--font-family)",
              fontWeight: "bold",
              fontSize: "2rem",
              color: "var(--color-texture-5)",
              marginTop: "1.5rem",
            }}
          >
            TECH TODAY
          </Typography>
          {email ? (
            <Button
              sx={{
                marginTop: "1.5rem",
                fontFamily: "inherit",
                color: "var(--color-texture-6)",
              }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Button
              sx={{
                marginTop: "1.5rem",
                fontFamily: "inherit",
                color: "var(--color-texture-6)",
              }}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
