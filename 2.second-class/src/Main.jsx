//* JSX'de stillendirme farkli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{backgroundColor:"red"}})
//* 3-) Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Module CSS, Material UI, Styled Component, Sass, Bootstrap, Tailwind, Emotion, Ant Design v.b harici kutuphaneler kullanilabilir.

//! External css
//! CSS dosyalari dogrudan import edilir. Export edilmelerine gerek yoktur.

//? CSS dosyalari import "path" seklinde eklenir.
import "./Main.css"


//? Dahili bir resim eklemek icin import yapmak gereklidir ancak public klasöründeki resimler importsuz bir şekilde erisilebilir.
import cat from "./images/cat.jpg"

//!Büyük-Kçük Harf Yazım Kuralları
//Bileşen/component adı her zaman büyük harfle başlar, çünkü React küçük harf ile yazılan bir fonksiyonu HTML elemanı olarak kabul eder. Örneğin, <header /> yazarsanız, React bunu bir HTML etiket olarak yorumlayabir.
//JSX içinde, kendi oluşturduğunuz bileşenlerin adları büyük harfle başlamalıdır, ancak HTML etiketleri küçük harf ile yazılmalıdır.
//Genellikle React'te props ve state isimleri küçük harf ile başlar ve camelCase stilinde yazılır (yani, her kelime arasına büyük harf eklenir).
//JSX içerisinde CSS className her zaman küçük harf kullanılarak yazılır. Ancak, React'ta HTML'deki class özelliği yerine className kullanılır. Buradaki className küçük harf ile yazılmalıdır.

const headerStyle={
    color:"teal",
    backgroundColor:"yellow",
    fontWeight:"bold"
}

const Main = () => {
  return (
    <main>
     {/*Inline CSS, (key-value), notasyon olarak camelCase */}
     <p className="pclass1">Main den gelen mesajlarınız💌</p>
     <h3 style={{color:"red", backgroundColor:"yellow"}}>Bu kısım internal css ile stillendirildi.(süslü içinde süslü&camelCase)</h3>
     {/*External CSS */}
     <h2 style={headerStyle}>Bu kısım external css ile stillendiririldi.</h2>
     <p className="pclass2">Main den paragraf yazdık.Şimdi mainden kedi fotoğrafı ekledik.</p>
     <div>  
        <img
          className="img"
          src="https://cdn.pixabay.com/photo/2023/01/23/00/45/cat-7737618_1280.jpg"
          alt="Cat image"
        />
        {/* //! Lokal ortamımızda buluna bir resmi dogrudan path vererek cagiramayiz. Bunun yerine import yaparız */}
        <img
          className="img"
          src={cat}
          alt="Cat image"
        />
        {/* //!Public klasöründeki resimlere doğrudan ulaşıbildiği için yol vererek eriştik. Ana dizin. Publicden erişim için /fotoismi yeterli.) */}
        <img
          className="img"
          src="/cat2.png"
          alt="Cat img"
        />
      </div>
    </main>
  );
};

export default Main;
