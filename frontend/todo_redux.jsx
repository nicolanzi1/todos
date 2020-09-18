import React from 'react';
import ReactDOM from 'react-dom';

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