import React, {Component} from 'react';
import "./dropdownItem.css";
import flags from "./dropdownImageLoader";

class DropdownItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imgPath: flags[this.props.img] 
        }
    }

    render() {
        const imgStyle = {
            width: "13px",
            heigth: "13px",
            marginRight: "7px",
            pointerEvents: "none",
          };

        return (
            <div className="dropdown-item" data-code={this.props.code}>
                <img src={this.state.imgPath} alt="" style={imgStyle} />
                <div className="dropdown-item-title">{this.props.title}</div>
            </div>
        );
    }
}

export default DropdownItem;