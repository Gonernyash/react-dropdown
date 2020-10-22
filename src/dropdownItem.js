import React, {Component} from 'react';
import "./dropdownItem.css";
import flags from "./dropdownImageLoader";

class DropdownItem extends Component {
    render() {
        const imgStyle = {
            width: "13px",
            heigth: "13px",
            marginRight: "7px",
            pointerEvents: "none",
          };

        return (
            <div className="dropdown-item" data-code={this.props.code} id="dropdown-item">
                <img src={flags[this.props.img]} alt="" style={imgStyle} />
                <div className="dropdown-item-title">{this.props.title}</div>
            </div>
        );
    }
}

export default DropdownItem;