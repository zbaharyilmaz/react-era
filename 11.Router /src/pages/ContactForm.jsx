import { useState } from "react";
// //!event-hooks tan Form.jsx ten aldık
const ContactForm = () => {
  const [person, setPerson] = useState({   
    isim: "",
    password: "",
    email: "",
  });
  //! ÖNEMLİ KULLANIM  {isim:"", password:"", email:""} şeklinde. Ayrı state yerine.

  //?dest
  const { isim, password, email } = person;

 const getDataBase=(e)=>{
  e.preventDefault();
  alert({isim, email})
 }

  return (
    <div className="container text-center mt-4">
      <h1>*********************************************</h1>

      <h1>FORM(EVENTS)</h1>

      <form onSubmit={getDataBase}>
        <div className="mb-3">
          <label className="form-label" htmlFor="isim">
            NAME: <span className="text-danger">{isim} </span>
          </label>
          <input
            className="form-control"
            id="isim"
            type="text"
            name="isim"
            onInput={(e)=>setPerson({...person, [e.target.id]:e.target.value})}
            value={isim}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            className="form-control"
            id="password"
            name="password"
            type="password"
            onInput={(e)=>setPerson({...person, [e.target.id]:e.target.value})}
            //! COMPUTED PROPERTY NAMES []: Eğer [] kullanırsan, yukarıdaki kod çok daha kısa ve esnek olur. Tek bir event handler ile birden fazla input'u kolayca yönetebilirsin. : işareti, nesnelerde "key: value" eşleşmesini tanımlar. Burada key ([e.target.id]) dinamik olarak hesaplanıyor, value (e.target.value) ise input'un mevcut değeridir.
            value={password}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            EMAIL: <span className="fw-bold">{email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            onInput={(e)=>setPerson({...person, [e.target.id]:e.target.value})}
            value={email}
            id="email"
            name="email"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          GÖNDER (submit)
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
