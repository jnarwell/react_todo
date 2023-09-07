import { useState } from "react";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import { findDOMNode } from "react-dom";

type Task = {
    id:number,
    title:string
}

export default function Home(){
    const name:string = 'Jamie';
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<Task>({id:1, title:''});
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value, event.target.name);
        setNewTask({...newTask, [event.target.name]: event.target.value})
    }

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        setTasks([...tasks, newTask])
        setNewTask({id: tasks.length + 2, title: ''})
    }

    const handleDelete = (event:any) => {
        const nodeId = Number(event.target.parentNode.parentNode.parentNode.getAttribute('id'));
        tasks.filter((t)=>{if(t.id == nodeId){tasks.splice(tasks.indexOf(t), 1)}});
        //tasks.map((t, id=1)=>{t.id=id;id++;})
        setTasks(tasks)
        setNewTask({id: tasks.length + 2, title: ''})
    }

    const handleEdit = (event: any) => {
        const node = event.target.parentNode.previousSibling.innerText;
        console.log(node);
    }

    return (
        <>
            <h1>Hello {name}</h1>
            <TaskForm handleChange={handleInputChange} handleSubmit={handleFormSubmit} newTask={newTask}/>
            {tasks.map((t, id=1)=>{t.id=id;id++;})}
            {tasks.map(t=><TaskCard task={t} key={t.id} handleEdit={handleEdit} handleDelete={handleDelete}/>)}
        </>
    )
}