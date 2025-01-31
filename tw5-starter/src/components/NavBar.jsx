import { ShoppingCart } from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import logo from '../assets/cw.svg';
import { useNavigate } from 'react-router';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}
          onClick={() => navigate('/')}
        >
          <img src={logo} alt="logo" width="24" height="24" />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ cursor: 'pointer', flexGrow: 1 }}
          onClick={() => navigate('/')}
        >
          Clarusway Shopping
        </Typography>
        <Button color="inherit" onClick={() => navigate('/basket')}>
          <Badge badgeContent="" color="error">
            <ShoppingCart />
          </Badge>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;