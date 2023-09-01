import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm () {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        console.log(newTodoValue)
        event.preventDefault();
        console.log(newTodoValue)
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false)
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo pendiente</label>
            <textarea 
                placeholder="Elige uno de tus pendientes... y anótalo aquí."
                value={newTodoValue}
                onChange={onChange}                
            />
            <div className="Button-container">
                <button
                    type="button"
                    className="TodoForm-button Button-cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button Button-add"
                >Añadir</button>
            </div>
        </form>
    );
}

export {TodoForm};