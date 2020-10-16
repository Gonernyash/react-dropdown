import React, {Component} from 'react';
import "./dropdown.css";
import DropdownMain from "./dropdownMain";
import DropdownList from "./dropdownList";

class Menu {
    constructor() {
        this.list = document.querySelector('#dropdown-list');
        this.icon = document.querySelector('#dropdown-icon');
        this.input = document.querySelector('#dropdown-input');
        this.items = new Items();
        this.items.select = (event) => {
            this.input.value = event.target.innerText;
            this.items.show();
            this.close();
        }
    }

    open() {
        this.input.value = '';
        this.input.focus();
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

class Items {
    constructor() {
        this.all = document.querySelectorAll('#dropdown-item');
        this.recent = document.querySelector('#dropdown-recent');
    }

    show() {
        this.all.forEach((item) => {
            item.classList.remove('none');
        })
        this.recent.classList.remove('none');
    }

    hide() {
        this.all.forEach((item) => {
            item.classList.add('none');
        })
        this.recent.classList.add('none');
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
}

class Dropdown extends Component {
    componentDidMount() {
        this.menu = new Menu();

        this.button = document.querySelector('#dropdown-button');
        this.input = document.querySelector('#dropdown-input');
        this.items = document.querySelectorAll('#dropdown-item');
        
        this.button.addEventListener('click', () => this.menu.toggle(), false);
        this.input.addEventListener('input', (event) => this.menu.items.search(event), false);
        this.input.addEventListener('focus',() => this.menu.open(), false);
        this.items.forEach((item) => item.addEventListener('click', (event) => this.menu.items.select(event), false));
        document.addEventListener('click', (event) => {
            const targetClass = event.target.className;
            if (targetClass.slice(0, 8) !== 'dropdown') this.menu.close();
        }, false);
    }

    render() {
        return (
            <div className='dropdown'>
                <DropdownMain />
                <DropdownList />
            </div>
        );
    }
} 

export default Dropdown;