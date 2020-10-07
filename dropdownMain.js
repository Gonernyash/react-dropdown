import React, {Component} from "react";
import "./dropdownMain.css";

class DropdownMain extends Component {
    render() {
        return(
            <div className="dropdown-main">
                <input class='dropdown-input' type="text" id="country_picker-input"></input>
            </div>
        );
    }
}

export default DropdownMain;