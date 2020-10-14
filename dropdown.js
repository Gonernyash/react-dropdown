import React, {Component} from 'react';
import "./dropdown.css";
import DropdownMain from "./dropdownMain";
import DropdownList from "./dropdownList";

class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.listClose = () => {
            this.dropdownList.classList.remove('dropdown-list--toggled');
            this.dropdownIcon.classList.remove('dropdown-icon--toggled');
        }
        this.listOpen = () => {
            this.dropdownList.classList.add('dropdown-list--toggled');
            this.dropdownIcon.classList.add('dropdown-icon--toggled');
        }
        this.listToggle = () => {
            this.dropdownList.classList.toggle('dropdown-list--toggled');
            this.dropdownIcon.classList.toggle('dropdown-icon--toggled');
        }
        this.selectItem = (event) => {
            this.dropdownInput.value = event.target.innerText;
            this.itemsShow();
            this.listClose();
        }
        this.itemsShow = () => {
            this.dropdownItems.forEach((item) => item.classList.remove('none'));
            this.dropdownRecent.classList.remove('none');
        }
        this.searchItem = (event) => {
            const request = event.target.value.toLowerCase();
            this.dropdownItems.forEach((item) => {
                item.classList.remove('none');
                if (request !== '') {
                    this.dropdownRecent.classList.add('none');
                    let result = item.innerText.toLowerCase().search(request);
                    if (result === -1) item.classList.add('none');
                } else {
                    this.dropdownRecent.classList.remove('none')
                }
            })
        }
    }

    componentDidMount() {
        this.dropdownList = document.querySelector('#dropdown-list');
        this.dropdownButton = document.querySelector('#dropdown-button')
        this.dropdownIcon = document.querySelector('#dropdown-icon');
        this.dropdownInput = document.querySelector('#dropdown-input');
        this.dropdownRecent = document.querySelector('#dropdown-recent');
        this.dropdownItems = document.querySelectorAll('#dropdown-item');
        
        
        this.dropdownButton.addEventListener('click', this.listToggle, false);
        this.dropdownInput.addEventListener('input', this.searchItem, false);
        this.dropdownItems.forEach((item) => item.addEventListener('click', this.selectItem, false));
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