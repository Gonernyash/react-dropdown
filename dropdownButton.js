import React, {Component} from 'react';
import "./dropdownButton.css";

class DropdownButton extends Component {
    render() {
        return(
            <button className='dropdown-button'>
                <div className='dropdown-icon'></div>
            </button>
        );
    }
}

export default DropdownButton;