import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import todosReducer from './reducers/todos_reducer';

const store = configureStore();

window.store = store;

function Test() {
    return (
        <div>
            <h1>Todos App</h1>
        </div>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('content');
    ReactDOM.render(<Test />, root);
})