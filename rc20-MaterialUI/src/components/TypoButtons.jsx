import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

const TypoButtons = () => {
  return (
    <div>
      <Container maxWidth="md">
        {/* maxWidth="md" width en fazla md büyüklükte olsun.  gutterBottom={true}
      alttan margin. component attribute ü  sadece console da etkilidir , görüntü yine variant neyse odur*/}

        <Typography
          variant="h1"
          component="h3"
          gutterBottom
          align="center"
          color="error"
          sx={{ background: "#eee", mt: 4, border: "1px solid red" }}
        >
          Typography Container Box Button
        </Typography>

        <Typography variant="button">span olacak</Typography>
        <Typography variant="button">span olacak</Typography>
        <Typography variant="body1">p etiketi</Typography>
        <Typography variant="body2">p etiketi</Typography>
        <Typography variant="button">p etiketi</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", marginTop: 4 }}>
          <Button variant="outlined" color="error">Contained</Button>
          <Button variant="contained" color="success" sx={{color:"blue"}}>Contained</Button>
        </Box>

       

      </Container>
    </div>
  );
}

export default TypoButtons