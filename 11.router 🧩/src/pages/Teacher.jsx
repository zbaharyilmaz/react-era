import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


//! lifeCycle - useEffect teki UseEffectAxios.jsx componenti
const Teacher = () => {
  const navigate=useNavigate()
  const [people, setPeople] = useState([]);



  //!4.yol axios async await

  const getData = async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/users");

    setPeople(res.data);
 
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container text-center mt-4">
      <div className="row">
        {people.map((kisi) => {
          return (
            <div key={kisi.id} className="col-12 col-sm-6 col-md-4">
              {/* //!ÖNEMKİ: https://www.dicebear.com/styles/avataaars/ */}
              <img
                src={`https://api.dicebear.com/9.x/dylan/svg?seed=${kisi.id}`}
                alt=""
                onClick={()=>navigate(`/teacher/${kisi.id}`,{state:{kisi}})}
             
              />
              <h5>{kisi.name}</h5>
              <h6>{kisi.username} </h6>
              <h6>{kisi.phone}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Teacher;

