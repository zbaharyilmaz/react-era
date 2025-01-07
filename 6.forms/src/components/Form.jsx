import React from "react";


const FormEvents = () => {
  return (
    <div>
      <div className="mt-4 p-3">
        <div className="text-center">
          <h1>*********</h1>
          <h2>Form Events</h2>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input onChange={(e)=>console.log(e.target.value)}  
           //!e.target.value ile input içine girilen değere ulaşabiliriz; onChange ile.
              type="text"
              className="form-control"
              id="name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              id="password"
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label className="form-label" htmlFor="remember">
              Remember me
            </label>
          </div>

          <div className="mb-3">
            <label className="form-check-label" htmlFor="country">
              Country
            </label>
            <select id="" className="form-select" aria-label="Default select example">
              <option >Countries</option>
              <option value="1">Turkey</option>
              <option value="2">England</option>
              <option value="3">Germany</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          
        </form>

      </div>
    </div>
  );
};

export default FormEvents;
