import React, {Component} from "react";
import DropdownRecent from "./dropdownRecent";
import "./dropdownRecentContainer.css";

class DropdownRecentContainer extends Component {
    render() {
        return (
            <div className="dropdown-recent">
                <DropdownRecent />
            </div>
        );
    }
}

export default DropdownRecentContainer;