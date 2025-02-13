import { useDispatch, useSelector } from "react-redux";
import loadingGif from "../assets/loadingGif.gif";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  withTheme,
} from "@mui/material";
import { useEffect } from "react";
import { getirData } from "../features/haberSlice";

const News = () => {
  const dispatch = useDispatch();

  const { loading, haberler } = useSelector((state) => state.haberSlice);

  useEffect(() => {
    dispatch(getirData());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <img
            src={loadingGif}
            alt="Loading..."
            style={{ width: "100px", height: "100px"}}
          />
        </Box>
      ) : (
        <Box
          xs={{ d: "flex", filter: "sepia(40%)"}}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {haberler.map((haber) => (
            <Card key={haber.url} sx={{ maxWidth: 300, height: 500, m: 5, p:1 , display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 4px 8px rgba(20, 31, 21, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)", borderRadius: "2px"}}>
              <CardMedia
                sx={{ height: 140}}
                image={haber.urlToImage}
                title="haber"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "center", fontSize: "1.09rem", color: "var(--color-texture-3)", fontWeight: "bold", fontFamily: "inherit", padding: "0.5rem"}}> 
                  {haber.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary",textAlign:"justify", fontSize: "0.9rem", fontFamily: "inherit"}}>
                  {haber.content}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "center"}}>
                <Button sx={{color: "var(--color-texture-4)", fontFamily:"inherit"}} size="small">Clear</Button>

                <Button sx={{color: "var(--color-texture-4)", fontFamily:"inherit"}}  href={haber.url} size="small" target="_blank">
                  Detail
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </>
  );
};

export default News;