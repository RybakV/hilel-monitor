import './Todo.css';
import {todoList} from "../data.js";
import TodoItem from "./TodoItem";
import {useState} from "react";

function Todo() {

    const [tasks, updateTasks] = useState(todoList);

    function taskSubmit(event){
        event.preventDefault();
        if (event.target.task.value) {
            let newTask = {};
            newTask.task = event.target.task.value;
            newTask.state = false;
            todoList.push(newTask);
            event.target.task.value = '';
            const newTodoList = JSON.parse(JSON.stringify(todoList));
            updateTasks(newTodoList);
        }
    }

    return (
        <div className="todo">
            <h3>Illuminati plan:</h3>
            <div className="todo-list">
                {tasks.map((item, index) => (
                    <TodoItem item={item} index={index}/>
                ))}
            </div>

            <form onSubmit={taskSubmit}>
                <h3>Add your secret target:</h3>
                <input id="task" type="text" placeholder="Write a secret task" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Todo;
