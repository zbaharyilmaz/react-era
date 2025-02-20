console.log("Merhaba Typescript")

let topla=23+45

// Toplama işlemi ile sonucu gösterdik
const toplam=(a,b)=> a+b
// Fonksiyonu çağırdık
 console.log(toplam(44,56))

 // B değerinden dolayı zaten tipini otomataik algılıyor
 let b=5
 b="Hello"
console.log(b)

//! TYPE ANNOTATION
// Ts de type annotation ile kesin olarak tipini belirtiyoruz
let c:number=45
console.log( typeof c)
c="Hello"
console.log( typeof c)

// ! ARRAY DATA TYPE
// Belli bir tür tanımlaması yapıldığında array hep o türde olmalı
let CodeList:number[]=[34,56]
console.log(CodeList)
CodeList.push("Ali")
console.log(CodeList)
/* -------------------------------------------------------------------------- */
// Generic Array tanımlaması
let serialList:Array<number>=[23324,455657,675667]
console.log(serialList)
/* -------------------------------------------------------------------------- */
//! TUPLE
// TypeScript'te **Tuple (Demet)**, **sabit uzunluktaki ve belirli türlerde elemanlar içeren bir dizi türüdür**. Normal dizilerden farkı, her elemanın belirlenen veri tipine sahip olması gerektiğidir.

// Tipleri belli bir array,sayısı sabit

let tuple1:[number,string,string]
tuple1=[34,"Sema","Güven"]
console.log(tuple1)
tuple1=["Ali","Güven",36]  // Ts de bir hatadır
//Tuple tanımlandığı veri türüne göre aynı sayıda ve aynı düzende veri eklenmeli
console.log(tuple1)

/* -------------------------------------------------------------------------- */
//! Tuplelar Arrayı
let sinif:[number,string][]
sinif=[[23,"Ahmet"],[21,"Ali"],[24,"Sema"]]
sinif.push([22,"Selma"])
console.log(sinif)

/* -------------------------------------------------------------------------- */
// Tuple içinde Destructure

let car:[string,number]=["BMW",2023]

let [brand,model]=car
console.log(brand)
console.log(model)
/* -------------------------------------------------------------------------- */
//Tuple içindeki değerlerin değiştirilmesini engellemek için readonly kullanabilirsiniz:

let settings:readonly [string,number]=["Dark Mode",1]
settings=["lightMode",2]
settings[0]="NormalMode"
console.log(settings)

/* -------------------------------------------------------------------------- */
//! ENUM 


// enum, TypeScript’te anlamlı ve sabit değerleri bir arada tutmak için kullanılan bir veri yapısıdır.

//  Kodun okunabilirliğini artırır
//  Sabit değerleri merkezi bir şekilde yönetir
// String veya sayısal değerler ile çalışabilir


// Otomatik olarak numaralandırıyor. 0 dan başlatılıyor
enum Color{
    red,
    green,
    blue
}

let selectedColor:Color=Color.green
console.log(selectedColor)
/* -------------------------------------------------------------------------- */
// Numaralndırmayıbizde belirleyebileriliz

/* option shift a */


