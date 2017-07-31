import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyC9AA_JLazFr5MpUefWbrCp8Xy_MQg099s';

// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearchAndChange('everytime we touch yanou candlelight mix');
  }

  videoSearchAndChange(term) { // Searches for videos and sets the selected video
    YTSearch({key: API_KEY, term: term + ' topic'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
    console.log(term);
  }

  videoSearch(term) { // Searches for videos ONLY
    YTSearch({key: API_KEY, term: term + ' topic'}, (videos) => {
      this.setState({
        videos: videos
      });
    });
    console.log(term);
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    // onSearchTermChange={videoSearch}
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} onButtonPress={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
