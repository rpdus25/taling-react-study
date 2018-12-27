import React, { Component } from 'react'

class Counter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    handleIncrease = () => {
        this.setState(
            ({ number }) => ({
                number: number + this.props.intervalNum
            })
        );
    }

    handleDecrease = () => {
        if(this.state.number > 0) {
            this.setState(
                ({ number }) => ({
                    number: number - this.props.intervalNum
                })
            );
        }
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
                <button onClick={this.handleDecrease}>-</button>
                <button onClick={this.handleReset}> Reset </button>
            </div>
        );
    }
}

export default Counter;