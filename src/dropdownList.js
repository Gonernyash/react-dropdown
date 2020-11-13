import React, {Component} from 'react';
import "./dropdownList.css";
import DropdownItemsContainer from "./dropdownItemsContainer";
import DropdownRecentContainer from "./dropdownRecentContainer";
import menu from './DropdownMenu';

class DropdownList extends Component {
    constructor(props) {
        super(props);

        this.itemsContainer = 
        <DropdownItemsContainer 
            itemsData={this.props.itemsData}
            itemStructure={this.props.itemStructure}
        />

        this.getList = (list) => menu.list = list;
    }

    render() {
        if (this.props.isRecentEnabled) {
            return(
                <div className="dropdown-list" id="dropdown-list" ref={this.getList}>
                    <DropdownRecentContainer 
                     recentDefaultItems={this.props.recentDefaultItems} 
                        itemStructure={this.props.itemStructure}
                    />
                     {this.itemsContainer}
                </div>
            );
        } else {
            return(
                <div className="dropdown-list" id="dropdown-list">
                    {this.itemsContainer}
                </div>
            );
        }
    }
}

export default DropdownList;