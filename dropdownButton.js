import React, {Component} from 'react';
import "./dropdownButton.css";
import {ToggleContextConsumer} from "./toggleContext"

class DropdownButton extends Component {
    render() {
        return(
            <ToggleContextConsumer>
                {context => (
                    <button className='dropdown-button' id="toggle-button" onClick={context.toggleState}>
                        <div className={context.isToggled ? 'dropdown-icon dropdown-icon--toggled' : 'dropdown-icon'}></div>
                    </button>
                )}
            </ToggleContextConsumer>
        );
    }
}

export default DropdownButton;