import React, {Component} from "react";
import "./dropdownMain.css";
import DropdownButton from "./dropdownButton";
import menu from './DropdownMenu';

class DropdownMain extends Component {
    constructor(props) {
        super(props);

        this.getInput = (input) => menu.input = input;
    }

    render() {
        return(
            <div className="dropdown-main">
                <input className='dropdown-input' type="text" ref={this.getInput} onInput={() => menu.searchItems()} onFocus={() => menu.open()}></input>
                <DropdownButton />
            </div>
        );
    }
}

export default DropdownMain;