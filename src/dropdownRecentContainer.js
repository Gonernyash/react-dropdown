import React, {Component} from "react";
import DropdownRecent from "./dropdownRecent";
import "./dropdownRecentContainer.css";
import menu from "./DropdownMenu";

class DropdownRecentContainer extends Component {
    constructor(props) {
        super(props);

        this.recentCompRef = React.createRef();
    } 

    componentDidMount() {
        menu.recentComp = this.recentCompRef.current;
    }

    render() {
        return (
            <div className="dropdown-recent">
                <DropdownRecent itemStructure={this.props.itemStructure} recentDefaultItems={this.props.recentDefaultItems} ref={this.recentCompRef}/>
            </div>
        );
    }
}

export default DropdownRecentContainer;