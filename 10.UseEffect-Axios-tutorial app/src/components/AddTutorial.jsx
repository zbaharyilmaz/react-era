import { useState } from "react";

const AddTutorial = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); 
    // submit in default davranışı önlenir.
    //postTutorial(title, description)


  };


  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>

      {/* //! form içinde veya submit butonunda onSubmiti ifade edebiliriz. formda tanımlamayı seçtik burada.  */}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            required
          />
        </div>
           {/* //! form içinde veya submit butonunda onSubmiti ifade edebiliriz.Yukarda formda tanımlamayı seçtik */}
        <button type="submit" className="btn btn-danger mb-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTutorial;
