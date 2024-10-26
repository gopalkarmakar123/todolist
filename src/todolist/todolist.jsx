import { React, useState } from "react";
import "./todolist.css";
export default function TodoList() {
    const[darkMode, setDarkMode] =useState(localStorage.getItem("mode")  || false);
    const[changesText , setText] = useState('');
    const[todos,setTodo]= useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
    
    //methods 

    const saveChanges = e => {
        setText(e.target.value);

    }
    const saveTodo = e => {
        todos.push(changesText);
        setTodo(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
        setText("");
        console.log(todos);
    }
    const changeMode = e => {
        localStorage.setItem('mode',!darkMode);
        setDarkMode(!darkMode);
    }
    const deleteItem = e  => {
        const data = e.target.dataset;
        console.log(data);
        todos.splice(data['idx'],1 );
        localStorage.setItem("todos", JSON.stringify(todos));
        setTodo(todos);
        
    }
    console.log(todos);
    
    const modeText = darkMode ? "Dark Mode" : "Light Mode";
    const modeClass = darkMode ? 'dark_mode' : '';
    return(
        <>
        <div className={`main ${modeClass}`}>
            <div className="textbox_container">
                <button onClick={changeMode}>
                    {modeText}
                </button>
                <input type="text" value={changesText} onChange={saveChanges} placeholder="Enter your todos"/>
                <button onClick={saveTodo}>Submit</button>
            </div>
            <ul className="list_container">
                {todos.map((todo, idx)=> 
                    <li className="list_one" key={idx}>
                        {todo} <button data-idx={idx} onClick={deleteItem}>Remove</button>
                    </li>

                )}

            </ul>

        </div>
        </>
    )

}