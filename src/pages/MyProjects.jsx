import { useEffect, useState } from "react";
import LeftBar from "@/components/ui/dashboard/LeftBar";
import TopBar from "@/components/ui/dashboard/Topbar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import ProjectCard from "@/components/projects/ProjectCard";
import API from "@/services/api";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function MyProjects() {
    const [projects, setProjects] = useState([])
    const [loadingProjects, setLoadingProjects] = useState(true)
    const [erreur, setErreurs] = useState(null)
    const [selectedProjectId, setSelectedProjectId] = useState(null)
    const { loading } = useAuth()
    const Navigate = useNavigate()
    useEffect(() => {
        const loadProjects = async () => {
            try {
                const response = await API.get('/project/all')
                setProjects(response.data.projects)
            } catch (error) {
                setErreurs(error.response?.data?.message || "erreur lors du chargement des projets")
            } finally {
                setLoadingProjects(false)
            }
        }
        if (!loading) loadProjects()
    }, [loading])
const handleClick = (projectId) => {
    console.log(projectId)
    setSelectedProjectId(projectId)
    Navigate(`/myprojects/${projectId}`)

}
    return (

        <div className="grid grid-cols-[auto_1fr]">

            <LeftBar />
            <div className="bg-slate-600 h-full">
                <TopBar />
                <main className="bg-slate-300 min-w-0 mt-1">

                    {loadingProjects && <p>Chargement...</p>}
                    {erreur && <p>{erreur}</p>}
                    <header className="flex justify-between">
                        <div>
                            <h1>Mes projets</h1>
                            <p>Organisez et suivez tous vos projets au même endroits</p>
                        </div>
                        <Button>+ Nouveau Projet</Button>
                    </header>
                    <div className="flex justify-between">
                        <select name="" id="" disabled="disabled">
                            <option value="">Tous les projets</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <div>
                            <select name="" id="" disabled="disabled">
                                <option value="">Dernières modvfications</option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                            <Menu size={16} strokeWidth={1.75} />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-3">
                        {projects.length == 0 ? <p>Votre liste de projet est vide</p> :
                        (
                            projects.map(project => (
                                <ProjectCard key={project._id} title={project.name} description={project.description} status={project.status} progressBarValue={55} onClick={() => handleClick(project._id)} project={project} setProjects={setProjects} projects={projects}/>
                          ))
                        )}
                       
                                
                    </div>

                    
                    
                </main>
            </div>

        </div>

    )
}