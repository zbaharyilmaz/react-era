import React from 'react'

function Events() {
  const handleClick=(event)=>{
   alert("Clicked")
    console.log(event.target.innerHTML) 
  }
  
  return (
    <div>
      <h2 className='text-danger display-4'>React Events</h2>
      {/* Referansını çağırma yöntemi */}
      {/* handleClick() parantezli çağırma! */}
      <button onClick={handleClick} className='btn btn-primary'>Click</button>
      {/* Doğrudan Çağırma -call back function kullanarak */}
      <button onClick={()=>alert("deleted")} className='btn btn-red'>Delete
      </button>


    </div>
  )
}

export default Events
