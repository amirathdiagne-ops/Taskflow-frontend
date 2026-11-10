import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import LeftBar from "@/components/ui/dashboard/LeftBar";
import TopBar from "@/components/ui/dashboard/Topbar";
import CommentCard from "@/components/comments/CommentCard";
import { Input } from "@/components/ui/input";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "@/services/api";
import { useAuth } from "@/context/AuthContext";

export default function ProjectTask() {
    const {taskId} = useParams()
    const {loading} = useAuth()
    const [task, setTask] = useState("")
    useEffect(() => {
        const fetchTaskData = async () => {
            try {
                console.log(taskId)
                const response = await API.get(`/tasks/${taskId}`)
                console.log(response.data)
                setTask(response.data.task)
            } catch (error) {
                console.error(error)
            }
        }
        if(!loading)fetchTaskData()
    }, [taskId, loading])
    return (
        <div className="grid grid-cols-[auto_1fr]">
            <LeftBar/>
            <div className="bg-slate-600 h-full ">
                <TopBar />
                <main className="bg-slate-300 min-w-0 mt-1">
                    <header>
                        <div className="justify-between flex">
                            <Button variant="link">Retour aux tâches</Button>
                            <Button variant="outline">Modifier</Button>
                        </div>
                        <h1 className="text-3xl tracking-tight font-bold text-gray-900">{task.title} </h1>
                        <p className="text-sm font-normal">{task.description} </p>
                        <div className="flex gap-3">
                            <p>{task.status}</p>
                            <p>{task.priority}</p>
                        </div>
                    </header>
                    <div className="bg-red-300 p-1 grid grid-cols-[3fr_2fr] gap-2">
                        <div className="bg-blue-500 gap-2 flex flex-col">
                            <p>Commentaire</p>
                            <CommentCard />
                            <CommentCard />
                            <CommentCard />
                           <div className="flex">
                            <span>AMT</span> <Input className={"rounded-sm"} type="search" name="" id="" placeholder="Ecrire un commentaire"/><span>SEND</span>
                           </div>
                        </div>
                        <div className="bg-yellow-200">
                            <div className="">
                                <Card className={" gap-0! rounded-xs py-4 bg-slate-100"}>
                                    <CardHeader>
                                        <CardTitle>Information du projet</CardTitle>
                                    </CardHeader>
                                    <CardContent className={"grid grid-rows-4"}>
                                        <div className=" grid grid-cols-2 p-3">
                                            <p className="px-4">Status </p> <span>Hello</span>
                                        </div>
                                        <div className=" grid grid-cols-2 p-3">
                                            <p className="px-4">Echéance </p> <span>hello</span>
                                        </div>
                                        <div className=" grid grid-cols-2 p-3">
                                            <p className="px-4">Crée par  </p> <span>hello</span>
                                        </div>
                                        <div className="grid grid-cols-2 p-3">
                                            <p className="px-4">Membres </p> <span>hello</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="flex flex-col mt-1 gap-1">
                                <p>Actions</p>
                                <Button variant="outline" className={"rounded-sm"}>Marquer comme terminé</Button>
                                <Button variant="outline" className={"rounded-sm"}>Changer l'assigné</Button>
                                <Button className={'rounded-sm'} variant="destructive">Supprimer cette tâche</Button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}