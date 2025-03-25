import React from 'react';

const EngineLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      {/* Engine Revving GIF */}
      <img src="https://res.cloudinary.com/dlrp2o9dr/image/upload/v1742926202/VQmLXXXMfgIAdwFENs857rpBVOPtZtyj8KM5_lpdsmw.gif" alt="Engine Revving" className="w-40 h-40" />

      {/* Revving Text Animation */}
      <p className="text-lg mt-4 font-semibold animate-pulse">
        Revving up...
      </p>
    </div>
  );
};

export default EngineLoading;
