import React from 'react';
import DropdownItem from "./dropdownItem";
import dropdownImages from "../dropdownIconsLoader";

class DropdownMenu {
    constructor() {
        this.list = null;
        this.icon = null;
        this.input = null;
        this.recentComp = 'dfdsf';
        this.itemProps = (self) => {
            return {
                'ref': self.getItem,
                'onClick': (event) => {
                    const target = event.target;
                    this.selectItem(target);
                    this.recentUpdate(target);
                }
            } 
        }
        this.items = [];
    }

    open() {
        this.input.value = '';
        this.input.focus();
        this.list.scroll(0, 0);
        this.list.classList.add('dropdown-list--toggled');
        this.icon.classList.add('dropdown-icon--toggled');
    }

    close() {
        this.list.classList.remove('dropdown-list--toggled');
        this.icon.classList.remove('dropdown-icon--toggled');
    }

    toggle() {
        if (this.list.classList.contains('dropdown-list--toggled') &&
        this.icon.classList.contains('dropdown-icon--toggled')) {
            this.close();
        } else {
            this.open();
        }
    }

    selectItem(target) {
        this.input.value = target.innerText;
        this.showItems();
        this.close();
    }

    showItems() {
        this.items.forEach(item => item.classList.remove('none'))
        if (this.recentList) this.recentList.classList.remove('none');
    }

    hideItems() {
        this.items.forEach(item => item.classList.add('none'))
        if (this.recentList) this.recentList.classList.add('none');
    }

    searchItems() {
        const request = this.input.value;

        if (request === '') {
            this.showItems();
        } else {
            this.hideItems();
            this.items.forEach(item => {
                let result = item.innerText
                .toLowerCase()
                .search(request);

                if (result !== -1) item.classList.remove('none');
            })
        }
    }

    recentIndexOf(item) {
        const list = this.recentComp.state.items;

        for (let i = 0; i < list.length; i++) {
            if (JSON.stringify(list[i].props) === JSON.stringify(item.props)) return i
        }

        return -1;
    }

    recentUpdate(target) {
        const imgSrc = target.querySelector('img').getAttribute('src');
        const props = {
            id: target.getAttribute('data-code'),
            img: dropdownImages.getKey(imgSrc),
            title: target.querySelector('div[class="dropdown-item-title"]').innerText
        }
        const newItem = <DropdownItem itemStructure={this.recentComp.props.itemStructure} key={props.id} {...props} isRecent={true} />;
        const recentId = this.recentIndexOf(newItem);

        this.recentComp.setState(prevState => {
            if (recentId !== -1) prevState.items.splice(recentId, 1);
            prevState.items.unshift(newItem);
            const newState = prevState.items.slice(0, 6);
            return {
                items: newState
            }
        })
    }
}

export default new DropdownMenu();