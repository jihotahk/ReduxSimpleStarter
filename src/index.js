import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';



// for our own js imports, write out location without file type
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAILMrrqaa6K6sITyhpnBU_57cw0F1th5s'

//test



//create a new component that will produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos : [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
            // actually the same as {videos:videos} -> use when key/value same
             this.setState({ videos });
        });
    }

    render() {
        return (
        <div>
            <SearchBar />
            <VideoList videos = {this.state.videos} />
        </div>
        );
    }
}

// take generated HTML and append on DOM
ReactDOM.render(<App />, document.querySelector('.container'));
