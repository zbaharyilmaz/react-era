const Picture = ({ photographer, src }) => {
  return (
      <>
      <img
        src={src}
        alt={photographer}
        className="card-img" />
      <h5 className="card-title">{photographer}</h5> 
      </>

  );
};

export default Picture;

