import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {    
    return (
        <button 
            className="CreateButton"
            onClick={
                () => {
                 setOpenModal (state => !state);
                }
            }            
        > + </button> 
    );
}

export{CreateTodoButton};