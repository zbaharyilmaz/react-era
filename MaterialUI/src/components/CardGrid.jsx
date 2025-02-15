import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Grid } from "@mui/system";

const CardGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <Container>
        <Grid container sx={{padding: 2}}> 
          {products.map((a) => (
            <Grid item key={a.id} size={{xs:6, md:4}}>
              <Card sx={{ maxWidth: 345, margin: 1, height: 400, padding: 1 }}>
                <CardMedia
                  component="img"
                  alt=""
                  sx={{ height: 150 }}
                  image={a.thumbnail}
                  title={a.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {a.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {a.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="warning" size="small">
                    Share
                  </Button>
                  <Button variant="contained" size="small">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default CardGrid;
