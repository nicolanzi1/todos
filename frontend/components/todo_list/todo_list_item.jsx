import React from 'react';
import { removeTodo } from '../../actions/todo_actions';
import todo_list_container from '../todos/todo_list_container';

export default class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {detail: false};
        this.toggleTodo = this.toggleTodo.bind(this);
    }

    toggleTodo(e) {
        e.preventDefault();
        const toggledTodo = Object.assign(
            {},
            this.props.todo,
            { done: !this.props.todo.done }
        );

        this.props.receiveTodo(toggledTodo);
    }

    render() {
        const { todo, updateTodo, removeTodo } = this.props;
        const { title, done } = todo;

        return (
            <li className="todo-list-item">
                <div className="todo-header">
                    <h3>{ title }</h3>
                    <button
                        className={ done ? "done" : "undone" }
                        onClick={ this.toggleTodo }>
                        { done ? "Undo" : "Done" }
                    </button>
                    <button
                    className="delete-button"
                    value={todo.id}
                    onClick={removeTodo}>Delete Todo</button>
                </div>
            </li>
        );
    }
}