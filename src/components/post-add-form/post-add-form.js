import React, { Component } from 'react';


export default class PostAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ''
        };

        this.onValueChange = this.onValueChange.bind(this);
        this.onFormSubmit =this.onFormSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            
            message: e.target.value.trim()
                
        })
        
    }

    onFormSubmit(e) {
        e.preventDefault()
        if (this.state.message != '') {
           
            //e.target.reset()
            this.props.onAdd(this.state.message)
            this.setState({
                message: ''
                    
            })
        }
        
        
    }
   
    render() {
        const {onAdd} = this.props;
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onFormSubmit}>
                <input
                    type="text"
                    placeholder="О чем вы думаете сейчас"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.message}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                    >
                        Добавить</button>
            </form>
        )

    }
    
}



