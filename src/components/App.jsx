class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      video: null
    };
  }

  componentDidMount() {
    this.handleSearchClick('cats');
  }

  handleVideoTitleClick (currentVideo) {
    this.setState({
      video: currentVideo
    });
  }

  handleSearchClick (query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) =>
      this.setState({
        videos: videos,
        video: videos[0]
      })
    );
  }

  render() {

    return (

      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearch={this.handleSearchClick.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} handleVideoTitleClick={this.handleVideoTitleClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }


}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;