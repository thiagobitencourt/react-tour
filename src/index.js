import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyDnMi7RThnPf5Ct0mHmi7j91GPloimXFnw';

// Create a new componente. 
// This componente should produce some html

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

// Take this component's generated html and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
