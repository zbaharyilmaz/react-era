import CardStyle from "../scss/card.module.scss";  
// card.module.scss içindeki stilin, global hale gelmemesi iç,n import bu şekilde yapılır.  

function Card({name, job, img, comment}) {
  return (
    <div className={CardStyle.container}>
      <div className={CardStyle.card}>
        <h1>{name}</h1>
        <h3>{job}</h3>
        <p>{comment}</p>
        <img className={CardStyle.img} src={img} alt="user" />
        <div className={CardStyle.buttons}>
        <button className={CardStyle.like}>Like</button>
        <button className={CardStyle.dislike}>Dislike</button>
        </div>
      </div>
    </div>
  )
}

export default Card;
