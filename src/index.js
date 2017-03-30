import React from 'react';
import ReactDOM from 'react-dom';

// for our own js imports, write out location without file type
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAILMrrqaa6K6sITyhpnBU_57cw0F1th5s'

//create a new component that will produce some HTML
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

// take generated HTML and append on DOM
ReactDOM.render(<App />, document.querySelector('.container'));
