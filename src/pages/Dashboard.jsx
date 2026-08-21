import { useEffect, useState } from 'react'
import API from '../services/api'
import { useAuth } from '../context/AuthContext'

function Dashboard() {
    const [projects, setProjects] = useState([])
    const [projectsLoading, setProjectsLoading] = useState(true)
    const [erreur, setErreur] = useState(null)
    const [project, setProject] = useState({
        name: "",
        description: "",
        status: "active",

    })
    const [editProjectId, setEditProjectId] = useState(null)
    const { accessToken } = useAuth()
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

    const handleDelete = async (projectId) => {
        try {
            const response = await API.delete(`/project/${projectId}`)
            const currentProjects = projects.filter(project => project._id !== projectId)
            console.log(currentProjects)
            setProjects(currentProjects)
        } catch (error) {
            console.error(error.message)
        }
    }
    const handleClick = async (e, project) => {
        e.preventDefault()
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
                const response = await API.get('/project')
                const { projects: allProjects } = response.data
                setProjects(allProjects)
            } catch (error) {
                console.error(error.message)
                setErreur(error.response?.data?.message || error.message || "erreur lors du chargement des project")
            } finally {
                setProjectsLoading(false)
            }

        }
        loadProject()
    }, [])

    return (
        <div>
            <h2>Ceci est ton Dashboard</h2>
            {projectsLoading && <p>En cours...</p>}
            {projects.length === 0 ? <p>Votre liste de projets est vide</p> : (
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
                            </li>
                        ))
                    }
                </ul>
            )

            }
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