import React, {Component} from "react";
import DropdownItem from "./dropdownItem";

class DropdownRecent extends Component {
    constructor(props) {
        super(props);

        const defaultItems = [
            <DropdownItem code="RU" img="russia.svg" title="Russia" />,
            <DropdownItem code="US" img="united-states-of-america.svg" title="United States" />,
            <DropdownItem code="JP" img="japan.svg" title="Japan" />,
            <DropdownItem code="CN" img="china.svg" title="China" />,
            <DropdownItem code="FR" img="france.svg" title="France" />,
            <DropdownItem code="DE" img="germany.svg" title="Germany" />
        ]

        this.state = {
            items:  defaultItems
        }
    }

    render() {
        return (
            this.state.items
        );
    }
}

export default DropdownRecent;