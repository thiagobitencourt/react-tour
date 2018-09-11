import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';

const API_KEY = 'AIzaSyDnMi7RThnPf5Ct0mHmi7j91GPloimXFnw';

// Create a new componente. 
// This componente should produce some html

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'surfboards' }, videos => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

// Take this component's generated html and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
