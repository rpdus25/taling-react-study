import React, { Component } from 'react';

class Note extends Component {
    // 1.불편한 UI 고치기
    // 1.1 사용자가 입력 버튼을 누르면 state 가 업데이트 됩니다. 업데이트 된 이후에는, 입력값이 사라지는 것이 좋겠죠? 이를 구현해 봅시다.
    // 2. 제목과 내용 입력하기
    // 2.1 Google Keep 에서는 제목과 내용을 함께 입력하게 되어 있습니다. 제목과 내용을 같이 입력할 수 있도록 만들어 봅시다.
    // hint1 : 지금저희는 savedNote 내에 content만 선언되어 있습니다. 해당 내용에 title을 추가해서 저장하도록 해 봅시다.
    render() {
        const content = this.props.content;
        return (
            //아래 내용들은 materialize에 있는 라이브러리와 클래스를 활용한 것 입니다.
            //materialize 의 grid부분을 참고해 주세요.
            <div className='col s12 m6 l3'>
                <div className='card yellow lighten-4'>
                    <div className='card-content black-text'>
                        {content}
                    </div>
                </div>
            </div>
        )
    }
}

export default Note;