import React, { Component } from 'react';

class VideoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { video: '', videoId: '' };
  }

  render() {
    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div>
            <strong><a href={externalUrl} className="link" target="_blank">{video.snippet.title}</a></strong>
          </div>
          <div>{video.snippet.channelTitle}</div>
          <br></br>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }

  handleVideoChange(video) {
    this.setState({video});
  }


}
