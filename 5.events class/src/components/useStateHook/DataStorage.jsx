import React, { useState } from 'react';
  
  const DataStorage = () => {

    // const [name, setName] = useState("Zehra")
    // const [surname, setSurname]= useState("Yılmaz")
    // const [job,setJob] = useState("Developer") //!bu kullanım yerine Object kullan.
    
    const [user, setUser]=useState(
      {
        name:"Bahar",
        surname:"Yılmaz",
        job:"Developer"
      }
    )
    // const updateName=()=>{
    //   setName("Bahar")
    // }
    // const updateSurname=()=>{
    //   setSurname("Türkay")
    // }
    // const updateJob=()=>{
    //   setJob("Tester")
    // }
    

    //?FLAG KULLANIMI
   const[visible, setVisible]=useState(true)

  return (
  <div>
    <h2 className="text-center m-2">Employee Data</h2>

    {
      //& SHORT CIRCUIT 
      //*  Koşullu render
      visible &&  <div className="bg-success w-25 h-100 m-auto rounded">
      <p>NAME:{user.name}</p>
      <p>SURNAME:{user.surname}</p>
      <p>TITLE:{user.job}</p>
    </div>

    }

  

    {/* <button className="btn btn-warning m-1" onClick={updateName}>Update the name</button>
    <button className="btn btn-danger m-1" onClick={updateSurname}>Update the surname</button>
    <button className="btn btn-primary" onClick={updateJob}>Update the job</button> //!Bu uzun kullanım yerine: */}
    {/* //* Full update: State'i tamamen sıfırlayıp yeni bir değer atama: */}
    <button className="btn btn-danger m-1" onClick={()=>setUser({name:"Zehra",surname:"Ayaz",job:"Tester"})}>Update Info</button>

    {/* //*Partial update (spread operator kullanarak): Sadece belirli bir özelliği güncelleme: Nesne üzerindeki herhangi bir özelliği güncellerken, spread operator (...) kullanmak en iyi yaklaşımdır. Bu şekilde mevcut nesnenin kopyasını alarak, sadece değişiklik yapmak istediğiniz özelliği güncelleyebilirsiniz.*/}
    <button className="btn btn-secondary m-1" onClick={()=>setUser({...user, name:"Zeynep"})}>Update Name</button>
      {/* Sadece adı güncelleyip diğelerini aynen alacaksak, spread ile ekleme yapacağız. */}
      {/* <button className="btn btn-primary m-1" onClick={()=>setUser({ad:"Ayşe"})} >Ad Güncelle</button> */}

      <button className="btn btn-warning" onClick={()=>setVisible(!visible)}>{visible ? "Hide": "Show"}</button>


  </div>
  );
};

export default DataStorage;