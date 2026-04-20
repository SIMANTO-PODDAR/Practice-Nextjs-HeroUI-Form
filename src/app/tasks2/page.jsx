const getTasks = async () => {
    const res = await fetch('http://localhost:3007/tasks')
    const tasks = res.json()
    return tasks;
}

const TasksPage2 = async () => {
    const tasks = await getTasks()
    return (
        <div>
            <h1>this is tasks 2 page: {tasks.length}</h1>

            <div className='grid grid-cols-3 gap-5 my-5'>
                {
                    tasks.map((task, ind) => <Task key={ind} task={task} />)
                }
            </div>

        </div>
    );
};

export default TasksPage2;

const Task = ({ task }) => {
    return (
        <div className="card card-border bg-base-100 w-96">
            <div className="card-body">
                <h2 className="card-title">{task.title}</h2>
                <p>{task.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">{task.status}</button>
                </div>
            </div>
        </div>
    )
}