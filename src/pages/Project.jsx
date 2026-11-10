import { Button } from "@/components/ui/button";
import LeftBar from "@/components/ui/dashboard/LeftBar";
import { ArrowLeft, Calendar, CirclePlus, CircleUser, CircleUserIcon, EllipsisVertical } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
} from "@/components/ui/card"
import {
    Progress,
    ProgressTrack,
    ProgressIndicator,
    ProgressLabel,
    ProgressValue,
} from "@/components/ui/progress"
import ProjectTaskCard from "@/components/ui/dashboard/Tasks/ProjectTaskCard";
import { } from "lucide-react";
import { useEffect, useState } from "react";
import API from "@/services/api";
import { useAuth } from "@/context/AuthContext";
import Tasks from "./ProjectTasks";

export default function Project() {
    const { loading, user } = useAuth()
    const { projectId } = useParams()
    const [project, setProject] = useState({
        name: "",
        description: "",
        status: "active"
    })
    const [tasks, setTasks] = useState([])
    const [activeTab, setActiveTab] = useState("overview")
    const Navigate = useNavigate()
    useEffect(() => {
        const fetchProjectData = async () => {
            try {
                const response = await API.get(`/project/${projectId}`)
                const { project: fetchProject } = response.data
                console.log(response.data)
                setProject({
                    name: fetchProject.name || "",
                    description: fetchProject.description || "",
                    status: fetchProject.status || "active"
                })
            } catch (error) {
                console.error("erreur lors du chargement des projets")
            }
        }
        if (!loading && projectId) fetchProjectData()
    }, [loading, projectId])
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await API.get(`/project/${projectId}/tasks`)
                console.log(response.data)
                setTasks(response.data.tasks)
            } catch (error) {
                console.log("erreur lors du chargement des tâches")
            }
        }
        if (!loading) fetchTasks()
    }, [loading])
    return (
        <div className="grid grid-cols-[auto_1fr]">
            <LeftBar/>
            <main className="grid grid-rows-[25px_auto] px-3 gap-1">
                <div className="h-fit text-sm font-semibold tracking-tight">
                    <p>Mes projets / <span> Refonte du site web</span></p>
                </div>
                <div>
                    <header className=" flex justify-between">
                        <nav className="" aria-label="Gestion des projets">
                            <Link className="inline-flex font-serif tracking-tight text-blue-800  text-sm items-center gap-1">
                                <ArrowLeft size={15} strokeWidth={1.75} color="blue" />Retour aux projets
                            </Link>
                            <div className="flex items-center gap-14">
                                <h1 className="text-3xl tracking-tight font-bold text-gray-900">{project.name}</h1>
                                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">{project.status} </span>
                            </div>
                            <p>{project.description} </p>
                        </nav>
                        <aside className="flex items-center px-5 gap-8">
                            <p className="inline-flex text-sm text-center gap-2 font-semibold">
                                <Calendar size={22} strokeWidth={1.5} /> Echéance : 24 Oct.
                            </p>
                            <div className="flex ">
                                <div className="bg-slate-200 w-8 h-8 p-2 text-xs rounded-full text-center font-semibold justify-center items-center">AM</div>
                                <div className="bg-slate-200 w-fit h-fit p-2 text-xs rounded-full font-semibold">LB</div>
                                <div className="bg-slate-200 w-fit h-fit p-2 text-xs rounded-full font-semibold">TB</div>
                                <CirclePlus size={35} strokeWidth={1} className=" fill-lime-50" />
                            </div>
                        </aside>
                        <aside className=" flex items-center gap-4 px-6">
                            <div className="w-fit h-fit p-2 border border-blue-200 font-bold"><EllipsisVertical size={20} strokeWidth={1} /></div>
                            <Button className={"bg-blue-600 rounded-sm py-4.5! hover:bg-blue-800"} onClick={() => Navigate(`/project/${projectId}/task`)}><span className="text-xl">+</span> Nouvelle Tâche</Button>
                        </aside>


                    </header>
                    <div className="bg-slate-50 mt-2">
                        <nav className=" flex gap-6 text-sm font-medium p-2 text-center text-gray-600 font-sans">
                            <Link className=" border-b-4 border-blue-700 py-1.5 text-blue-700 font-semibold">Vue d'ensemble</Link>
                            <Button variant="link" onClick={() => setActiveTab("tasks")}>Tâches</Button>
                            <Link className=" py-2">Membres</Link>
                            <Link className=" py-2">Activités</Link>
                        </nav>
                        {activeTab === "overview" && <div className="grid grid-cols-[1fr_1fr] gap-5 mt-3">
                            <div className=" flex flex-col gap-6">
                                <Card className={"w-150 gap-0! py-1.5! rounded-xs"}>
                                    <CardHeader className={" rounded-none"}>
                                        <CardTitle className={"font-bold"}>Progression du projet</CardTitle>
                                    </CardHeader>
                                    <CardContent className={""}>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-3xl font-bold">68%</p>
                                                <CardDescription className={"font-medium"}>8 tâches terminées sur 12</CardDescription>
                                            </div>
                                            <p className="text-sm font-normal">4 tâches restants</p>
                                        </div>
                                        <Progress value={68} className={`**:data-[slot=progress-indicator]:bg-blue-700 **:data-[slot=progress-track]:h-2.5 pt-1`} />
                                    </CardContent>
                                </Card>
                                <Card className={"w-150 gap-0! rounded-xs py-0"}>
                                    <CardHeader className={" rounded-none"}>
                                        <CardTitle>Tâches du projet</CardTitle>
                                        <CardAction>Voir toutes les tâches</CardAction>
                                    </CardHeader>
                                    <CardContent>

                                        <div className="flex items-center gap-3 px-3 py-2 text-[11px] font-normal text-muted-foreground">
                                            <p className="min-w-0 flex-1">Tâche</p>
                                            <p className="w-20 shrink-0">Statut</p>
                                            <p className="w-24 shrink-0 text-center">Commentaires</p>
                                            <p className="w-12 shrink-0 text-center">Assigné à</p>
                                        </div>
                                        {tasks.length == 0 ? <p>Pas encore de tâche</p> : (
                                            tasks.map(task => (
                                                <ProjectTaskCard task={task}
                                                  allTasks={tasks} setTasks={setTasks} taskId={task._id} key={task._id} title={task.title} status={task.status} assigned={task.assignedTo?.name || "null"} />
                                            ))
                                        )}
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="">
                                <Card className={" gap-0! rounded-xs py-4 bg-slate-100"}>
                                    <CardHeader>
                                        <CardTitle>Information du projet</CardTitle>
                                        <CardAction><EllipsisVertical size={20} strokeWidth={1} /></CardAction>
                                    </CardHeader>
                                    <CardContent className={"grid grid-rows-4"}>
                                        <div className=" grid grid-cols-2 p-3">
                                            <p className="px-4">Status </p> <span>{project.status}</span>
                                        </div>
                                        <div className=" grid grid-cols-2 p-3">
                                            <p className="px-4">Echéance </p> <span>24 Oct.</span>
                                        </div>
                                        <div className=" grid grid-cols-2 p-3">
                                            <p className="px-4">Crée par  </p> <span>{project.owner?.name || user?.name} </span>
                                        </div>
                                        <div className="grid grid-cols-2 p-3">
                                            <p className="px-4">Membres </p> <span>AMM</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>}
                        {activeTab === "tasks" && <Tasks allTasks={tasks} setTasks={setTasks}/>}
                    </div>
                </div>
            </main>
        </div>
    )
}