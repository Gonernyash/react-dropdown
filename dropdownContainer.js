import React, {Component} from 'react';
import Dropdown from './src/dropdown';
import menu from './src/DropdownMenu';

// Getting array of items properties.
import itemsData from './items.json'; //!!!Every item MUST HAVE the unique 'id' property


// ITEMS CUSTOMIZATION

// Icons loading
import itemsIcons from './dropdownIconsLoader'; //If you don't need icons you can delete this  

// You are able to customize item as you want
const itemStructure = (self) => {
    const itemStyle = {
        width: '100%',
        height: 16.7,
        padding: '2px 6px 1.7px 6px'
    }
    const imgStyle = {
        width: "13px",
        height: "13px",
        marginRight: "7px",
        pointerEvents: "none",
    };
    return (
        <div 
        /* !!!iportant*/ {...menu.itemProps(self)} /*!!!important */
        style = {itemStyle} 
        className="dropdown-item" data-code={self.props.id}>
            <img src={itemsIcons.list[self.props.img]} alt="" style={imgStyle} />
            <div className="dropdown-item-title">{self.props.title}</div>
        </div>
    );
}


// RECENT LIST CUSTOMIZATION 

// Recent List is part of dropdown menu displaying items which user selected recently. 

const isRecentListEnabled = true; // The answer to the question whether you need it 

// (!Only if recent list enabled) Items rendering by default by first loading of web-site.
const recentDefaultItems = ['RU', 'US', 'JP', 'CN', 'FR', 'DE']; // This array contains ids of items you wanna make default.


// RETURNING

class DropdownContainer extends Component {
    render() {
        return (
            <>
                <Dropdown
                key={0}
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