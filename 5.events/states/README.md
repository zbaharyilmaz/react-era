## USING FLAG

Başlangıç Durumu:

visible = true
<div> öğesi görünür.
İlk Tıklama (butona tıklanır):

setVisible(!visible) çağrılır, yani visible = !true olur, yani visible = false.
Bileşen yeniden render edilir, <div> öğesi artık gizlenir çünkü visible false'tır.
İkinci Tıklama (butona tekrar tıklanır):

setVisible(!visible) çağrılır, yani visible = !false olur, yani visible = true.
Bileşen yeniden render edilir, <div> öğesi tekrar görünür.

## Neden "Hook" Denir?
"Hook" terimi, React özelliklerini fonksiyonel bileşenlere takma veya bağlama anlamına gelir. Yani, hook'lar aslında React işlevselliğini fonksiyonel bileşenlere bağlamak için kullanılan araçlardır.

Bir hook, bileşene özel işlevsellik kazandırır; örneğin:

useState — state ekler,
useEffect — bileşenin yaşam döngüsünü yönetir,
useContext — global state'i veya veriyi bileşenlere bağlar.
Hook'ların Faydaları:
Daha Basit ve Temiz Kod: React'in sınıf bileşenleri (class components) ile karşılaştırıldığında, hook'lar fonksiyonel bileşenlerde daha temiz ve okunabilir kodlar yazmamıza yardımcı olur.

Bileşenler Arasında Durum Paylaşımı: Hook'lar, bileşenler arasında state'i daha kolay bir şekilde paylaşmamızı sağlar. Örneğin, useContext ile global state'leri daha kolay yönetebiliriz.

Yan Etkiler ve Performans Yönetimi: useEffect, useMemo, ve useCallback gibi hook'lar, bileşenlerin performansını artırmak ve yan etkileri yönetmek için kullanılır.

Daha Az Boilerplate Kod: useState gibi hook'lar sayesinde, eski React kodlarına kıyasla daha az kod yazarak benzer işlevsellikleri elde edebiliriz. Örneğin, eski React sınıflarında state yönetmek için daha fazla kod yazmamız gerekirdi.