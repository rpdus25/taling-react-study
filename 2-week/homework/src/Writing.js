import React, { Component } from 'react';

class Writing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userTitleInput: "",
            userContentInput: ""

        }
    };
    handleSubmit = (e) => {
        console.log('submitted');
        this.props.submit(this.state.userTitleInput, this.state.userContentInput);
        this.setState({
            userTitleInput: "",
            userContentInput: ""
        });

        e.preventDefault();
    };
    handleChange = (e) => {
        // react 특징때문에 event를 저장해두었다가 사용
        const event = e;
        console.log('userInput is ' + event.target.id);
        console.log('userInput is ' + this.state.userContentInput);
        if(e.target.id ===  'userTitleInput') {
            console.log("타이틀");
            this.setState({
                userTitleInput: e.target.value,
            })
        } else if (e.target.id ===  'userContentInput') {
            console.log("컨텐츠");
            this.setState({
                userContentInput: e.target.value,
            })
        } else {
            return false;
        }
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input
                            id={'userTitleInput'}
                            key={0}
                            type='text'
                            value={this.state.userTitleInput}
                            onChange={this.handleChange}
                            placeholder={'Title'}
                        />
                        <input
                            id={'userContentInput'}
                            key={1}
                            type='text'
                            value={this.state.userContentInput}
                            onChange={this.handleChange}
                            placeholder={'Take a note'}
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
