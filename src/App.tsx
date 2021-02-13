import React from 'react';
import { CreateTodo } from './Domain/UseCases/CreateTodo';
import { iCreateTodo } from './Interfaces/iCreateTodo';
import { iTodoAddForm } from './Interfaces/iTodoAddForm';
import { iTodoViewPresenter } from './Interfaces/iTodoViewPresenter';
import { MockupPresenter } from './Presenter/MockUpViewPresenter';
import { TodoAddPresenter } from './Presenter/TodoAddPresenter';
import TodosPage from './UI/TodosPage';

function App() {
  let createCase: iCreateTodo = new CreateTodo();
  let addPresenter: iTodoAddForm = new TodoAddPresenter(createCase);
  let viewPresenter: iTodoViewPresenter = new MockupPresenter();

  return (
    <TodosPage addPresenter={addPresenter} viewPresenter={viewPresenter}></TodosPage>
  );
}

export default App;
