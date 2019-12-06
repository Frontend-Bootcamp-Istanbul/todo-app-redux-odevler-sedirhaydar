import React from 'react';
import {connect} from "react-redux";
import {toggleTodo, removeTodo} from "./actionCreators/actionCreaters";
import styled from 'styled-components';

const RemoveTodo = styled.span`
    background-color: #76030B;
    font-weight: bold;
    display: inline-block;
    margin-left: 10px;
    padding: 5px;
    color: #fff;
    border-radius: 5px;
`;

function Todo(props) {
    const {content, id, checked} = props;
    let itemClass= "todo-item";
    if(checked){
        itemClass += " checked";
    }
    return (
        <div className={itemClass} onClick={() => {props.toggleTodo(id);}}>
            {content}
            <span
                className="remove-todo"
                onClick={(e) => {e.stopPropagation();props.removeTodo(id)}}>X</span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removeTodo: (id) => {dispatch(removeTodo(id))},
    toggleTodo: (id) => {dispatch(toggleTodo(id))}
});

export default connect(null, mapDispatchToProps)(Todo);
