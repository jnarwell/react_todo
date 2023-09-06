import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

type Task = {
    id:number,
    title:string
}

type TaskFormProps = {
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (e:React.FormEvent) => void,
    newTask: Task
}

export default function TaskForm({ handleChange, handleSubmit, newTask}:TaskFormProps ){
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Label>Task Title</Form.Label>
            <Form.Control name='title' onChange={handleChange} value={newTask.title}/>
            <Button className='mt-3 w-100' variant='warning' type='submit'>Create Task</Button>
        </Form>
    )
}