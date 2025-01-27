import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Grid2, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const CardGrid = () => {

const[products,setProducts]=useState([])

useEffect(()=>{
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => setProducts(data.products));
},[])



  return (
    <Container>
      <Typography>CARD GRID</Typography>

      <Grid container>
        {products.map((a) => (
          <Grid item key={a.id} >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={a.images}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CardGrid