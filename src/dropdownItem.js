import React, {Component} from 'react';
import "./dropdownItem.css";
import menu from './DropdownMenu';

class DropdownItem extends Component {
    constructor(props) {
        super(props);

        this.itemRef = React.createRef();
    }

    componentDidMount() {
        menu.items.push(this.itemRef.current);
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