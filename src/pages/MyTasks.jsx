import Stats from "@/components/ui/dashboard/Contents/Stats";
import LeftBar from "@/components/ui/dashboard/LeftBar";
import ProjectTaskCard from "@/components/ui/dashboard/Tasks/ProjectTaskCard";
import TopBar from "@/components/ui/dashboard/Topbar";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import API from "@/services/api";
import { useEffect, useState } from "react";
export default function MyTasks() {
    const [tasks, setTasks] = useState([])
    const {loading} = useAuth()
    useEffect(() => {
        const fetchMyTasks = async () => {
            try {
                const response = await API.get('/tasks/assignedTasks')
                console.log(response.data.tasks)
                setTasks(response.data.tasks)
            } catch (error) {
                console.error(error)
            }
        }
        if(!loading) fetchMyTasks()
    }, [loading])
    return (
        <section className="grid grid-cols-[auto_1fr]">
            <LeftBar />
            <main className="bg-slate-300 min-w-0 mt-1">
                <TopBar />
                <div className="max-w-250 mx-auto">
                    <div className="bg-slate-50 max-w-250 mx-auto">
                        <h2 className="text-xl font-bold">Mes tâches</h2>
                        <p className="text-xs text-slate-800">Voici un aperçu de toutes les tâches qui vous sont assignées, dans tous les projets auxquels vous participez</p>
                    </div>
                    <div className="">
                        <Stats />
                    </div>
                    <div className="grid grid-cols-5 mt-1">
                        <Input type="search" name="" id="" />
                        <select name="" id="">
                            <option value="">Tous les projets</option>
                        </select>
                        <select name="" id="">
                            <option value="">Tous les status</option>
                        </select>
                        <select name="" id="">
                            <option value="">Toutes les priorités</option>
                        </select>
                        <select name="" id="">
                            <option value="">Filtres</option>
                        </select>
                    </div>
                    <section>
                        <div className="flex items-center gap-3 px-3 py-2 text-[11px] font-normal text-muted-foreground">
                            <p className="min-w-0 flex-1">Tâche</p>
                            <p className="w-25 shrink-0 text-center">Project</p>
                            <p className="w-25 shrink-0">Statut</p>
                            <p className="w-25 shrink-0 text-center">Priorité</p>
                            <p className="w-25 shrink-0 text-center">Echéance</p>
                            <p className="w-25 shrink-0 text-center">Assigné à</p>
                            <p className="w-25 shrink-0 text-center">Commentaires</p>
                            <p className="w-25 shrink-0 text-center">Actions</p>
                        </div>
                        {tasks.map(task => (
                            <ProjectTaskCard title={task.title} status={task.status} description={task.description} priority={task.priority} echeance={task.dueDate}/>
                        ))}
                    </section>
                </div>
            </main>
        </section>
    )
}