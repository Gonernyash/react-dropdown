import React, {Component} from 'react';
import "./dropdownList.css";
import DropdownItemsContainer from "./dropdownItemsContainer";
import DropdownRecentContainer from "./dropdownRecentContainer";
import {ToggleContextConsumer} from "./toggleContext";

class DropdownList extends Component {
    render() {
        return(
            <ToggleContextConsumer>
                {context => (
                    <div className={context.isToggled ? "dropdown-list dropdown-list--toggled" : "dropdown-list"}>
                        <DropdownRecentContainer />
                        <DropdownItemsContainer />
                    </div>
                )}
            </ToggleContextConsumer>
        );
    }
}

export default DropdownList;