import { Container, Typography } from "@mui/material";

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
      </Container>
    </div>
  );
};

export default TypoButtons;
