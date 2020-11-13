import React, {Component} from 'react';
import "./dropdownList.css";
import DropdownItemsContainer from "./dropdownItemsContainer";
import DropdownRecentContainer from "./dropdownRecentContainer";
import menu from './DropdownMenu';

class DropdownList extends Component {
    constructor(props) {
        super(props);

        this.recentContRef = React.createRef();
        this.itemsContainer = 
        <DropdownItemsContainer 
            itemsData={this.props.itemsData}
            itemStructure={this.props.itemStructure}
        />

        this.listRef = React.createRef();
    }

    componentDidMount() {
        menu.list = this.listRef.current;
    }

    render() {
        return this.props.isRecentEnabled ? 
        (
            <div className="dropdown-list" id="dropdown-list" ref={this.listRef}>
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