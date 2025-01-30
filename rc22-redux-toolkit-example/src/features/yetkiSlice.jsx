import { createSlice } from "@reduxjs/toolkit";


const yetkiSlice = createSlice({



    name: 'yetkiSlice',
    initialState: {
        email:"",
        password:"",
    },
    reducers: {
        kullaiciOlustur:(state,{payload})=>{
           
        },
        
    }
});
export const {kullaiciOlustur} = yetkiSlice.actions;
export default yetkiSlice.reducer;

