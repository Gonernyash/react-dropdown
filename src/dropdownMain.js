import React, {Component} from "react";
import "./dropdownMain.css";
import DropdownButton from "./dropdownButton";

class DropdownMain extends Component {
    render() {
        return(
            <div className="dropdown-main">
                <input className='dropdown-input' type="text" id="dropdown-input"></input>
                <DropdownButton />
            </div>
        );
    }
}

export default DropdownMain;