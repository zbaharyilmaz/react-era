// import "./Button.css";
import ButtonStyle from "./Button.module.css";

const Button = () => {
  return (
        // <div className="wrapper">
       <div className={ButtonStyle.wrapper}>
      <button className={`${ButtonStyle.btn} ${ButtonStyle["btn-blue"]}`}>Info</button>
      <button className={`${ButtonStyle.btn} ${ButtonStyle["btn-red"]}`}>Back</button>
      {/* //! Burada ${ButtonStyle.btn} ${ButtonStyle["btn-red"]} ifadesi, hem btn hem de btn-red sınıflarını birleştirir. Template literal (backtick) sayesinde, bu birleştirmeyi kolayca yapıyoruz.
      //? Burada, CSS Modules'ta "btn-red" gibi bir sınıf adı kullanmak için köşeli parantezler ([ ]) ile ButtonStyle["btn-red"] şeklinde erişim yapıyoruz. Çünkü CSS sınıf adı içinde tire (-) olduğu için, bu karakter JavaScript'te geçerli bir değişken adı değil. */}
    </div>
  );
};

export default Button;