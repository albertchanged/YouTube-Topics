import React from 'react';
import VideoList from './video_list';

const VideoDetail = ({video, videoId}) => {
  if (!video) {
    return <div>Loading...</div>
  }

  videoId = video.id.videoId;
  console.log(videoId);
  const url = "https://www.youtube.com/embed/" + videoId + "?vq=hd1080?rel=0;&autoplay=1&loop=1&playlist=" + videoId;
  const externalUrl = "https://www.youtube.com/watch?v=" + videoId;
  // console.log(url);
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>
          <strong><a href={externalUrl} className="link" target="_blank">{video.snippet.title}</a></strong>
        </div>
        <div><strong>{video.snippet.channelTitle}</strong></div>
        <br></br>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
