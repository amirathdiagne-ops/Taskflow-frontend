import { useForm } from "react-hook-form"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import API from "../services/api"
function TaskForm({ taskToEdit, setTasks, tasks, setEditTask }) {
    const { projectId } = useParams()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset
    } = useForm()
    const onSubmit = async (data) => {
        if (!taskToEdit) {
            try {
                await API.post(`/project/${projectId}/tasks`, data)
                console.log("tache ajoutée au projet")
                navigate(`/tasks/${projectId}`)
            } catch (error) {
                console.error("erreur lors de la creation", error.message)
            }
        } else {
            console.log(data)
            const response = await API.patch(`/tasks/${taskToEdit._id}`, data)
            const taskModified = response.data.task
            const actualTasks = tasks.map(task => task._id.equals(taskToEdit._id) ? taskModified : task)
            console.log("tache modifiéé avec succées")
            setTasks(actualTasks)
            setEditTask(null)
            console.log(actualTasks)
            

        }
    }
    useEffect(() => {
        const handleTaskEdit = async () => {
            try {
                console.log("la tache à éditer a mutée")
                reset(taskToEdit)
            } catch (error) {
                console.log(error.message)
            }
        }
        if (taskToEdit) handleTaskEdit()
    }, [taskToEdit, reset])
    const handleAssignment = async () => {
        
    }
    return (
        <div>
            <h3>Le formulaire d'ajout de tâche</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text"  {...register("title")} placeholder="titre" />
                <input type="text" {...register("description")} placeholder="description" />
                <input type="date" {...register("dueDate")} placeholder="Date d'expiration" />
                <select  {...register("status")}>
                    <option value="todo">A faire</option>
                    <option value="in_progress">En cours</option>
                    <option value="done">Terminée</option>
                </select>
                <select {...register('priority')}>
                    <option value="low">Faible</option>
                    <option value="high">Forte</option>
                    <option value="urgent">Urgente</option>
                    <option value="medium">intermédiaire</option>
                </select>
                <button onClick={() => handleAssignment()}>Assigner la tâche</button>
                {taskToEdit ? <button type="submit">Enrégistrer ma modification</button> :

                    <button type="submit">Créer une tache</button>
                }
            </form>
            
        </div>
    )
}

export default TaskForm