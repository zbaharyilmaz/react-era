import React from "react";

const Keyboard = () => {
  const handleKeyDown = (e) => {
    // console.log(e.keyCode);
    // console.log(e.key);
    if (e.key === "Enter") {
      alert("form submitted");
    }
    // e.key: Kullanıcının basmış olduğu tuşun adını döndürür. Örneğin, kullanıcı Enter tuşuna basarsa, e.key değeri "Enter" olur. e.keyCode: Bu, basılan tuşun sayısal kodunu döndürür (bu özellik, modern tarayıcılarda pek kullanılmaz ve genellikle e.key ile birlikte kullanılır)
  };

  const handleCopy = (e) => {
    e.preventDefault(); //? kopyalama özelliğini engelledik
    alert("bu metin kopyalanamaz");
  };

  const handleCut = (e) => {
    e.preventDefault(); //? kesme özelliğini engelledik
    alert("bu metin kesilemez");
  };

  return (
    <div className="container mt-4">
      <h2>Keyboard Events</h2>

      <input onKeyDown={handleKeyDown} type="text" className="form-control" />
      {/* Kullanıcı metin girmeye çalıştığında onKeyDown olayı tetiklenir. Yani, kullanıcı klavyeden bir tuşa bastığında handleKeyDown fonksiyonu çağrılır. Bu durumda, Enter tuşu basıldığında formun gönderildiğini simüle eden bir mesaj gösterilir. */}

      <div className="mt-3">
        <p>{}</p>
      </div>

      <div>
        <textarea
          className="form-control"
          name="textarea"
          id="area"
          cols="30"
          rows="10"
          onCopy={handleCopy}
          onCut={handleCut}
          // onCopy: Kullanıcı bir metni kopyalamaya çalıştığında tetiklenir. Burada, kopyalama işlemi engellenir ve bir uyarı mesajı gösterilir.
          // onCut: Kullanıcı bir metni kesmeye çalıştığında tetiklenir. Burada da kesme işlemi engellenir ve bir uyarı mesajı gösterilir.
        ></textarea>
      </div>
    </div>
  );
};

export default Keyboard;
