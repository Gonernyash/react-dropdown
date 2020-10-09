import React, {Component} from 'react';
import "./dropdownList.css";
import DropdownItemsContainer from "./dropdownItems"

class DropdownList extends Component {
    render() {
        return(
            <div className="dropdown-list dropdown-list--toggled">
                {/*<DropdownRecentContainer items={[0, 1, 2, 3, 4, 5]}/>*/}
                <DropdownItemsContainer />
            </div>
        );
    }
}

export default DropdownList;