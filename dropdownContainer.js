import React, {Component} from 'react';
import Dropdown from './dropdown';

class DropdownContainer extends Component {
    render() {
        return (
            <>
                <Dropdown isRecentEnabled={true}/>
            </>
        );
    }
}

export default DropdownContainer