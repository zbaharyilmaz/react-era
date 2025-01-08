import React, { useState } from "react";
//*useState i destruct ediyoruz. "react.useState" olarak kullanmak yerine.

const FormEvents = () => {
  //!aracı olarak state kullan. React: "Direkt DOM a müdahale etme". Aracı olarak stateler virtual DOM a müdahale edecektir.
  //Yeni güncellenen değer bir state içinde tutulur.Sonra update fonksiyonu devreye girer. Yeniden render oluyor, html/UI güncelleniyor Onu yeniden name="...." şeklinde tanımlasak yeniden render olmayacağı için react ve UI nin yeni tanımdan haberi olmaz.
  //? state her güncellendikten sonra component re-render olur ve değişen kısımlar DOM'a basılır.
  const [name, setName] = useState("");
  // console.log(name)
  const [password, setPassword] = useState("");
  // console.log(password)
  const [date, setDate] = useState("");
  const [country, setCountry] = useState("");
  const [remember, setRemember] = useState(false); //boolen değer
  console.log(remember);

  const handleSubmit = (e) => {
    e.preventDefault(); //? submit eventi'nin doğal davranışını engelle
    console.log("form submitted");
    alert(`
      name:${name},
      password: ${password},
      country : ${country},
      date : ${date}`);
      
      setName("");
      setPassword("");
      setDate("");
      setCountry("")
      setRemember("");
      // stateleri sıfırladık, sayfa yenilendiğinde.
  };

  //* ileride bir submit islemin neticesinde verilerin nasıl post edilebileceğini gostermek adina eklenmistir.
  //? axios.post(url, {name,password,country})

  return (
    <div>
      <div className="mt-4 p-3">
        <div className="text-center">
          <h1>*********</h1>
          <h2>Form Events</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name: <span className="text-danger">{name}</span>
            </label>

            {/* <input onChange={(e)=>console.log(e.target.value)} e.target.value ile input içine girilen değere ulaşabiliriz; onChange ile.database e yollandıktan sonra değişkenlerin içini temizledik, bunu ekranda da temiz görmek için inputlarda value değişkenleri tanımladık. */}
        

            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              id="name"
              value={name}   
              required
             //INTERVIEW: eğer input değerlerini state'e bağlı olarak kontrol etmek istersek inputların value proplarına state'leri bağlamamız gerekir. bu duruma kontrolsüz komponentten kontrollü komponente çevirme denir. value={name}  şeklinde bağlama yaptık.böylelikle input değerleri sıfırlanır.

            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password: <span className="text-danger">{password}</span>
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="password"
              value={password}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date: <span className="text-danger">{date}</span>
            </label>
            {/* //* toISOString() veya toLocaleDateString("tr") vs de kullanılır. */}

            <input
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="form-control"
              id="data"
              value={date}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-check-label" htmlFor="country">
              Country: <span className="text-danger">{country}</span>
            </label>
            <select
              onChange={(e) => setCountry(e.target.value)}
              id="country"
              className="form-select"
              value={country}
              required
            >
              <option>Countries</option>
              <option value="1">Turkey</option>
              <option value="2">England</option>
              <option value="3">Germany</option>
            </select>
          </div>

          <div className="mb-3 form-check">
            <input
              onChange={(e) => setRemember(e.target.checked)}
              //!CHECKBOX DA e.target.checked
              type="checkbox"
              className="form-check-input"
              id="remember"
              value={remember}
            />
            <label className="form-label" htmlFor="remember">
              Remember me:<span className="text-danger">{remember.toString()}</span>
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {/* //* Form içindeki button type ı default olarak submittir. ya dışarı al butonu ya da type=button gir. */}
        </form>
      </div>
    </div>
  );
};

export default FormEvents;
