import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';

interface props {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    value: String,
}

const TodoForms: React.FC<props> = ({ handleChange, value, handleSubmit }) => {
    return (
        <form
            onSubmit={handleSubmit}
        >
            <TextField
                variant="outlined"
                placeholder="Digite aqui sua tarefa"
                margin="normal"
                onChange={handleChange}
                value={value}
            />
        </form>

    );
};

export default TodoForms;
