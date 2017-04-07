import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';



// for our own js imports, write out location without file type
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAILMrrqaa6K6sITyhpnBU_57cw0F1th5s'

//test



//create a new component that will produce some HTML
class App extends Component {
    constructor(props) {
        super(props);
        // video is array of videos from API
        // selectedVideo is current video
        this.state = {
            videos : [],
            selectedVideo: null
        };

        // constructor calls videoSearch function on 'USMNT'
        this.videoSearch('USMNT');

    }

    // App function videoSearch defined - takes term and performs YT search
    // YTSearch is function imported at top, takes API key and term, then fx
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
             this.setState({
                videos : videos,
                selectedVideo : videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)} , 300 )

        return (
        <div>
            <SearchBar onSearchTermChange = { videoSearch }/>
            <VideoDetail video= {this.state.selectedVideo} />
            <VideoList
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                videos = {this.state.videos} />
        </div>
        );
    }
}

// take generated HTML and append on DOM
ReactDOM.render(<App />, document.querySelector('.container'));
