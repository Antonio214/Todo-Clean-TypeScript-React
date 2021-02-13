import Aos from 'aos';
import React, { useState, useEffect } from 'react'

import { TodoModel } from '../Domain/Entities/Todo';
import { iTodoAddForm } from '../Interfaces/iTodoAddForm'
import { iTodoViewPresenter } from '../Interfaces/iTodoViewPresenter';

import TodoForms from './Components/TodoForm';
import TodoListView from './Components/TodoView';

import "./List.css";

interface props {
    addPresenter: iTodoAddForm,
    viewPresenter: iTodoViewPresenter,
}


const TodosPage: React.FC<props> = ({ addPresenter, viewPresenter }) => {
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
                    <TodoForms handleChange={handleChange} value={title} handleSubmit={handleSubmit}></TodoForms>
                </div>
                <div className='list-container'>
                    <div className='list'>
                        <TodoListView todos={todoList}></TodoListView>
                    </div>
                </div>
            </div>
        </div>
    );

    function loadTodos() {
        let newList = viewPresenter.loadTodoList();
        setTodoList(newList);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let newTodo = addPresenter.AddTodoCallback(title, '');
        setTodoList([...todoList, newTodo]);

        setTitle('');
    }


    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

}

export default TodosPage;