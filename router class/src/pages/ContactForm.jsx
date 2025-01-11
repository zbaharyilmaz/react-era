import { useState } from "react";
// //!event-hooks tan Form.jsx ten aldık
const ContactForm = () => {
  const [person, setPerson] = useState({
    isim: "",
    password: "",
    email: "",
  });

  //?dest
  const { isim, password, email } = person;

 

 

   
  return (
    <div className="container text-center mt-4">
      <h1>*********************************************</h1>

      <h1>FORM(EVENTS)</h1>

      <form >
        <div className="mb-3">
          <label className="form-label" htmlFor="isim">
            NAME: <span className="text-danger">{isim} </span>
          </label>
          <input
            className="form-control"
            id="isim"
            type="text"
            name="isim"
          
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
