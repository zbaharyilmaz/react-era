
function Card({name, job, img, comment}) {
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <h3>{job}</h3>
        <p>{comment}</p>
        <img src={img} alt="user" />
        <div>
        <button>Small</button>
        <button>Large</button>
        </div>
      </div>
    </div>
  )
}

export default Card
