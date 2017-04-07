import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// create a class-based component, based off of React.Component
class SearchBar extends Component {

    //all js classese have a special fx called constructor
    // first and only fx called automatically Whenever new instance of class is created
    // used to initialize variables like state
    //onSearchTermChange
    constructor(props) {
        // super calls parent class (React.Component)
        super(props);
        this.state = { term: '' };
    }

    render() {
        return (
            <div className='search-bar'>
                <input
                    value = {this.state.term}
                    onChange= { event => this.onInputChange(event.target.value)}
                />
            </div>
        );

    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar
