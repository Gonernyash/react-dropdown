import React, {Component} from 'react';
import "./dropdownButton.css";
import menu from './DropdownMenu'; 

class DropdownButton extends Component {
    constructor(props) {
        super(props);

        this.iconRef = React.createRef(); 
    }

    componentDidMount() {
        menu.icon = this.iconRef.current;
    }

    render() {
        return(
            <button className='dropdown-button' id="dropdown-button" onClick={() => menu.toggle()}>
                <div className="dropdown-icon" id="dropdown-icon" ref={this.iconRef}></div>
            </button>
        );
    }
}

export default DropdownButton;