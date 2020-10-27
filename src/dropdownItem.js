import React, {Component} from 'react';
import "./dropdownItem.css";

class DropdownItem extends Component {
    render() {
        return (
            <>
                {this.props.itemStructure(this)}
            </> 
        );
    }
}

export default DropdownItem;