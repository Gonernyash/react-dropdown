import React, {Component} from "react";
import DropdownRecent from "./dropdownRecent";
import "./dropdownRecentContainer.css";
import menu from "./DropdownMenu";

class DropdownRecentContainer extends Component {
    constructor(props) {
        super(props);

        this.getRecentComp = (recentComp) => menu.recentComp = recentComp;
        this.getRecentList = (recentList) => menu.recentList = recentList
    } 

    render() {
        return (
            <div className="dropdown-recent" ref={this.getRecentList}>
                <DropdownRecent itemStructure={this.props.itemStructure} recentDefaultItems={this.props.recentDefaultItems} ref={this.getRecentComp}/>
            </div>
        );
    }
}

export default DropdownRecentContainer;