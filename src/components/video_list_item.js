import React from 'react';

const VideoListItem = ({video, onVideoSelect, id}) => {
  // const video = props.video;
  // const onVideoSelect = props.onVideoSelect;

  console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <div className="list-group-item">
      <li onClick={() => onVideoSelect(video)}>
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading"><strong>{video.snippet.title}</strong></div>
            <div className="media-heading">{video.snippet.channelTitle}</div>
          </div>
        </div>
      </li>
  </div>
  );
};

export default VideoListItem;
