import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  console.log(channelDetail);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <div className="min-h-[95vh]">
      <div className="z-10 h-[300px] bg-gradient-to-r from-rose-100 to-teal-100" />
      <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      <div className="flex p-8">
        <div className="mr-0 sm:mr-[100px]" />
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default ChannelDetail;
