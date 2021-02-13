import React, { useState } from 'react'
import { iTodoPresenter } from '../Interfaces/iTodoPresenter'

interface props {
    presenter: iTodoPresenter,
}


const TodosPage: React.FC<props> = ({ presenter }) => {
    const [title, setTitle] = useState('');

    function handleClick() {
        presenter.AddTodoCallback(title);
        setTitle('');
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    return (
        <div>
            <h1>Adicione um Todo</h1>
            <input onChange={handleChange} value={title}></input>
            <button onClick={handleClick}>Criar</button>
        </div>
    )
}

export default TodosPage;