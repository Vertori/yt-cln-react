import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Videos } from "./";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <div className="h-[90vh] p-8 overflow-y-auto flex-2">
      <div className="text-3xl mb-8 text-white font-bold">
        Search Results For <span className="text-[#F31503]">{searchTerm}</span>{" "}
        videos
      </div>
      <Videos videos={videos} />
    </div>
  );
};

export default SearchFeed;
