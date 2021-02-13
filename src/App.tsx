import React from 'react';
import { CreateTodo } from './Domain/UseCases/CreateTodo';
import { iCreateTodo } from './Interfaces/iCreateTodo';
import { iTodoPresenter } from './Interfaces/iTodoPresenter';
import { TodoPresenter } from './Presenter/TodoPresenter';
import TodosPage from './UI/TodosPage';

function App() {
  let createCase: iCreateTodo = new CreateTodo();
  let presenter: iTodoPresenter = new TodoPresenter(createCase);

  return (
    <TodosPage presenter={presenter}></TodosPage>
  );
}

export default App;
