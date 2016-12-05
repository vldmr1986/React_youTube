import React, { Component } from 'react';

class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = {term : 'Snow Sport'};
	}
	onInputChange(term) {
        this.setState({ term });
        this.props.onSearchVideo(term);
    }
    render() {
        return (<div className="search-bar">
            <input
                value = { this.state.term }
                onChange={event => this.onInputChange(event.target.value)}
            />
            </div>
        );
    }
}

export default SearchBar;
