import React, {Component} from 'react';
import Dropdown from './src/dropdown';

import itemsData from './items.json'; // Getting array of items properties.
import itemsIcons from './src/dropdownImageLoader';

//You are able to customize item as you want
const itemStructure = (self) => {
    const imgStyle = {
        width: "13px",
        heigth: "13px",
        marginRight: "7px",
        pointerEvents: "none",
    };
    return (
        <div className="dropdown-item" data-code={self.props.id} id="dropdown-item">
            <img src={itemsIcons.list[self.props.img]} alt="" style={imgStyle} />
            <div className="dropdown-item-title">{self.props.title}</div>
        </div>
    );
}

// Recent List is part of dropdown menu displaying items which user selected recently. 

const isRecentListEnabled = true; // The answer to the question whether you need it 

// (!Only if recent list enabled) Items rendering by default by first loading of web-site.
const recentDefaultItems = ['RU', 'US', 'JP', 'CN', 'FR', 'DE']; // This array contains ids of items you wanna make default.

class DropdownContainer extends Component {
    render() {
        return (
            <>
                <Dropdown
                itemsData={itemsData}
                itemStructure={itemStructure} 
                isRecentEnabled={isRecentListEnabled}
                recentDefaultItems={recentDefaultItems}
                />
            </>
        );
    }
}

export default DropdownContainer