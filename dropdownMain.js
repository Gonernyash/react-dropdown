import React, {Component} from "react";
import "./dropdownMain.css";
import DropdownButton from "./dropdownButton";
import { ToggleContextConsumer } from './toggleContext';

class DropdownMain extends Component {
    constructor(props) {
        super(props);

        this.input = React.createRef();
    }

    render() {
        return(
            <ToggleContextConsumer>
                {context => {
                    if (this.input.current) this.input.current.value = context.selectedItem;
                    return (
                    <div className="dropdown-main">
                        <input className='dropdown-input' type="text" id="country_picker-input" ref={this.input}></input>
                        <DropdownButton />
                    </div>
                )}}
            </ToggleContextConsumer>
        );
    }
}

export default DropdownMain;