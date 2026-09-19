import { useEffect, useState } from 'react'
import API from '../services/api'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
function Dashboard() {
    const [projects, setProjects] = useState([])
    const [projectsLoading, setProjectsLoading] = useState(true)
    const [erreur, setErreur] = useState(null)
    const [members, setMembers] = useState([])
    const [users, setUsers] = useState([])
    const [project, setProject] = useState({
        name: "",
        description: "",
        status: "active",

    })
    const [editProjectId, setEditProjectId] = useState(null)
    const [selectedProject, setSelectedProject] = useState(null)
    const { loading } = useAuth()
    const handleOnchange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            if (editProjectId) {
                const response = await API.put(`/project/${editProjectId}`, project)
                const projectModified = response.data.project
                const update = projects.map(p => p._id === editProjectId ? projectModified : p)
                setProjects(update)
            } else {
                const response = await API.post('/project', project)
                console.log(response.data.project)
                setProjects([...projects, response.data.project])
            }
        } catch (error) {
            console.error('erreur lors de la mod')
        } finally {
            setProject({
                name: "",
                description: "",
                status: "active"
            })
            setEditProjectId(null)

        }




    }

    const showUsers = async (project) => {
        try {
            const response = await API.get('/auth/users')
            setUsers(response.data.users)
            setSelectedProject(project)
        } catch (error) {
            console.log('erreur lors du showUsers')
        }
    }

    const handleDelete = async (projectId) => {
        try {
            await API.delete(`/project/${projectId}`)
            const currentProjects = projects.filter(project => project._id !== projectId)
            console.log(currentProjects)
            setProjects(currentProjects)
        } catch (error) {
            console.error(error.message)
        }
    }
    const handleClick = async (project) => {
        setEditProjectId(project._id)
        setProject({
            name: project.name,
            description: project.description,
            status: project.status
        })
    }
    useEffect(() => {
        const loadProject = async () => {
            try {
                const response = await API.get('/project/all')
                console.log(response)
                const { projects: allProjects } = response.data
                setProjects(allProjects)
            } catch (error) {
                console.error(error.message)
                setErreur(error.response?.data?.message || error.message || "erreur lors du chargement des project")
            } finally {
                setProjectsLoading(false)
            }

        }
        if (!loading) loadProject()
    }, [loading])
    const showMembers = async (project) => {
        try {
            const response = await API.get(`/project/${project._id}/members`)
            setMembers(response.data.members)
            console.log(response.data)


        } catch (error) {
            console.log(error.message)
        }
    }
    const handleAddMember = async (userId, projectId) => {
        try {
            const response = await API.post(`/project/${projectId}/members`, {userId})
            console.log(response.data.project.members)
            
            
        } catch (error) {
            
        }
    }
    return (
        <div>
            <h2>Ceci est ton Dashboard</h2>
            {projectsLoading && <p>En cours...</p>}
            {
                projects.length == 0 ? <p>Votre liste de projets est vide</p> : (
                    <ul>
                        {
                            projects.map(project => (
                                <li key={project._id}>
                                    <h2>{project.name} </h2>
                                    <p>{project.description} </p>
                                    <p>{project.status} </p>
                                    <p>{project.owner.name} </p>

                                    <button onClick={() => handleDelete(project._id)}>Supprimer</button>
                                    <button onClick={() => handleClick(project)}>Modifier</button>
                                    <Link to={`/tasks/${project._id}`}>Taches du projets</Link>
                                    <Link to={`/tasks/${project._id}/addTask`}>Ajouter une tâche</Link>
                                    <button onClick={() => showMembers(project)}>Voir les membres</button>
                                    <button onClick={() => {showUsers(project)}}>Ajouter membre</button>

                                </li>
                            ))
                        }
                    </ul>
                )

            }
            <>
            {members.length !== 0 && <ul>{members.map(m => (
                <li key={m._id}>
                  <h5>{m.name} </h5>   
                </li>
            ))}</ul>}
            </>
            <>
            {users.length !== 0 && <ul>
                {users.map(user => (
                    <li key={user._id}>
                        <p>{user.name}</p>
                        <button onClick={() => handleAddMember(user._id, selectedProject._id)}>Ajouter</button>
                    </li>
                    
                ))}
                </ul>}
            </>
        
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' value={project.name} name='name' onChange={handleOnchange} />
                <input type="text" placeholder='Description' value={project.description} name='description' onChange={handleOnchange} />
                <select value={project.status} name='status' onChange={handleOnchange}>
                    <option value="planning">planning</option>
                    <option value="active">active</option>
                    <option value="archived">archived</option>
                    <option value="completed">completed</option>
                </select>
                <button type="submit">Enrégistrer</button>
            </form>

        </div>
    )
}

export default Dashboard