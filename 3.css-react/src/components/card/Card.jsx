import Button from "../button/Button";
// import "./Card.css";
import CardStyle from "./Card.module.css"; //isteğe bağlı bir isim verdik(CardStyle şeklinde)Module kullanınca clasName isimlendirmesi className="wrapper" den className={CardStyle.wrapper} e dönecek.


//* Eğer CSS'deki class adi kebap-case seklinde yazilmis ise module ile bu class'a erismek icin ornekte goruldugu gibi koseli parentez ile erisim yapilir.Koseli parentez erisimi en garanti yontemdir.
//* ex:moduleName["class-adi"]

const Card=({image, language})=>{
    return(
        <> 
        {/* <div className="wrapper"> */}
        <div className={CardStyle.wrapper}>
        <h2>{language}</h2>
        </div> 
        <img className={CardStyle.images} src={image} alt="language" />
        <Button />
        </>
    )
}
export default Card;
