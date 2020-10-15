import React, {Component} from 'react';
import "./dropdown.css";
import DropdownMain from "./dropdownMain";
import DropdownList from "./dropdownList";

class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.listClose = () => {
            this.list.classList.remove('dropdown-list--toggled');
            this.icon.classList.remove('dropdown-icon--toggled');
        }
        this.listOpen = () => {
            this.list.classList.add('dropdown-list--toggled');
            this.icon.classList.add('dropdown-icon--toggled');
        }
        this.listToggle = () => {
            this.list.classList.toggle('dropdown-list--toggled');
            this.icon.classList.toggle('dropdown-icon--toggled');
        }
        this.selectItem = (event) => {
            this.input.value = event.target.innerText;
            this.itemsShow();
            this.listClose();
        }
        this.itemsShow = () => {
            this.items.forEach((item) => item.classList.remove('none'));
            this.recent.classList.remove('none');
        }
        this.searchItem = (event) => {
            const request = event.target.value.toLowerCase();
            this.items.forEach((item) => {
                item.classList.remove('none');
                if (request !== '') {
                    this.recent.classList.add('none');
                    let result = item.innerText.toLowerCase().search(request);
                    if (result === -1) item.classList.add('none');
                } else {
                    this.recent.classList.remove('none')
                }
            })
        }
    }

    componentDidMount() {
        this.list = document.querySelector('#dropdown-list');
        this.button = document.querySelector('#dropdown-button')
        this.icon = document.querySelector('#dropdown-icon');
        this.input = document.querySelector('#dropdown-input');
        this.recent = document.querySelector('#dropdown-recent');
        this.items = document.querySelectorAll('#dropdown-item');
        
        
        this.button.addEventListener('click', this.listToggle, false);
        this.input.addEventListener('input', this.searchItem, false);
        this.items.forEach((item) => item.addEventListener('click', this.selectItem, false));
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