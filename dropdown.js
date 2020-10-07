import React, {Component} from 'react';
import "./dropdown.css";
import DropdownMain from "./dropdownMain"

class Dropdown extends Component {
    render() {
        return (
            <div className='dropdown'>
                <DropdownMain />
            </div>
        );
    }
} 

export default Dropdown;