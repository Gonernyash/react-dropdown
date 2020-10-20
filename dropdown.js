import React, {Component} from 'react';
import "./dropdown.css";
import DropdownMain from "./dropdownMain";
import DropdownList from "./dropdownList";
import DropdownItem from "./dropdownItem";

class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.listRef = React.createRef();
    }

    componentDidMount() {
        this.recentRef = this.listRef.current
        .recentContRef.current
        .recentRef.current;

        this.menu = new DropdownMenu();
        
        this.menu.button.addEventListener('click', () => this.menu.toggle(), false);
        this.menu.input.addEventListener('input', (event) => this.menu.items.search(event), false);
        this.menu.input.addEventListener('focus',() => this.menu.open(), false);
        this.menu.items.all.forEach((item) => {
            item.addEventListener('click', (event) => this.menu.items.select(event), false);
            item.addEventListener('click', (event) => this.menu.items.recentUpdate(event, this.recentRef), false);
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
                <DropdownList ref={this.listRef}/>
            </div>
        );
    }
} 

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

    recentIndexOf(item, ref) {
        const arr = ref.state.items;
        for (let i = 0; i < 6; i++) {
            if (JSON.stringify(arr[i].props) === JSON.stringify(item.props)) return i
        }
        return -1;
    }

    recentUpdate(event, ref) {
        const target = event.target;
        const parent = target.parentNode;
        let img = target.querySelector('img').getAttribute('src');
        img = img.slice(14);
        img = img.slice(0, -13);
        const props = {
            code: target.getAttribute('data-code'),
            img: img + '.svg',
            title: target.querySelector('div[class="dropdown-item-title"]').innerText  
        }
        const newItem = <DropdownItem {...props} />
        
        ref.setState(prevState => {
            if (parent.className === "dropdown-recent") {
                const id = this.recentIndexOf(newItem, ref);
                prevState.items.splice(id, 1);
            }
            prevState.items.unshift(newItem);
            const newState = prevState.items.slice(0, 6);
            return {
                items: newState
            }
        })
    }
}

export default Dropdown;