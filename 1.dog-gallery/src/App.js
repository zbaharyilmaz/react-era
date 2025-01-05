import Dog from "./components/Dog";
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';


function App() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Dog Gallery</h1>
      
      {/* Row sistemi ile içerikleri grupluyoruz */}
      <div className="row">
        
        {/* Her bir Dog bileşenini ayrı bir kolon içinde yerleştiriyoruz */}
        <div className="col-sm-12 col-md-4 mb-4">
          <Dog 
            name="Husky"
            img="https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_640.jpg"
            color="brown"
            isBlueEyed={false}
            age={5}
          />
        </div>

        <div className="col-sm-12 col-md-4 mb-4">
          <Dog
            name="Karabaş"
            img="https://cdn.pixabay.com/photo/2015/11/17/13/13/bulldog-1047518_640.jpg"
            color="black"
            isBlueEyed={false}
            age={3}
          />
        </div>

        <div className="col-sm-12 col-md-4 mb-4">
          <Dog
            name="Kangal"
            img="https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_640.jpg"
            color="gray"
            isBlueEyed={true}
            age={7}
          />
        </div>
      </div>
    </div>
  );
}


export default App;
