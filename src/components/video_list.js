import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  var videoList = [];
  const videoItems = props.videos.map((video) => {

    if (video.snippet.channelTitle.includes(' - Topic')) {

      videoList.push(video.id.videoId);

      return (
        <VideoListItem
          onVideoSelect={props.onVideoSelect}
          key={video.etag}
          video={video}
          id={videoList}/>
      );
    }
  });
  console.log(videoList + " from video_list");

  return (
    <div className="col-md-4 col-md-2">
      <ul className="list-group">
        {videoItems}
      </ul>
    </div>
  );
};

export default VideoList;
