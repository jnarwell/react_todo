import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'



type Task = {
    id:number,
    title:string
}

type TaskCardProps = {
    task:Task
    handleDelete:(e:any)=>void
    handleEdit:(e:any)=>void
}

export default function TaskCard({ task, handleEdit, handleDelete }: TaskCardProps){

    return (
        <Card key={task.id} id={task.id.toString()}>
            <Card.Body className='d-flex justify-content-between'>
                <Card.Title>{task.title} </Card.Title>
                <div>
                    <Button onClick={handleEdit} className='me-1 btn-secondary'>edit</Button>
                    <Button onClick={handleDelete} className='btn-danger'>delete</Button>
                </div>
            </Card.Body>
        </Card>
    )
}