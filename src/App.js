import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import ToDoForm from './Components/ToDoForm';
import ToDoList from './Components/ToDoList';
import data from './data.json';

function App() {
    const [toDoList, setToDoList] = useState(data);

    const handleToggle = (id) => {
        let mapped = toDoList.map((task) => {
            return task.id === id
                ? { ...task, complete: !task.complete }
                : { ...task };
        });
        setToDoList(mapped);
    };

    const handleFilter = () => {
        let filtered = toDoList.filter((task) => {
            return !task.complete;
        });
        setToDoList(filtered);
    };

    const addTask = (userInput) => {
        let copy = [...toDoList];
        copy = [
            ...copy,
            { id: toDoList.length + 1, task: userInput, complete: false },
        ];
        setToDoList(copy);
    };

    return (
        <div className="App">
            <Header />
            <ToDoList
                toDoList={toDoList}
                handleToggle={handleToggle}
                handleFilter={handleFilter}
            />
            <ToDoForm addTask={addTask} />
        </div>
    );
}

export default App;
