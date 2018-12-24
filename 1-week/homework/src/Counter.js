import React, { Component } from 'react'

class Counter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            counterNum:undefined //?? 이렇게 하는게 맞는것인가;;;
        }
    }

    handleIncrease = () => {
        this.setState(
            ({ number }) => ({
                number: number + this.props.counterNum
            })
        );
    }

    handleDecrease = () => {
        this.setState(
            ({ number }) => ({
                number: number - this.props.counterNum
            })
        );
    }

    handleReset = () => {
        this.setState({
            number: 0
        });
    }

    render(){
        return(
            <div>
                <h1>Counter</h1>
                <p>값: {this.state.number}</p>
                <button onClick={this.handleIncrease}> +</button>
                <button onClick={this.state.number > 0 ? this.handleDecrease : false}>-</button>
                <button onClick={this.handleReset}> Reset </button>
            </div>
        );
    }
}

export default Counter;