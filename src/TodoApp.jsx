import { useRef, useState } from "react";
import "./TodoApp.css";

const TodoApp = () => {
  const inputRef = useRef();
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState([{ id: 1, task: "Study by 4pm" }]);

  const deleteHandler = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const addTask = () => {
    if(newTask.length !== 0){
      setTodos((prevTodo) => [
        ...prevTodo,
        {
          id: prevTodo.length === 0 ? 1 : prevTodo[prevTodo.length - 1].id + 1,
          task: newTask,
        },
      ]);
      inputRef.current.value = "";
      setNewTask("");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Izy's ToDo App</h1>
        <div className="input_box">
          <input
            onChange={(e) => setNewTask(e.target.value)}
            type="text"
            placeholder="Add Task..."
            ref={inputRef}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
      <div>
        <Todos todos={todos} deleteHandler={deleteHandler} />
      </div>
    </div>
  );
};

const Todos = ({ todos, deleteHandler }) => {
  return (
    <div className="todo_container">
      {todos.map((todo) => (
        <div key={todo.id} className="todo_item">
          <p>{todo.task}</p>
          <button onClick={() => deleteHandler(todo.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoApp;
