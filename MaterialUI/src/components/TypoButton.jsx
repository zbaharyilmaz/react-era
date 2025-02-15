import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CalculateIcon from '@mui/icons-material/Calculate';
import user from "../assets/user.png";

const TypoButtons = () => {
  return (
    <div>
      <Container maxWidth="md">
        <Typography
          variant="subtitle1"
          component="h4"
          align="center"
          color="textSecondary"
          margin={2}
          sx={{ backgroundColor: "lightgrey", padding: 2, borderRadius: 2 }}
        >
          At Costume World, we are here to turn your imagination into reality.
          Since 2016, we've been offering fun, creative, and high-quality
          experiences to our customers with costumes for all ages and tastes.
          With our wide range of products, you can easily find the perfect
          costume for any event.
        </Typography>

        <Typography variant="button" margin={2} color="success">
          Child Costumes
        </Typography>

        <Typography variant="button" margin={2} color="info">
          Baby Costumes
        </Typography>

        <Box margin={2} sx={{ display: "flex" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ m: 2 }}
            size="large"
          >
            Populer Costumes
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ m: 2 }}
            size="small"
          >
            New Arrivals
          </Button>
          <Button variant="outlined" sx={{ m: 2 }} startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" sx={{ m: 2 }} endIcon={<SendIcon />}>
            Send
          </Button>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="add an alarm">
            <AlarmIcon />
          </IconButton>
          <IconButton color="primary" aria-label="add to shopping cart">
            <CalculateIcon />
          </IconButton>
        </Box>
        <Box>
        <Button variant="contained" sx={{ m: 4, p:3, border:2, borderRadius: 3, borderColor: "warning.main" ,backgroundColor: "red", width: "50%", display: "flex", justifyContent: "center", alignItems: "center"}} color="warning" >
              SUBMIT
              <Avatar alt="Cindy Baker" src={user} />
            </Button>
        </Box>
      </Container>
    </div>
  );
};

export default TypoButtons;
