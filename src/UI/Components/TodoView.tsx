import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AOS from 'aos';
import { TodoModel } from '../../Domain/Entities/Todo';

interface props {
    todos: TodoModel[],
}

const TodoListView: React.FC<props> = ({ todos }) => {
    AOS.init()
    return (
        <List>
            {todos.map((todo, index) => (
                <ListItem key={index.toString()} dense button data-aos="fade-right" data-aos-duration="1500">
                    <Checkbox tabIndex={-1} disableRipple />
                    <ListItemText primary={todo.title} />
                    <ListItemSecondaryAction>
                        <IconButton
                            aria-label="Delete"
                            onClick={() => { }}
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