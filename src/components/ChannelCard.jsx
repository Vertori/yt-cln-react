import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <div
      className="rounded-[20px] flex justify-center items-center w-[320px] h-[326px] m-auto"
      style={{ marginTop: marginTop }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <div className="flex flex-col justify-center text-center text-[#fff]">
          <img
            className="rounded-full h-[180px] w-[180px] mb-8"
            src={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
          />
          <div className="font-bold flex justify-center items-center gap-2">
            {channelDetail?.snippet?.title}
            <AiFillCheckCircle className="text-gray-500" />
          </div>
          {channelDetail?.statistics?.subscriberCount && (
            <span>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
