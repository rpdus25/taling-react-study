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
        this.setState({
            [e.target.name] : e.target.value
        })
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input
                            name='userTitleInput'
                            type='text'
                            value={this.state.userTitleInput}
                            onChange={this.handleChange}
                            placeholder='Title'
                        />
                        <input
                            name='userContentInput'
                            type='text'
                            value={this.state.userContentInput}
                            onChange={this.handleChange}
                            placeholder='Take a note'
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
