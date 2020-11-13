import React, {Component} from "react";
import DropdownItem from "./dropdownItem";

class DropdownRecent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items:  this.props.recentDefaultItems.map(data => 
            <DropdownItem 
                itemStructure={this.props.itemStructure} 
                key={data.id} 
                id={data.id} 
                img={data.img} 
                title={data.title}
                isRecent={true}
            />)
        }
    }

    render() {
        return (
            this.state.items
        );
    }
}

export default DropdownRecent;