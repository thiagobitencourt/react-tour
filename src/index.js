import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoDetail from './components/video-detail';
import VideoList from './components/video-list';

const API_KEY = 'AIzaSyDnMi7RThnPf5Ct0mHmi7j91GPloimXFnw';

// Create a new componente. 
// This componente should produce some html

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            videos: [],
            selectedVideo: null
        };

       this.videoSearch('surfboard');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term }, videos => {
            this.setState({ 
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos}
                />
            </div>
        )
    }
}

// Take this component's generated html and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
