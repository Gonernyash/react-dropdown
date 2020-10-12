import React, {Component} from "react";
const { Provider, Consumer } = React.createContext();

class ToggleContextProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggled: false
        }

        this.toggleState = () => {
            this.setState(prevState => {
                return {
                    isToggled: !(prevState.isToggled)
                }
            })
        }
    }

    render() {
        return (
            <Provider value={{isToggled: this.state.isToggled, toggleState:this.toggleState}}>
                {this.props.children}
            </Provider>
        );
    }
}

export { ToggleContextProvider, Consumer as ToggleContextConsumer };