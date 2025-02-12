import { createSlice } from "@reduxjs/toolkit"

const yetkiSlice = createSlice({
    name:"yetkiSlice",
    initialState:{
        email:"",
        password:"",
    },
    reducers:{
        kullaniciOlustur:(state, {payload})=>{
            state.email=payload.email;
            state.password=payload.password;
    }
}})
export const {kullaniciOlustur} = yetkiSlice.actions
export default yetkiSlice.reducer