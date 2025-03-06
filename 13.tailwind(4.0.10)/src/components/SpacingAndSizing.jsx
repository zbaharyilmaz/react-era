import React from "react";

const SpacingAndSizing = () => {
  return (
    <div>
      <h3 className="text-2xl">Spacing And Sizing</h3>
      <div>
        <button className="bg-blue-500 text-white p-4 m-1 ">Tıkla</button>
        <button className="bg-blue-500 text-white px-4 ">Tıkla</button>
        <button className="bg-blue-500 text-white ml-4 ">Tıkla</button>
        <button className="bg-blue-500 text-white ms-4 ">Tıkla</button>
      </div>
      <div>
        <button className="bg-green-500 mx-4 px-4 py-2 border-green-700 rounded-md ">
          Gönder
        </button>
        <button className="bg-green-500 mx-4 px-4 py-2 border-green-700 border-[3px] rounded-[10px] ">
          Gönder
        </button>
        <button className="bg-green-500 mx-4 px-4 py-2 border-green-700 border-[3px] rounded-full ">
          Gönder
        </button>
        <button className="bg-green-500 mx-4 px-4 py-4 border-green-700 border-[3px] rounded-[50%] "></button>
      </div>
      <div>
        <button className="bg-amber-500 w-20 rounded-full py-2 mx-2 ">
          Kaydet
        </button>
        <button className="bg-amber-500 w-1/2 rounded-full py-2 mx-2 ">
          Kaydet
        </button>
        <button className="bg-amber-500 w-[300px] rounded-full py-2 mx-2 ">
          Kaydet
        </button>
        <button className="bg-amber-500 w-1/2 max-w-[500px] rounded-full py-2 mx-2 ">
          Kaydet
        </button>
      </div>
      <div>
      <h1 className="text-2xl text-center">Hover And Focus</h1>
      <div>
        <button className="w-40 bg-sky-400 text-slate-50 rounded-full py-2 mx-2 hover:bg-sky-600 hover:shadow-slate-400 ">
          Save
        </button>
        <button className="w-40 bg-yellow-400 text-white rounded-full py-2 mx-2 hover:bg-yellow-600 hover:shadow-slate-400 focus:ring-4 focus:ring-yellow-200">   //& focus:ring-4
          Edit
        </button>
      </div>
      <div className="mt-2">
        <input
          type="email"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/2 p-2.5 focus:outline-red-600 peer"
        />
        <p className="mt-2 text-red-600 hidden peer-invalid:block">  //!peer-focus:block   veya peer-invalid:block
          Please provide a valid email
        </p>
      </div>
    </div>
    </div>
  );
};
export default SpacingAndSizing;