import React, { Component } from 'react';
import TodoListTemplate from './components/ToDoListTemplate.jsx';
import Form from './components/Form.jsx';

class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<Form />}>템플릿 완성</TodoListTemplate>
    );
  }
}

export default App;