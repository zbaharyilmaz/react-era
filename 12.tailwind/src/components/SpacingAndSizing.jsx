
const SpaceSize = () => {
  return (
  <div>
    <div className="bg-yellow-200 mt-3">
    <h1 className="text-xl">Spacing & Sizing</h1>
    <button className="bg-blue-500 text-white p-2 m-1 font-medium">Click Click!</button>
    <button className="bg-red-500 border-[3px] rounded-full text-white p-2 m-1 font-medium px-5 ">Click Click!</button>
    <button className="bg-pink-500 text-black p-2 m-1 rounded-[50%] font-large ms-6">Click Click!</button>
    </div>
    <div className="bg-red-400">
        <button className="bg-green-300 p-5 rounded-sm my-6">Click Again!</button>
    </div>
  </div>
  );
};

export default SpaceSize;