//içerikler-Mutfak

const counterReducer = (state = { sayac: 0, text: "" }, { type, payload }) => {
  switch (type) {
    case "INCREASE":
      return { sayac: state.sayac + 1, text: payload };
    case "RESET":
      return { sayac: 0, text: payload };
    case "DECREASE":
      return { sayac: state.sayac - 1, text: payload };
    default:
      return state;
  }
};

export default counterReducer;

