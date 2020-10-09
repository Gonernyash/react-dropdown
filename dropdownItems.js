import React, {Component} from 'react';
import "./dropdownItems.css";
const importAll = (i) => i.keys().map(i);
const importImages = importAll(require.context('./flags', false, /.*\.svg$/));

class DropdownItem extends Component {
    render() {
        
        const images = importImages.map(item => {
            item = item.slice(14);
            item = item.slice(0, -13)
            return item + ".svg"
        })

        const i = images.indexOf(this.props.img);

        const imgStyle = {
            width: "13px",
            heigth: "13px",
            marginRight: "7px",
            pointerEvents: "none"
        }

        return(
            <div className="dropdown-item" data-code={this.props.code}>
                <img src={importImages[i]} alt='' style={imgStyle} />
                <div className="dropdown-item-title">{this.props.title}</div>
            </div>
        );
    }
}

class DropdownItemsContainer extends Component {
    render() {
        return(
            <>
                <DropdownItem code="RU" img="russia.svg" title="Russia"/>
            </>
        );
    }
}

export default DropdownItemsContainer