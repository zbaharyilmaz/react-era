import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <>
     {/* JSX elementleri birden fazla olduğu takdirde mutlaka bir parent element ile sarmallanmalıdır. Bunun için div, section vb. kapsayıcı elementler kullanılabileceği gibi boş React Fragment elementi "<></>" de kullanılabilir. Fragmentlar DOM'da yer kaplamaz. */}
    <h1>App.js nin başlığıyım. Konumuz JSX Components</h1>
    <p>Şimdi app.js e Header componenti ekledik.</p>
    <Header/>
    <p>Şimdi app.js e Main componenti ekledik.</p>
    <Main/>
    <p>Şimdi app.js e Footer componenti ekledik.</p>
    <Footer/>


    </>
  );
}

export default App;




//!ÖZET: index.js, uygulamanın başlatıldığı yerdir. App bileşeni burada render edilir.App.js, uygulamanın ana yapısını içerir ve Header, Main, Footer bileşenlerini birbirine bağlar.Header.jsx, Main.jsx, ve Footer.jsx bileşenleri, içerik ve stil yönlendirmelerini içerir.index.css ve main.css dosyaları, stillerin yönetimi için kullanılır. Stil kuralları, sırasına ve spesifikliğine göre uygulanır.