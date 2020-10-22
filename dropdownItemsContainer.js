import React, { Component } from "react";
import DropdownItem from "./dropdownItem";
import data from "./items.json";

class DropdownItemsContainer extends Component {
  constructor(props) {
    super(props);

    this.itemsData = data;
    this.state = {
      items: this.itemsData.map(val => <DropdownItem key={val.code} code={val.code} img={val.img} title={val.title} />)
    }
  }

  render() {
    return (
      <>
        {this.state.items}
      </>
    );
  }
}

export default DropdownItemsContainer;
