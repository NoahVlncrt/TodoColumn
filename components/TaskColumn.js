import {useState} from 'react'

export default function TaskColumn(props) {
    let [task, setTask] = useState('')

    let createTask = (id, e) => {
        const body = { title: task, person: id }
        fetch(`http://localhost:3000/api/userTasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
        setTask('');
    }

    let completeTask = (id) => {
        const body = { id }
        fetch(`http://localhost:3000/api/completeTask`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
    }

    return (
        <div className='border-black'>
            <p>{props.data.name}</p>
            <div>
                <input type="text" value={task} onChange={e => setTask(e.target.value)} />
                <button onClick={() => createTask(props.data.id)}>Create task</button>
            </div>
            <div>
                {props.data.tasks.map(task => {
                    return <div>
                        <button onClick={()=> completeTask(task.id)}>Mark as Complete</button>
                        <p>{task.title}</p>
                    </div>
                })}
            </div>
        </div>
    )
}