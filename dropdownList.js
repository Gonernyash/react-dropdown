import React, {Component} from 'react';
import "./dropdownList.css";
import DropdownItemsContainer from "./dropdownItemsContainer";
import DropdownRecentContainer from "./dropdownRecentContainer";

class DropdownList extends Component {
    constructor(props) {
        super(props);

        this.recentContRef = React.createRef();
    }

    render() {
        return(
            <div className="dropdown-list" id="dropdown-list">
                <DropdownRecentContainer ref={this.recentContRef}/>
                <DropdownItemsContainer />
            </div>
        );
    }
}

export default DropdownList;