import React from 'react';
import data from './data';
import Picture from './'; 

// Dosya isimlerindeki buyuk kucuk harflere dikkat etmemiz gerekiyor
// import ederken dosya isimleriyle ayni sekilde yazilmalidir//

const Homepage = () => {
  return (
    <div className="gallery">
      {data.map((item, index) => (
        <Picture key={index}  // React'te her bir liste elemanına benzersiz bir key prop'u vermek gerekir.Burada index kullandim
        photographer={item.photographer} // Fotoğrafçı ismi.
        src={item.src.large} /> // Fotoğrafın URL'si data.js te bulunan.
      
      ))}
    </div>
  );
};

export default Homepage;