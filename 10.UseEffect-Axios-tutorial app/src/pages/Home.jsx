import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios"; //!imp kısayol import için.


//! component LifeCycle
//* 1-render
//* 2-componentDidMount => useEffect(()=>{},[])
//* 3-componentDidUpdate => useEffect(()=>{},[variable])


const Home = () => {
  const [tutorials, setTutorials] = useState([]) 
  //& map etmek için boş dizi verdik, başlangıç değerini.
  //*THEN-CATCH ile (bu metotta callbackhell olabiliyor.)
  //  const getTutorials=()=>{
  //   const URL="https://tutorial-api.fullstack.clarusway.com/"
  //   axios
  //   .get(URL)
  //   .then((response)=>console.log(response.data))
  //   .catch((error) =>console.log(error))
  //  }
  //  getTutorials();

  //* ASYNC AWAİT THEN CATCH (alternatif)
  const getTutorials = async () => {
   // const URL = "https://tutorial-api.fullstack.clarusway.com/"; .env dosyası oluşturduk ve get(process.env.REACT_APP_...) ile aşağıda çağırdık.
    try {
      const {data} = await axios.get(process.env.REACT_APP_URL);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };
  //? cpmponenDidMount (ilk render sonrası 1 kere istek yolla.)
  useEffect(() => {
    getTutorials();
  }, [])
  
  return (
    <>
      <AddTutorial />
      <TutorialList tutorials={tutorials} />
    </>
  );
};

export default Home;
