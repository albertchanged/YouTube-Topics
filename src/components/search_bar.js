import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  };

  render() {
    const topicsStyle = {
      color: '#DF0101',
    };

    return (
      <div className="search-bar">
        <div className="logo">
          <a href="https://albertchanged.github.io/YouTube-Topics/" id="alogo">
            <img src="http://diylogodesigns.com/blog/wp-content/uploads/2016/05/youtube-high-resolution-logo-download.png" className="img" />
            Topics ♫
          </a>
          <input
            placeholder="Find super HQ music!"
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} onKeyPress={this.handleKeyPress}
            className="input" />
          <button
            onClick={event => this.handleClick(this.state.term)}
            className="button" >♫
          </button>
        </div>
      </div>
    );
  }

  onInputChange(term) { // Use on or handle
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  handleClick(term) {
    console.log(term);
    this.setState({term});
    this.props.onButtonPress(term);
  }

  handleKeyPress = (target) => {
    if (target.key == 'Enter') {
      console.log("Enter key has been pressed");
      this.handleClick(this.state.term);
    }
  }
}

export default SearchBar;
