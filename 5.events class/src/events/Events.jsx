import React from 'react'

const Events=()=> {
  let message="hi"; //statik kabul edilir, react tarafından. güncellenmez.

  const handleClick=(event)=>{
   alert("Clicked")
    console.log(event.target) 
  }
  const write=(msg)=>{
    console.log(msg)
  }
  const change=()=>{
    const message="Hi, Ch-18!"
    console.log(message)
  }
  
  return (
    <div>
      <h2 className='text-danger display-4'>React Events</h2>
      {/* //* Referansını çağırma yöntemi */}
      {/* //! handleClick() parantezli çağırma!bu şekilde kullanım, sayfa yenilendikçe çalışmasına sebep olur.sonsuz döngü olur bazı durumlarda. */}
      <button onClick={handleClick} className='btn btn-primary m-3'>Click</button>
      {/* //* Doğrudan Çağırma -call back function kullanarak */}
      <button onClick={()=>alert("deleted")} className='btn btn-danger'>Delete
      </button>
      <button className='btn btn-success m-3' onClick={write}>Trial</button>
      <button className='btn btn-dark' onClick={()=>write("hi")}>Message</button>
      <button className="btn btn-secondary m-2" onClick={change}>Switch</button>
      <p>{message}</p>
    </div>
  )
}

export default Events;
