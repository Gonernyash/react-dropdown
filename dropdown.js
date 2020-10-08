import React, {Component} from 'react';
import "./dropdown.css";
import DropdownMain from "./dropdownMain";
import DropdownList from "./dropdownList";

class Dropdown extends Component {
    render() {
        return (
            <div className='dropdown'>
                <DropdownMain />
                <DropdownList />
            </div>
        );
    }
} 

export default Dropdown;