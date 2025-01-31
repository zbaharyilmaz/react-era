import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductCard = () => {
  return (
    <Card sx={{ width: 350 }}>
      <CardMedia
        component="img"
        height={300}
        image=""
        title=""
        sx={{ objectFit: "contain" }}
      />
      <CardContent sx={{ p: 1, mb: 1 }}>
        <Box display="flex" justifyContent="space-between" height={70}>
          <Typography variant="body1" gutterBottom>
            ""
          </Typography>
          <Typography variant="h6" pl={1} color="initial">
            ""
          </Typography>
        </Box>
        <Box p={1} mb={1}>
          <Box display="flex" justifyContent="space-between" height={70}>
            <Typography variant="body1" gutterBottom>
              {/* İçeriği buraya ekleyin */}
            </Typography>
            <Typography variant="h6" pl={1} color="initial">
              {/* İçeriği buraya ekleyin */}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2" color="textSecondary">
          ""
        </Typography>
        <IconButton aria-label="Add to Cart" color="primary" onClick="">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
