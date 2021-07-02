import React, { Component } from 'react';


export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(e) {
        
        this.props.onFilter(e.target.value);
    }

    render() {
        return (
            <input 
                className="form-control search-input"
                type="text"
                placeholder = "Поиск по записиси"
                onChange={this.onSearch}
            />
        )
    }
    
}

