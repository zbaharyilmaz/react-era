React Cheat Sheet 

1. React Proje Yapısı ve Temel Dosyalar
React projesi genellikle şu şekilde yapılandırılır:

index.js: Uygulamanın giriş noktasıdır. Burada ReactDOM ile App bileşeni render edilir.
App.js: Uygulamanın ana bileşeni olup, diğer bileşenleri içerir.
Componentler (Header, Main, Footer): Uygulamanın farklı bölümlerini temsil eden işlevsel bileşenlerdir.
CSS Dosyaları (index.css, main.css): Global ve local stiller burada tanımlanır.
2. React Bileşen Yapısı
Bileşen Türleri:
Fonksiyonel Bileşen (Functional Component): Modern React uygulamalarında yaygın olarak kullanılır. Bu tür bileşenler bir fonksiyon olarak tanımlanır ve doğrudan JSX döner.
Bileşen İhracı ve İthalatı:
Export: Bir bileşeni dışa aktarmak için export default veya export kullanılır.
Import: Başka bir dosyadan bileşen almak için import { ComponentName } from './ComponentFile' kullanılır.
Örnek:

export default bir bileşen için kullanılırken, export ile adlandırılmış bileşenler kullanılır.
3. JSX ve React Syntax
JSX (JavaScript XML): React'te UI'yi tanımlamak için kullanılan bir sentaksıdır. JSX, HTML ile benzer ama JavaScript ifadeleri içinde kullanılabilir.

JSX Elementleri: React'teki HTML benzeri elementler, küçük harflerle yazılır. Ancak, özel bileşenler her zaman PascalCase (ilk harf büyük) ile yazılır.

JSX İçinde JS İfadeleri: JS kodları {} içine yazılır.

Örnek:

JSX'de class yerine className kullanılır.
4. Bileşenler Arasındaki İletişim
Props: Bileşenler arasında veri iletmek için kullanılır. Props, bir bileşene dışarıdan veri gönderilmesini sağlar.

State: Bileşenin kendi durumunu tutar ve kullanıcı etkileşimlerine göre değişir.

Event Handling: Bileşenlerde kullanıcı etkileşimine yanıt vermek için olaylar (events) kullanılır.

5. Stil Yönetimi
Inline CSS:
Inline CSS, JSX içinde doğrudan stil tanımlamak için kullanılır. Stil, bir nesne (object) olarak yazılır ve camelCase formatında yazılmalıdır.
Örnek:

jsx
Kodu kopyala
<h1 style={{ color: "red", backgroundColor: "yellow" }}>Hello</h1>
External CSS:
Harici CSS dosyaları, bileşenlerdeki stilin dışarıdan yönetilmesini sağlar. import './filename.css' şeklinde stil dosyası import edilir.
Local CSS (Modular CSS):
Bileşene özel stil tanımlamaları için CSS dosyalarını modüler şekilde kullanmak mümkündür.
CSS Sınıfı Yazım Kuralları:
className: React'te class yerine className kullanılır.
CamelCase: CSS özelliklerinde camelCase kullanılır (örneğin: backgroundColor, fontWeight).
6. React Fragment Kullanımı
React.Fragment veya kısa yazımı olan <> </> kullanarak birden fazla JSX elemanını sarmak mümkündür. Bu, DOM'da herhangi bir ekstra node (element) oluşturmadan bileşenler arasında gruplama yapmanızı sağlar.
Örnek:

jsx
Kodu kopyala
<>
  <h1>Title</h1>
  <p>Content</p>
</>
7. Component Rendering ve Child-Parent İlişkisi
Bir bileşeni parent bileşende render etmek için, ilgili bileşenin ismini yazmanız yeterlidir.
Örnek:

jsx
Kodu kopyala
<Header />
<Main />
<Footer />
Parent-Child İlişkisi: Bir bileşen başka bir bileşenin içinde render edilirse, bu bileşen child bileşeni olur.
8. Görseller ve Medya Kullanımı
Public Klasörü:
Public klasöründeki görsellere doğrudan erişebilirsiniz. Örneğin, /images/cat.jpg şeklinde bir yol verilebilir.
Local Görsel Import:
Yerel görselleri kullanabilmek için import etmek gerekir.
Örnek:

javascript
Kodu kopyala
import catImage from './images/cat.jpg';
9. Stil Dosyaları ve Sıralama
CSS Sıralaması: Eğer birden fazla CSS dosyası yükleniyorsa, öncelik sırasına göre son yüklenen dosya daha önceki stilleri geçersiz kılabilir.
Örnek:

index.css dosyasındaki stil kuralı yüklenmeden önce main.css yüklenmişse, main.css'teki stil geçerli olur.
10. Önemli React Kuralları
Bileşen İsimleri: React bileşen isimleri PascalCase (baş harf büyük) olmalıdır.
JSX Etiketleri: HTML etiketleri küçük harf ile yazılır, fakat React bileşenleri büyük harfle yazılmalıdır.
Props ve State: Genellikle camelCase stilinde yazılır.
11. Performans ve Optimizasyon
React.StrictMode: Uygulamanın potansiyel hatalarını tespit etmeye yarar ve geliştirme sırasında kullanılır. React bileşenleri ve fonksiyonları hakkında size bilgi verir.

useMemo ve useCallback: React'te performansı artırmak için kullanılan React Hooks. Gereksiz renderları engellemek amacıyla hesaplanan değerler ve fonksiyonlar belleklenebilir.

12. Notlar ve İpuçları
Her Bileşen Kendi İçinde İhracat Yapmalıdır: Bileşenler genellikle default olarak dışa aktarılır. Bununla birlikte, adlandırılmış dışa aktarımlar da mümkündür.
State ve Props Kullanımı: State bileşenin içinde tanımlanırken, props dışarıdan bileşene verilir.
Sonuç ve Genel İpuçları
React'te bileşen yapısı ve stil yönetimi React'in temel taşlarındandır. Bileşenlerinizi küçük ve tekrar kullanılabilir yapmak, uygulamanızın bakımını kolaylaştırır.
JSX kullanımı ve React state, props yönetimi uygulamanın temelini oluşturur. Stilinizi dışarıdan ve bileşen bazında yönetebilir, görselleri doğru şekilde yükleyebilirsiniz.
React'in sunduğu esneklik ile projelerinizde güçlü, performanslı ve sürdürülebilir bileşenler geliştirebilirsiniz.