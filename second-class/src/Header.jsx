//* Harici bir dosya icerisinde olusturulan bir component export default ile proje icerisinde herhangi bir yerde kullanima acilmis olur. Kullanmak icin hedef dosyada 
////!import .... from "./..." ile import yapmak yeterlidir.

//? Header Component

//* arrow func. with default export (rafce)

const Header=()=>{
    //& JS ALANI
    const message="Hello CH-18"
    return(
    //&JSX ALANI
    {/* JSX alanı yorum satırı */}
    {/* //* JSX içerisinde JS ifadeleri süslü parantez "{}" içerisinde yazılır */}
    {/* //* JSX elementlerinde "class" yerine "className" kullanılır */}
    <header>
        <h1 className="head1">{message}</h1>
    </header>
    )
}
export default Header;

//* arrow func. with named export (rafc)
//?Farklı olarak, burada export default otomatik olarak eklenmez. Bu, yalnızca bir fonksiyonel bileşen tanımlar ve siz export default'u eklemek için ayrı bir adım atarsınız.
//! import {} from "./..." şeklinde süslü içinde import edilir
// export const Header = () => {
//   return (
//     <div>Header</div>
//   )
// }

//* function declaration with default export (rfce)
// function Header() {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header


