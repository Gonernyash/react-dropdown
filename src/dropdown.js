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
            console.error("Error: can't find item with "+ id + " id");
            return -1;
        }

        this.listRef = React.createRef();
    }

    componentDidMount() {
        if (this.props.isRecentEnabled) {
            this.recentRef = this.listRef.current
            .recentContRef.current
            .recentRef.current;
        }
        
        this.menu = new DropdownMenu();
        console.log(this.menu);
        
        this.menu.button.addEventListener('click', () => this.menu.toggle(), false);
        this.menu.input.addEventListener('input', (event) => this.menu.items.search(event), false);
        this.menu.input.addEventListener('focus',() => this.menu.open(), false);
        this.menu.items.all.forEach((item) => {
            item.addEventListener('click', (event) => this.menu.items.select(event), false);
            if (this.props.isRecentEnabled) item.addEventListener('click', (event) => this.menu.items.recentUpdate(event, this.recentRef, this), false);
        });
        document.addEventListener('click', (event) => {
            const targetClass = event.target.className;
            if (targetClass.slice(0, 8) !== 'dropdown') this.menu.close();
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