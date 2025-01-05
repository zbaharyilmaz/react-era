## BUILD
```pnpm run build```
Eğer React veya başka bir framework kullanıyorsanız, bu komut uygulamanızın üretim (production) sürümünü oluşturacak ve gerekli optimizasyonları yapacaktır. pnpm run build komutunu çalıştırarak React projenizin üretim sürümünü oluşturabilirsiniz.

# CSS MODULES
CSS Modules, React ve diğer modern JavaScript framework'lerinde stil (CSS) yönetimini daha modüler ve yerel (local) hale getiren bir tekniktir. Bu yöntem, stil çakışmalarını önler ve her bileşen için izole edilmiş, yerel stiller oluşturmanıza olanak tanır.
## IMPORT FARKLILIĞI
CSS Module stilini React bileşeninde kullanmak için, import işlemi yapılır. Bu import işlemi sonucunda, tüm stil sınıfları bir obje olarak gelir. CSS Module'den gelen sınıflara objenin özellikleri gibi erişilir.

``` import styles from './Button.module.css' ```

Normal CSS dosyasını import ettiğinizde, stil global olarak uygulanır. Yani, stil App bileşeninde olduğu gibi, child bileşenlerde de geçerli olur.
CSS Modules kullanıldığında, stil yalnızca o bileşende geçerlidir. App.js'de import ettiğiniz stil, sadece App bileşeninde etkili olur. Diğer bileşenler, bu stil dosyasını import etmedikçe bu stilin etkisi altında olmaz.

# CSS Modules Nedir?

CSS Modules temelde her CSS sınıfını benzersiz yaparak global stil kirliliğini engellemeyi amaçlar. Her bir sınıfın ismi, otomatik olarak bir hash ile değiştirilir (örneğin: button → button_kd8hsd). Bu, aynı isimli CSS sınıflarının farklı bileşenlerde çakışmasını engeller.

# Özellikleri:
Yerel Stil (Local Scoping): CSS sınıfları yalnızca bağlı oldukları bileşene özel olur, diğer bileşenlere etki etmez.
Isim Çakışmalarını Önler: Global stil çakışmalarını önlemek için her sınıf ismine benzersiz bir hash değeri eklenir.
Kullanımı Kolay: Projeye entegre etmek ve kullanmak oldukça basittir.
CSS Modules Nerede Kullanılır?
CSS Modules, genellikle şu durumlarda kullanılır:

React Uygulamalarında: Özellikle React projelerinde CSS'in her bileşene özel ve bağımsız olmasını sağlamak için tercih edilir.
Bileşen Bazlı Stil Yönetimi: Büyük projelerde, her bileşenin kendi stilini yönetmek, projenin daha sürdürülebilir olmasını sağlar.
Global CSS Çakışmalarını Engellemek: Farklı bileşenlerde aynı isimli sınıfların bulunması durumunda oluşacak çakışmaların önüne geçer.