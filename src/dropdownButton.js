import React, {Component} from 'react';
import "./dropdownButton.css";
import menu from './DropdownMenu'; 

class DropdownButton extends Component {
    constructor(props) {
        super(props);

        this.getIcon = (icon) => menu.icon = icon; 
    }

    render() {
        return(
            <button className='dropdown-button' id="dropdown-button" onClick={() => menu.toggle()}>
                <div className="dropdown-icon" id="dropdown-icon" ref={this.getIcon}></div>
            </button>
        );
    }
}

export default DropdownButton;