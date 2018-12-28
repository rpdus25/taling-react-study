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
        if(e.target.id ===  'userTitleInput') {
            this.setState({
                userTitleInput: e.target.value,
            })
        } else if (e.target.id ===  'userContentInput') {
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
                            type='text'
                            value={this.state.userTitleInput}
                            onChange={this.handleChange}
                            placeholder='Title'
                        />
                        <input
                            id={'userContentInput'}
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
