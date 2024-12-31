import Button from "../button/Button";

const Card=({image, language})=>{
    return(
        <> 
        <div>
        <h2>{language}</h2>
        </div> 
        <img src={image} alt="language" />
        <Button/>
        </>
    )
}
export default Card;
