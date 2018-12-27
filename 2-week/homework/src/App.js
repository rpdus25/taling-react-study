import React, { Component } from 'react';
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Writing from './Writing';
import Note from './Note';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        savedNotes: [
        //편의를 위해 content 라는 key값을 줘보겠습니다.
        // {} 안에는 key: value 형태로 값을 지정해 줄 수 있습니다.
        {id: 1, title:"제목1", content: "default1"},
        {id: 2, title:"제목2", content: "default2"},
        {id: 3, title:"제목3", content: "default3"}
      ]
    }
  }

    handleSubmit = (userTitleInput, userContentInput) => {
        const savedNotes = this.state.savedNotes;
        this.setState({
            savedNotes: [
                ...savedNotes,
                //content 안에 userInput을 넣어야, content로 저장이 됩니다.
                {title: userTitleInput, content: userContentInput}
            ]
        })
    }

    render() {
    return (
      <div>
        {/*수업시간에는 save로 했었는데, submit이 더 의미론적인(바로 알아보기 편한) 표현이므로 submit으로 모두 바꿨습니다.*/}

        <Writing submit={this.handleSubmit} />
        <div className='row'>
          {/*실습시간에는 map 내부에 return을 넣어서 저장했습니다.*/}
          {/*이는 함수를 설정할 때 (note) => {}형태로 만들었기 때문에 새로운 scope가 생겼고,*/}
          {/*새로운 scope가 생겼을 경우에는 return을 통해 반환 값을 설정해 줘야 map이 작동합니다.*/}
          {/*지금은 조금 어려울 수 있는 내용이니, 일단 {}형태로 함수를 선언하면 return이 필요하고*/}
          {/*아닐 경우에는 안넣어도 된다고 이해하고 넘어갑시다.*/}
            {this.state.savedNotes.map((note) => (
                <Note title={note.title} content={note.content}/>
            ))}
        </div>
      </div>
    );
  }
}



export default App;
