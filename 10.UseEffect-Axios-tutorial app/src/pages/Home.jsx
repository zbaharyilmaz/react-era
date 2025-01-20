import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios"; //!imp kısayol import için.

const Home = () => {
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
    const URL = "https://tutorial-api.fullstack.clarusway.com/";
    try {
      const response = await axios.get(URL);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
 getTutorials();
  return (
    <>
      <AddTutorial />
      <TutorialList />
    </>
  );
};

export default Home;
