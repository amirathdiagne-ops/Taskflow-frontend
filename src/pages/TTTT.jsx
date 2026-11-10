import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import API from "../services/api"
import { useAuth } from "../context/AuthContext"
import TaskForm from "./TaskForm"
import CommentForm from "./commentForm"
import { Link } from 'react-router-dom'
function Tasks() {
    const [tasks, setTasks] = useState([])
    const [tasksLoading, setTasksLoading] = useState(true)
    const [erreur, setErreur] = useState(null)
    const { projectId } = useParams()
    const { loading } = useAuth()
    const [editTask, setEditTask] = useState(null)
    const [taskToComment, setTaskToComment] = useState(null)
    const [members, setMembers] = useState([])
    const [selectedTask, setSelectedTask] = useState(null)
    useEffect(() => {
        const loadTasks = async () => {
            try {
                const response = await API.get(`/project/${projectId}/tasks`)
                setTasks(response.data.tasks)
            } catch (error) {
                console.error(error.response?.data?.message || "erreur lors du chargement des taches")
                setErreur(error.response?.data?.message || "erreur lors du chargement des taches")
            } finally {
                setTasksLoading(false)
            }

        }
        if (!loading) loadTasks()
    }, [loading])
    const handleClick = (task) => {
        console.log(task._id)
        setEditTask(task)
    }
    const handleDelete = async (task) => {
        try {
            await API.delete(`/tasks/${task._id}`)
            const removeTask = tasks.filter(t => t._id !== task._id)
            setTasks(removeTask)
        } catch (error) {
            console.log(error.message)
        }
    }
    const handleTaskComment = (task) => {
        setTaskToComment(task)
    }
    const handleAssignment = async (taskId) => {
        try {
            console.log(projectId)
            const response = await API.get(`/project/${projectId}/members`)
            setMembers(response.data.members)
            setSelectedTask(taskId)
            console.log(response.data.members)
        } catch (error) {
            console.log(error.message)
        }
    }
    const assignedTo = async (userId, taskId) => {
        try {
            const response = await API.put(`tasks/${taskId}/assigneTo`, { userId })
            console.log(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div>
            <h1>Bienvenu sur la page des taches</h1>
            <p>chaque tache appartient a un projet donné et les taches sont ajoutées par soit un membre ou le proprrio du projet </p>
            {tasks.length === 0 ? <p>la liste des taches de ce projet est vide</p> : (
                <ul>
                    {tasks.map(task =>
                        <li key={task._id}>
                            <h2>{task.title}</h2>
                            <p>{task.description}</p>
                            <p>{task.status} </p>
                            <p>{task.priority}</p>
                            <p>{task.dueDate} </p>
                            <button onClick={() => handleClick(task)}>Modifier</button>
                            <button onClick={() => handleDelete(task)}>Supprimer</button>
                            <button onClick={() => handleAssignment(task._id)}>Assigner</button>
                            <Link to={`/tasks/${task._id}/comments`}  >Voir les commentaires</Link>
                            <button onClick={() => handleTaskComment(task._id)}>Ajouter un commentaire</button>
                           
                        </li>
                    )}
                </ul>
            )}
            <>
                {editTask && <TaskForm taskToEdit={editTask} tasks={tasks} setTasks={setTasks} setEditTask={setEditTask} />}
            </>
            <>
                {taskToComment && <CommentForm taskToComment={taskToComment} />}
            </>
            <>
                {members.length == 0 ? <p>La liste des membres est vide </p> : <ul>{members.map(m =>
                    <li>
                        <p>{m.name}</p>
                        <button onClick={() => assignedTo(m._id, selectedTask)}>Faire assigner</button>
                    </li>
                )}</ul>}
            </>

        </div>

    )
}

export default Tasks