import React from 'react';

export default class TodoListItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <li className="todo-list-item">
                <h3>{this.props.todo.title}</h3>
            </li>
        );
    }
}