import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

const Feed = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="h-auto md:h-[92vh] border-r border-solid border-[#3d3d3d] px-0 md:px-8">
        <Sidebar />
        <div className="text-white hidden md:block">
          Copyright © RF & Youtube
        </div>
      </div>
      <div className="p-8 overflow-y-auto h-[90vh] flex-2">
        <div className="text-white text-3xl mb-8 font-bold">
          Selected Category <span className="text-[#F31503]">videos</span>
        </div>
        {/* fetched videos */}
      </div>
    </div>
  );
};

export default Feed;
