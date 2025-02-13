import React from "react";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getirData } from "../features/haberSlice";
import { useEffect } from "react";
import loadingGif from "../assets/loadingGif.gif";

const News = () => {
  const dispatch = useDispatch();

  const { loading, haberler } = useSelector((state) => state.haberSlice);

  useEffect(() => {
    dispatch(getirData());
  }, []);

  return (
    <>
      {loading ? (
        <img src={loadingGif} alt="" height="800px" />
      ) : (
        <Box
          xs={{ d: "flex" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
        >
          {
            haberler.map((haber)=>(
              <Card sx={{ maxWidth: 345, height:450,m:5 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={haber.urlToImage}
                title="haber"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {haber.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                 {haber.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Clear</Button>
                <Button href={haber.url} size="small" target="_blank">Detail</Button>
              </CardActions>
            </Card>
            ))
          }
        </Box>
      )}
    </>
  );
};

export default News;
