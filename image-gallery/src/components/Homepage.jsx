import data from "../data";
import Picture from "./picture";

const HomePage = () => {
  return (
    <> <h3> Gallery </h3>
  <div className="gallery">
        <div className="row">
    {data.map((item, index) => {
        return (
            <div className="col-sm-6 col-md-3 mb-4">
          <Picture 
            key={index}
            photographer={item.photographer}
            src={item.src.large} 
          />
           </div>
        );
      })}
      </div>

  </div> </>
    
  )
};

export default HomePage;

