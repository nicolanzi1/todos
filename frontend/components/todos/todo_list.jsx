import React from 'react';
import TodoForm from '../todo_list/todo_form';
import TodoListItem from '../todo_list/todo_list_item';

export default class TodoList extends React.Component {
    
    render() {
        const { todos, receiveTodo } = this.props;
        const todoItems = todos.map(todo => (
            <TodoListItem
            key={`todo-list-items${todo.id}`}
            todo={todo}
            receiveTodo={ receiveTodo } />
        ));

        return (
            <div>
                <ul className="todo-list">
                    { todoItems }
                </ul>
                <TodoForm receiveTodo={ receiveTodo } />
            </div>
        );
    }
}