const ProfileCard = () => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-5">
      <div className="flex flex-col items-center pb-10 ">
        <h1>lll</h1>
        <img
          className="w-24 h-24 m-3 rounded-full shadow-lg"
          src="https://api.dicebear.com/9.x/avataaars/svg"
          alt="avatar"
        />
      
       
        <div className="flex mt-4 md:mt-6">
            <button
            className="btn-primary"
          >
            Add friend
    
           </button>
           <button
            className="btn-secondary"
          >
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
