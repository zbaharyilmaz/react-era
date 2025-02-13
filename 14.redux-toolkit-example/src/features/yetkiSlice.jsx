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
{/* Bu işlemle, slice içinde tanımladığınız action fonksiyonlarını (örneğin kullaniciOlustur) dışa aktarıyoruz. Bu action'lar, Redux store'unun state'ini güncelleyebilmek için dispatch ile kullanılır. */}
export default yetkiSlice.reducer