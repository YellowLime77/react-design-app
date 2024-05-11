import React from 'react';
import './Button.css';
import '../App.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type
        }
    }

    render() {
        return (
            <button id="mainButton" className={"button " + this.state.type}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;