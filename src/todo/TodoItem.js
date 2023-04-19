import './Todo.css';
import {useState} from "react";
import {todoList} from "../data.js";

function Todo(props) {

    console.log(props.item);

    const [taskStatus, setTaskStatus] = useState(false);

    function toggleTaskStatus(){
        setTaskStatus(!taskStatus);
        todoList[props.index].state = !todoList[props.index].state;
    }

    return (
        <div className="todo-item">
            <span className="todo-state" onClick={toggleTaskStatus}>
                {taskStatus ? <span className="todo-done"></span> : <span className="todo-not-done"></span>}
            </span>
            <span className="todo-task">
                {props.item.task}
            </span>
        </div>
);
}
export default Todo;
