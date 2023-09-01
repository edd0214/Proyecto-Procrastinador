import './TodoList.css'


function TodoList({children}){
    return(
        <ul className='List'>
            {children}
        </ul>
    );
}

export {TodoList };