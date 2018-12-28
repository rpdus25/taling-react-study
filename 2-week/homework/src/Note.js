import React, { Component } from 'react';

class Note extends Component {

    // 2. 제목과 내용 입력하기
    // 2.1 Google Keep 에서는 제목과 내용을 함께 입력하게 되어 있습니다. 제목과 내용을 같이 입력할 수 있도록 만들어 봅시다.
    // hint1 : 지금저희는 savedNote 내에 content만 선언되어 있습니다. 해당 내용에 title을 추가해서 저장하도록 해 봅시다.
    render() {
        const title = this.props.title;
        const content = this.props.content;
        return (
            //아래 내용들은 materialize에 있는 라이브러리와 클래스를 활용한 것 입니다.
            //materialize 의 grid부분을 참고해 주세요.
            <div className='col s12 m6 l3'>
                <div className='card blue-grey darken-1'>
                    <div className='card-content white-text'>
                        <span className="card-title">{title}</span>
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Note;
