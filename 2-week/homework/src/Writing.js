import React, { Component } from 'react';

class Writing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userTitleInput: "",
            userContentInput: "",
            isWritingTitleCliked: false,
        }
    };
    handleSubmit = (e) => {
        console.log('submitted');

        this.props.save(this.state)
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

    handleFocus = (e) => {
        if(!this.state.isWritingTitleCliked) {
            this.setState({
                isWritingTitleCliked: true
            })
        }
    }

    render() {
        const writingTitle = (
            <input
                name='userTitleInput'
                type='text'
                value={this.state.userTitleInput}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                placeholder='Title'
            />
        )

        const writingContent = (
            <input
                name='userContentInput'
                type='text'
                value={this.state.userContentInput}
                onChange={this.handleChange}
                placeholder='Take a note'
            />
        )

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        {writingTitle}
                        {this.state.isWritingTitleCliked ? writingContent : ''}
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
