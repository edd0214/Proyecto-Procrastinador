import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>    
  );
}

export default App;


      // loading={loading}
      // error={error}
      // completedTodos={completedTodos}
      // totalTodos={totalTodos}
      // searchValue={searchValue}
      // setSearchValue={setSearchValue}
      // searchedTodos={searchedTodos}
      // completeTodo={completeTodo}
      // deleteTodo={deleteTodo}



// const defaultTodos=[
//   { text: 'Llorar en la ofi', completed: true },
//   { text: 'llorar en el camión', completed: false },
//   { text: 'llorar en el baño', completed: true },
//   { text: 'llorar en el metro', completed: false },
//   { text: 'usar state', completed: true },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');