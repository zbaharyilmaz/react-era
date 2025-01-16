import React from 'react';
import data from "../data";
import CardSSS from './styles/CardSSS';
import ImageSSS from './styles/ImageSSS';


const Card = () => {
  return (
    <div>
    {data.map((item)=>(
      <CardSSS> 
        <div>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
        <ImageSSS src={`./images/${item.image}`} alt="" />

      </CardSSS>
    ))}
    </div>
  )
}

export default Card