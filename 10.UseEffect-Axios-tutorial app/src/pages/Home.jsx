import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";

const Home = () => {
  // const getTutorials = () => {
  //   const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
  //   axios
  //     .get(URL)
  //     .then((res) => console.log(res.data))
  //     .catch((error) => console.log(error));
  // };

  const getTutorials = async () => {
    const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
    try {
      const res = await axios.get(URL);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  getTutorials();
  return (
    <>
      <AddTutorial/>
      <TutorialList />
    </>
  );
};

export default Home;
