import React, {Component} from 'react';
import "./dropdown.css";
import DropdownMain from "./dropdownMain";
import DropdownList from "./dropdownList";
import DropdownMenu from "./DropdownMenu";

class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.getItemById = (id) => {
            for (let i = 0; i < this.props.itemsData.length; i++) {
                if (this.props.itemsData[i].id === id) return this.props.itemsData[i]
            }
            console.error("Dropdown/Error/Recent-items-list: can't find item with "+ id + " id");
            return -1;
        }

        this.debugging = () => {
            for (let prop in DropdownMenu) {
                if (DropdownMenu[prop] === null) console.error("Dropdown/Error: Can't get '" + prop + "' component");
            }
        }

        this.listRef = React.createRef();
    }

    componentDidMount() {
        console.log(DropdownMenu);
        this.debugging();
        document.addEventListener('click', (event) => {
            const targetClass = event.target.className;
            if (targetClass.slice(0, 8) !== 'dropdown') DropdownMenu.close();
        }, false);
    }

    render() {
        return (
            <div className='dropdown'>
                <DropdownMain />
                <DropdownList 
                    itemsData={this.props.itemsData}
                    itemStructure={this.props.itemStructure}
                    isRecentEnabled={this.props.isRecentEnabled} 
                    recentDefaultItems={this.props.recentDefaultItems.map(val => this.getItemById(val))}
                    ref={this.listRef}
                />
            </div>
        );
    }
} 

export default Dropdown;