import React, {Component} from 'react';
import "./dropdownItem.css";
import menu from './DropdownMenu';

class DropdownItem extends Component {
    constructor(props) {
        super(props);

        this.getItem = (item) => {
            if (!this.props.isRecent) menu.items.push(item);
        } 
    }

    render() {
        return (
            <>
                {this.props.itemStructure(this)}
            </> 
        );
    }
}

export default DropdownItem;