import React, {Component} from 'react';
import "./dropdownList.css";
import DropdownItemsContainer from "./dropdownItemsContainer";
import DropdownRecentContainer from "./dropdownRecentContainer";

class DropdownList extends Component {
    constructor(props) {
        super(props);

        this.recentContRef = React.createRef();
        this.itemsContainer = 
        <DropdownItemsContainer 
            itemsData={this.props.itemsData}
            itemStructure={this.props.itemStructure}
        />
    }

    render() {
        return this.props.isRecentEnabled ? 
        (
            <div className="dropdown-list" id="dropdown-list">
                <DropdownRecentContainer 
                    recentDefaultItems={this.props.recentDefaultItems} 
                    itemStructure={this.props.itemStructure}
                    ref={this.recentContRef}
                />
                {this.itemsContainer}
            </div>
        ) : (
            <div className="dropdown-list" id="dropdown-list">
                {this.itemsContainer}
            </div>
        );
    }
}

export default DropdownList;