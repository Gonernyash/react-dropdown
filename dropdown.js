import React, {Component} from 'react';
import "./dropdown.css";
import DropdownMain from "./dropdownMain";
import DropdownList from "./dropdownList";
import { ToggleContextProvider } from "./toggleContext";

class Dropdown extends Component {
    render() {
        return (
            <div className='dropdown'>
                <ToggleContextProvider>
                    <DropdownMain />
                    <DropdownList />
                </ToggleContextProvider>
            </div>
        );
    }
} 

export default Dropdown;