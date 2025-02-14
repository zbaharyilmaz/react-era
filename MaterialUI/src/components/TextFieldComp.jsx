import { Box, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

const TextFieldComp = () => {
   const [error, setError] = useState(false);

  return (
    <div>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Costumes
        </Typography>
        <Box 
        onClick={()=>setError(true)}
        sx={{ m: 2 }}>
          <TextField
            required
            id="outlined-basic"
            label="required"
            variant="outlined"
            defaultValue="Enter an email"
            margin="dense"
          />

          <TextField
            id="outlined-helperText"
            label="Country"
            defaultValue="  Enter a country"
            helperText={error? "Please enter a valid country": ""}
            variant="outlined"
            
          />
        </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;
