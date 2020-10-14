import React, {Component} from "react";
const { Provider, Consumer } = React.createContext();

class ToggleContextProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggled: false,
            selectedItem: ""
        }

        this.toggleState = () => {
            this.setState(prevState => {
                return {
                    isToggled: !(prevState.isToggled)
                }
            })
        }

        this.selectItem = (target) => {
            this.setState(() => {
                return {
                    selectedItem: target.innerText
                }
            })
        }
    }

    render() {
        return (
            <Provider value=
            {{
                isToggled: this.state.isToggled,
                toggleState: this.toggleState,
                selectItem: this.selectItem,
                selectedItem: this.state.selectedItem 
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export { ToggleContextProvider, Consumer as ToggleContextConsumer };