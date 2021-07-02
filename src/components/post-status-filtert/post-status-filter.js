import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class  PorstStatusFilter extends Component {
    constructor(props) {
        super(props)
    }
 
    render(){
            return <div className = "bnt-group">
                        <Button 
                            color="info"
                            onClick={this.props.onAllRecords}
                            >Все</Button>{' '}
                        <button 
                            type="button" 
                            className="btn btn-outline-secondary"
                            onClick={this.props.onAllLiked}>Понравившиеся</button>
                    </div>
    }
}

