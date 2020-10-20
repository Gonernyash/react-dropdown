import React, {Component} from "react";
import DropdownRecent from "./dropdownRecent";
import "./dropdownRecentContainer.css";

class DropdownRecentContainer extends Component {
    constructor(props) {
        super(props);

        this.recentRef = React.createRef();
    } 

    render() {
        return (
            <div className="dropdown-recent" id="dropdown-recent">
                <DropdownRecent ref={this.recentRef}/>
            </div>
        );
    }
}

export default DropdownRecentContainer;