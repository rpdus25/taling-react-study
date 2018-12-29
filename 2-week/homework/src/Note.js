import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './note.css'

class Note extends Component {
    handleOnClickDelete = (e) => {
        this.props.delete(this.props.index)
    }

    // 2. 제목과 내용 입력하기
    // 2.1 Google Keep 에서는 제목과 내용을 함께 입력하게 되어 있습니다. 제목과 내용을 같이 입력할 수 있도록 만들어 봅시다.
    // hint1 : 지금저희는 savedNote 내에 content만 선언되어 있습니다. 해당 내용에 title을 추가해서 저장하도록 해 봅시다.
    render() {
        const title = this.props.title;
        const content = this.props.content;
        return (
            // Alt + Shift + F 아래 내용들은 materialize에 있는 라이브러리와 클래스를 활용한 것 입니다.
            //materialize 의 grid부분을 참고해 주세요.
            <div className="Note col s12 m4 l3">
                <div className="DeleteBtn">
                    <div className="DeleteBtn btn-floating btn-large">
                        <i onClick={this.handleOnClickDelete} id="Icon" className="material-icons">delete</i>
                    </div>
                </div>
                <div className="card yellow lighten-4">
                    <div className="card-content black-text">
                        <span className="card-title">
                            {title}
                        </span>
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        )
    }
}

Note.propTypes = {
    title: PropTypes.array.isRequired,
    content: PropTypes.string.isRequired
}






export default Note;
