import React, {Component} from "react";
import DropdownItem from "./dropdownItem";

class DropdownRecent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items:  defaultData().map(data => <DropdownItem key={data.code} code={data.code} img={data.img} title={data.title} />)
        }
    }

    render() {
        return (
            this.state.items
        );
    }
}

function defaultData() {
    return [
        {
            code: "RU",
            img: "russia.svg",
            title: "Russia"
        },
        {
            code: "US",
            img: "united-states-of-america.svg",
            title: "United States"
        },
        {
            code: "JP",
            img: "japan.svg",
            title: "Japan"
        },
        {
            code: "CN",
            img: "china.svg",
            title: "China"
        },
        {
            code: "FR",
            img: "france.svg",
            title: "France"
        },
        {
            code: "DE",
            img: "germany.svg",
            title: "Germany"
        }
    ]
}

export default DropdownRecent;