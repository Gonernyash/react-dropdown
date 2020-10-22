import React, {Component} from 'react';
import "./dropdownButton.css";

class DropdownButton extends Component {
    render() {
        return(
            <button className='dropdown-button' id="dropdown-button">
                <div className="dropdown-icon" id="dropdown-icon"></div>
            </button>
        );
    }
}

export default DropdownButton;