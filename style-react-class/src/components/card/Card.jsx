import Button from "../button/Button";
import "./Card.css";

const Card=({image, language})=>{
    return(
        <> 
        <div className="wrapper">
        <h2>{language}</h2>
        </div> 
        <img className="images" src={image} alt="language" />
        <Button/>
        </>
    )
}
export default Card;
