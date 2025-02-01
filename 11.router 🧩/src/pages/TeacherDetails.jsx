import React from 'react'
import { useLocation } from 'react-router-dom'

const TeacherDetails = () => {

  const {state:{kisi}}=useLocation()

  return (
  
    <div className="container text-center mt-4">
      <div>
        <img
          src={`https://api.dicebear.com/9.x/dylan/svg?seed=${kisi.id}`}
          alt=""
          width="300px"
        />
        <h4>{kisi.username} </h4>
        <h5>{kisi.name} </h5>
        <h5>{kisi.phone} </h5>
        <h5>{kisi.website} </h5>
        <h5>{kisi.email} </h5>
      </div>
      <div>
        <button className="btn btn-warning" >
          GO BACK
        </button>
        <button className="btn btn-primary" >
          GO HOME
        </button>
      </div>
    </div>
  );
}

export default TeacherDetails