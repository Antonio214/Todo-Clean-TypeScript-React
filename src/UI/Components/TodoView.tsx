import React, { useEffect } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { TodoModel } from '../../Domain/Entities/Todo';

interface props {
    todos: TodoModel[],
    handleComplete: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleDelete: (index: number) => void,
}

const TodoListView: React.FC<props> = ({ todos, handleComplete, handleDelete }) => {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <List>
            {todos.map((todo, index) => (
                <ListItem key={index.toString()} dense button data-aos="fade-right" data-aos-duration="1500">
                    <Checkbox tabIndex={-1} disableRipple checked={todo.isComplete} id={index.toString()}
                        onChange={handleComplete} />
                    <ListItemText primary={todo.title} secondary={todo.description} />
                    <ListItemSecondaryAction>
                        <IconButton
                            aria-label="Delete"
                            onClick={() => { handleDelete(index) }}
                        >
                            <DeleteIcon data-aos="fade-right" data-aos-duration="1500" />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
};


export default TodoListView;
