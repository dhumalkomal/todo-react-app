import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faPenSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const TodoListItems = ({ items, setItems,  setEditTodo }) => {


    // complete task function  its return boolean value

    const checkTask = (item) =>{
        setItems(
           items.map((element)=>{
            if(element.id === item.id){
                return {...element, completed: !element.completed}
            }
            else{
                return element;
            }
           })
        );
    };

    
    // delete list from todolist

    const deleteTask =({ id })=>{
       setItems(items.filter((item)=> item.id !== id))
       alert("Your task was successfully deleted");
    };

    //edit task from the todolist

    const editTask = ({ id })=>{
       
        const task =  items.find((item)=> {
            return item.id === id;
        });
        setEditTodo(task);

    };

    return(
        <div>
          {items.map((item) => {
             return <li className ="list-item" key={item.id}>
                <input 
                type="text" 
                className={`list ${item.completed ? "complete" : ""}`}
                value={item.title} 
                onChange={(e)=>{e.preventDefault()}}
                 />

                    {/* adding check button */}

                 <button className="button-complete task-button" onClick={() => checkTask(item)} >
                 <FontAwesomeIcon icon={faCheckCircle} />
                 </button>

                 {/* adding edit button */}

                 <button className="button-edit task-button" onClick={()=> editTask(item)}>
                 <FontAwesomeIcon icon={faPenSquare} />
                 </button>

                   {/* adding delete button */}

                 <button className="button-edit task-button" onClick={()=> deleteTask(item)}>
                 <FontAwesomeIcon icon={faTrashAlt} />
                 </button>
            </li>
            })
        }
        </div>
       
    );
};

export default TodoListItems;