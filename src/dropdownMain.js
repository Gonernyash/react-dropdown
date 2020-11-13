import React, {Component} from "react";
import "./dropdownMain.css";
import DropdownButton from "./dropdownButton";
import menu from './DropdownMenu';

class DropdownMain extends Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    componentDidMount() {
        menu.input = this.inputRef.current;
    }

    render() {
        return(
            <div className="dropdown-main">
                <input className='dropdown-input' type="text" id="dropdown-input" ref={this.inputRef} onInput={() => menu.items.search()}></input>
                <DropdownButton />
            </div>
        );
    }
}

export default DropdownMain;