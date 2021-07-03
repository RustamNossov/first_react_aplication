import React, { Component } from 'react';
//import { Button } from 'reactstrap';

export default class  PorstStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name:"all", label: "Все"},
            {name:'like', label: "Понравившиеся"}
        ]
        
    }

    onSwichBtns() {

    }
 
    render(){
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props
            const active = filter === name;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary'

            return (
                <button 
                key={name}
                type="button" 
                className={`btn ${clazz}`}
                onClick={()=>onFilterSelect(name)}
                >{label}
                </button>
            )
        })
        console.log(this.props)
            return <div className = "bnt-group">
                       {buttons}

                    </div>
    }
}

