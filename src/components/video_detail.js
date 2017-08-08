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
        <strong>
          <div>
            <a href={externalUrl} id="link" target="_blank">{video.snippet.title}</a>
          </div>
          <div>
            {video.snippet.channelTitle}
          </div>
        </strong>
        <br></br>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
