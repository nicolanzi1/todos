import React from 'react';
import TodoListContainer from './todos/todo_list_container';

const App = () => (
    <div>
        <h1>My Cool Todos App</h1>
        <TodoListContainer />
            <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ul>
    </div>
);

export default App;