import Aos from 'aos';
import React, { useState, useEffect } from 'react'

import { TodoModel } from '../Domain/Entities/Todo';
import { iTodoAddForm } from '../Interfaces/iTodoAddForm'
import { iTodoEditPresenter } from '../Interfaces/iTodoEditPresenter';
import { iTodoViewPresenter } from '../Interfaces/iTodoViewPresenter';

import TodoForms from './Components/TodoForm';
import TodoListView from './Components/TodoView';

import "./List.css";

interface props {
    addPresenter: iTodoAddForm,
    viewPresenter: iTodoViewPresenter,
    editPresenter: iTodoEditPresenter,
}


const TodosPage: React.FC<props> = ({ addPresenter, viewPresenter, editPresenter }) => {
    Aos.init()

    const [title, setTitle] = useState('');
    const [todoList, setTodoList] = useState<TodoModel[]>([])

    useEffect(() => {
        loadTodos()
    }, [])

    return (
        <div className="list-body">
            <div data-aos="fade-right" data-aos-duration="1500">
                <div className='forms-title'>
                    To Do List
            </div>
                <div className='forms'>
                    <TodoForms handleChange={handleTitleChange} value={title} handleSubmit={handleCreate}></TodoForms>
                </div>
                <div className='list-container'>
                    <div className='list'>
                        <TodoListView todos={todoList} handleComplete={handleComplete}></TodoListView>
                    </div>
                </div>
            </div>
        </div>
    );

    function loadTodos() {
        let newList = viewPresenter.loadTodoList();
        setTodoList(newList);
    }

    function handleCreate(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let newTodo = addPresenter.AddTodoCallback(title, '');
        setTodoList([...todoList, newTodo]);

        setTitle('');
    }

    function handleComplete(event: React.ChangeEvent<HTMLInputElement>) {

        let newTodoList = editPresenter.toggleTodoCallback(todoList, Number(event.target.id));
        setTodoList([...newTodoList]);
    }

    function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

}

export default TodosPage;