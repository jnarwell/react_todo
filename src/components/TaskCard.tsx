type Task = {
    id:number,
    title:string
}

type TaskCardProps = {
    task:Task
}

export default function TaskCard({ task }: TaskCardProps){
    return (
        <div className="task-card text-center">
            <div>
                <h3>{task.title}</h3>
            </div>
        </div>
    )
}