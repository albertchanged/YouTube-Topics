import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId;
  // console.log(videoId);
  const url = "https://www.youtube.com/embed/" + videoId + "?vq=hd1080?rel=0;&autoplay=1";
  const externalUrl = "https://www.youtube.com/watch?v=" + videoId;
  // console.log(url);
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>
          <strong><a href={externalUrl} target="_blank">{video.snippet.title}</a></strong>
        </div>
        <div>{video.snippet.channelTitle}</div>
        <br></br>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
