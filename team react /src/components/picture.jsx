import React from 'react';

const Picture = ({ photographer, src }) => {
  return (
    <div className="picture">
      <img src={src} alt={photographer} />
      <p>{photographer}</p>
    </div>
  );
};

export default Picture;