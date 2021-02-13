import React from 'react';
import { CreateTodo } from './Domain/UseCases/CreateTodo';
import { EditCase } from './Domain/UseCases/EditCase';
import { iCreateTodo } from './Interfaces/iCreateTodo';
import { iEditCase } from './Interfaces/iEditCase';
import { iTodoAddForm } from './Interfaces/iTodoAddForm';
import { iTodoEditPresenter } from './Interfaces/iTodoEditPresenter';
import { iTodoViewPresenter } from './Interfaces/iTodoViewPresenter';
import { MockupPresenter } from './Presenter/MockUpViewPresenter';
import { TodoAddPresenter } from './Presenter/TodoAddPresenter';
import { TodoEditPresenter } from './Presenter/TodoEditPresenter';
import TodosPage from './UI/TodosPage';

function App() {
  let createCase: iCreateTodo = new CreateTodo();
  let editCase: iEditCase = new EditCase();
  let addPresenter: iTodoAddForm = new TodoAddPresenter(createCase);
  let editPresenter: iTodoEditPresenter = new TodoEditPresenter(editCase);
  let viewPresenter: iTodoViewPresenter = new MockupPresenter();

  return (
    <TodosPage addPresenter={addPresenter} viewPresenter={viewPresenter} editPresenter={editPresenter}></TodosPage>
  );
}

export default App;
