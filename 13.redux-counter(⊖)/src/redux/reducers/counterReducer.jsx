
//mutfak

const counterReducer = (state={sayac:0,text1:""}, {type,payload1} ) => {
console.log(type, state.text1);
console.log(state.sayac);
  
  switch (type) {
    case "INCREASE":
      return {sayac:state.sayac+1,text1:payload1 }
    
  case "RESET":

  return {sayac:0}

case "DECREASE":
  return { sayac: state.sayac - 1, text1: payload1 };

    default:
    return state;
  }
  
}

export default counterReducer