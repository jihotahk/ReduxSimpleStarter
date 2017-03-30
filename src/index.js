import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyAILMrrqaa6K6sITyhpnBU_57cw0F1th5s'

//create a new component that will produce some HTML
const App = () => {
    return <div>Hi!</div>;
}

// take generated HTML and append on DOM
ReactDOM.render(<App />, document.querySelector('.container'));
