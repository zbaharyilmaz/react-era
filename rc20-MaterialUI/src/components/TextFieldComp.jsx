 //!error yazabilir sadece.varsayılanı true. aslında error={true} demektir.

 import { Box, Container, FormControl, Input, InputAdornment, InputLabel, MenuItem, TextField, Typography } from '@mui/material'
 import React, { useState } from 'react'
 import AccountCircle from "@mui/icons-material/AccountCircle";
 const TextFieldComp = () => {
   
 
   const[erroR,setError]=useState(false)
 const currencies = [
   {
     value: "USD",
     label: "$",
   },
   {
     value: "EUR",
     label: "€",
   },
   {
     value: "BTC",
     label: "฿",
   },
   {
     value: "JPY",
     label: "¥",
   },
 ];
 
 
 
   return (
     <div>
       <Container sx={{ mt: 4 }}>
         <Typography variant="h4">TEXT-FIELD</Typography>
 
         <Box
           onClick={() => setError(!erroR)}
           sx={{ m: 4, background: "lightblue" }}
         >
           {/* margin="dense"=  az bir margin verir */}
           <TextField
             required
             id="outlined-basic"
             label="required"
             variant="outlined"
             defaultValue="email giriniz"
             margin="dense"
           />
 
           <TextField
             margin="dense"
             id="outlined-helperText"
             label="email"
             defaultValue="email giriniz"
             helperText={erroR && "yanlış girdiniz"}
           />
 
           <TextField
             margin="dense"
             error={erroR}
             id="standard-error-helper-text"
             label={erroR && "error"}
             defaultValue="Hello World"
             helperText={erroR && "yanlış girdiniz"}
             variant="standard"
             fullWidth
           />
         </Box>
 
         <Box>
           <TextField
             id="outlined-select-currency"
             select
             label="Select"
             defaultValue="EUR"
             helperText="Please select your currency"
           >
             {currencies.map((option) => (
               <MenuItem key={option.value} value={option.value}>
                 {option.label}
               </MenuItem>
             ))}
           </TextField>
 
           <FormControl variant="standard" sx={{m:4}}>
             <InputLabel htmlFor="input-with-icon-adornment">
               With a start adornment
             </InputLabel>
             <Input
               id="input-with-icon-adornment"
               startAdornment={
                 <InputAdornment position="start">
                   <AccountCircle />
                 </InputAdornment>
               }
             />
           </FormControl>
         </Box>
       </Container>
     </div>
   );
 }
 
 export default TextFieldComp