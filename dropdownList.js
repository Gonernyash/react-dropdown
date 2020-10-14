import React, {Component} from 'react';
import "./dropdownList.css";
import DropdownItemsContainer from "./dropdownItemsContainer";
import DropdownRecentContainer from "./dropdownRecentContainer";

class DropdownList extends Component {
    render() {
        return(
            <div className="dropdown-list" id="dropdown-list">
                <DropdownRecentContainer />
                <DropdownItemsContainer />
            </div>
        );
    }
}

export default DropdownList;