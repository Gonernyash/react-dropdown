import React, {Component} from 'react';
import "./dropdownButton.css";
import {ToggleContextConsumer} from "./toggleContext"

class DropdownButton extends Component {
    constructor(props) {
        super(props);

        this.iconRef = React.createRef();
        this.buttonRef = React.createRef();
        this.iconToggle = () => {
            this.iconRef.current.classList.toggle('dropdown-icon--toggled');
        }
    }

    componentDidMount() {
        this.buttonRef.current.addEventListener('click', this.iconToggle, false);
    }

    render() {
        return(
            <ToggleContextConsumer>
                {context => (
                    <button className='dropdown-button' id="toggle-button" onClick={context.toggleState} ref={this.buttonRef}>
                        <div className='dropdown-icon' ref={this.iconRef}></div>
                    </button>
                )}
            </ToggleContextConsumer>
        );
    }
}

export default DropdownButton;