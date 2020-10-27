import React, { Component } from "react";
import DropdownItem from "./dropdownItem";

class DropdownItemsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.itemsData.map(val => <DropdownItem itemStructure={this.props.itemStructure} key={val.id} id={val.id} img={val.img} title={val.title} />)
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
