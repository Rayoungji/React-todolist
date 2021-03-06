//일정 정보 배열 기능//
import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
    render() {
        const {todos, onToggle,onRemove}=this.props;  //this.props.todos, this.props.todos와 같음 
        const todoList=todos.map(
            todo=>(
                <TodoItem 
                key={todo.id}
                done={todo.done}
                    onToggle={()=>onToggle(todo.id)}
                    onRemove={()=> onRemove(todo.id)}>
                {todo.text}
                    </TodoItem>
            )
        );

        return (
            <div>
              {todoList}
            </div>
        );
    }

    shouldComponentUpdate(nextProps, nextSate){
        return this.props.todos !==nextProps.todos;
    }
}

export default TodoList;