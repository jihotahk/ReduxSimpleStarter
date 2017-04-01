import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';



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

        YTSearch({key: API_KEY, term: 'usmnt'}, videos => {
             this.setState({
                videos : videos,
                selectedVideo : videos[0]
            });
        });
    }

    render() {
        return (
        <div>
            <SearchBar />
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
