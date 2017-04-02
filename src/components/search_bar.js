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
                    onChange= { event => this.onInputChange(event.target.value)} />
            </div>
        );

    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}
    // every class must have a render function
    // render() {
    //     // render fx must return some JSX, otherwise error
    //     return <input onChange={this.onInputChange} />;
    // }
    //
    // // event handler
    // onInputChange(event) {
    //     setState({ term: event.target.value });
    // }

    /*
    Short hand for one liner event handler on render function:
    return <input onChange = { (event) => console.log(event.target.value) } />;

    if only one argument, can even remove ()

    */


export default SearchBar;

/*/ 'State' is a plain javascript object that is used to record or react to user events.
// Each class-based component has its own state object.
// Whenever a component's state is changed, the component automatically re renders.
// Also forces its children to re render as well.
Before using STATE inside of a component, we need to initialize the state object.
To initialize STATE, we set property 'state' to a plain js object inside the class' constructor object.
*/
