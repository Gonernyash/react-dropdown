import React from 'react';
import DropdownItem from "./dropdownItem";
import dropdownImages from "../dropdownIconsLoader";

class DropdownMenu {
    constructor() {
        this.button = document.querySelector('#dropdown-button');
        this.list = document.querySelector('#dropdown-list');
        this.icon = document.querySelector('#dropdown-icon');
        this.input = document.querySelector('#dropdown-input');
        this.items = new DropdownItems();
        this.items.select = (event) => {
            this.input.value = event.target.innerText;
            this.items.show();
            this.close();
        }
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
}

class DropdownItems {
    constructor() {
        this.all = document.querySelectorAll('#dropdown-item');
        this.recent = document.querySelector('#dropdown-recent');
    }

    show() {
        this.all.forEach((item) => {
            item.classList.remove('none');
        })
        if (this.recent) this.recent.classList.remove('none');
    }

    hide() {
        this.all.forEach((item) => {
            item.classList.add('none');
        })
        if (this.recent) this.recent.classList.add('none');
    }

    search(event) {
        const request = event.target.value.toLowerCase();
        if (request === '') {
            this.show()
        } else {
            this.hide();
            this.all.forEach((item) => {
                let result = item.innerText.toLowerCase().search(request);
                if (result !== -1) item.classList.remove('none');
            })
        }
    }

    recentIndexOf(item, ref) {
        const arr = ref.state.items;
        for (let i = 0; i < 6; i++) {
            if (JSON.stringify(arr[i].props) === JSON.stringify(item.props)) return i
        }
        return -1;
    }

    recentUpdate(event, ref, self) {
        const target = event.target;
        let imgValue = target.querySelector('img').getAttribute('src');
        const props = {
            id: target.getAttribute('data-code'),
            img: dropdownImages.getKey(imgValue),
            title: target.querySelector('div[class="dropdown-item-title"]').innerText 
        }
        const newItem = <DropdownItem itemStructure={self.props.itemStructure} key={props.id} {...props} />
        const recentId = this.recentIndexOf(newItem, ref);

        ref.setState(prevState => {
            if (recentId !== -1) prevState.items.splice(recentId, 1);
            prevState.items.unshift(newItem);
            const newState = prevState.items.slice(0, 6);
            return {
                items: newState
            }
        })
    }
}

export default DropdownMenu;