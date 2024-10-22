import { React, useState } from "react";
import "./todolist.css";
export default function TodoList() {
    const[darkMode, setDarkMode] =useState(false);
    const[changesText , setText] = useState('');
    const[todos,setTodo]= useState([]);
    
    //methods 

    const saveChanges = e => {
        setText(e.target.value)
    }
    const saveTodo = e => {
        todos.push(changesText);
        setTodo(todos);
        setText("");
        console.log(todos);
    }
    const changeMode = e => {
        setDarkMode(!darkMode);
    }
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
                        {todo} <button data-idx={idx}>Remove</button>
                    </li>

                )}

            </ul>

        </div>
        </>
    )

}