import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'



type Task = {
    id:number,
    title:string
}

type TaskCardProps = {
    task:Task
    handleDelete:(e:any)=>void,
    handleEdit:(e:any)=>void,
    handleEditSubmit:(e:any)=>void,
    editTask:Task
}

export default function TaskCard({ task, handleEdit, handleDelete, handleEditSubmit, editTask }: TaskCardProps){

    return (
        <Card key={task.id} id={task.id.toString()}>
            <Card.Body className='justify-content-between is-visible'>
                <Card.Title id='task-title'>{task.title}</Card.Title>
                <div>
                    <Button onClick={handleEdit} className='me-1 btn-secondary'>edit</Button>
                    <Button onClick={handleDelete} className='btn-danger'>delete</Button>
                </div>
            </Card.Body>
            <Card.Body className='justify-content-between is-invisible'>
                <Card.Title>
                    <Form>
                        <Form.Control name='title' onChange={handleEdit} value={editTask.title} className='w-100'/>
                    </Form>
                </Card.Title>
                <div>
                    <Button onClick={handleEditSubmit} className='me-1 btn-secondary'>submit</Button>
                    <Button className='btn-danger'>cancel</Button>
                </div>
            </Card.Body>
        </Card>
    )
}