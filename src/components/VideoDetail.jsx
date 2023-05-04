import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { AiFillCheckCircle } from "react-icons/ai";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <div className="w-full sticky top-[86px]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              width="100%"
              controls
            />
            <div className="text-[#fff] font-bold text-2xl p-8">{title}</div>
            <div className="flex flex-row justify-between text-[#fff] py-4 px-8 ">
              <Link to={`/channel/${channelId}`}>
                <span className="flex items-center gap-2 text-base text-[#fff]">
                  {channelTitle}
                  <AiFillCheckCircle />
                </span>
              </Link>
              <div className="flex items-center gap-[20px]">
                <span className="opacity-70">
                  {parseInt(viewCount).toLocaleString()} views
                </span>
                <span className="opacity-70">
                  {parseInt(likeCount).toLocaleString()} likes
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center align-center px-8 py-16 md:py-4">
          <Videos videos={videos} direction="column" />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
