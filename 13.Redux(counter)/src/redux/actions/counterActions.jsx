//istekler-Garson
//type:mutfağa iletilen istek(müşterinin gönderdiği veri)
//payload:garsonun ek istekleri


//! SYNTAX: export const decrease=()=>({})


export const increaseCounter = () => ({
  type: "INCREASE",
  payload: "Increased"
});

export const resetCounter = () => ({
  type: "RESET",
  payload:"Reseted"
});

export const decreaseCounter = () => ({
  type: "DECREASE",
  payload: "Decreased"
});