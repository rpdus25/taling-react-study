import React, { Component } from 'react';

class Writing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            userInputPlaceHolder: "텍스트를 입력해주세요."
        }
    };
    handleSubmit = (e) => {
        console.log('submitted');
        this.props.submit(this.state.userInput);
        this.setState({
            userInput : ""
        });

        e.preventDefault();
    };
    handleChange = (event) => {
        console.log('userInput is ' + this.state.userInput);
        this.setState({
            userInput: event.target.value
        })
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input
                            type='text'
                            value={this.state.userInput}
                            onChange={this.handleChange}
                            placeholder={this.state.userInputPlaceHolder}
                        />
                    </div>
                    <input
                        type='submit'
                        value='Submit'
                    />
                </form>
            </div>
        )
    }
}

export default Writing;
