import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="h-auto md:h-[100vh] border-r border-solid border-[#3d3d3d] px-0 md:px-8">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="text-white hidden md:block">
          Copyright © RF & Youtube
        </div>
      </div>
      <div className="p-8 overflow-y-auto h-[100vh] flex-2">
        <div className="text-white text-3xl mb-8 font-bold">
          {selectedCategory} <span className="text-[#F31503]">videos</span>
        </div>
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
