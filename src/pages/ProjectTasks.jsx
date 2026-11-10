import { Button } from "@/components/ui/button"
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
} from "@/components/ui/card"
import LeftBar from "@/components/ui/dashboard/LeftBar"
import ProjectTaskCard from "@/components/ui/dashboard/Tasks/ProjectTaskCard"
import { useEffect } from "react"
export default function Tasks({ allTasks, setTasks }) {
    console.log(allTasks)
    return (
        <section className="w-full">
            <Card className={"gap-0! rounded-xs py-0 bg-slate-200"}>
                <CardHeader>
                    <CardTitle>Tâches de ce projet</CardTitle>
                    <CardDescription>Gérez et suivez toutes les tâches de ce projet</CardDescription>
                    <div>
                        <Button variant="secondary">Toutes</Button>
                        <Button variant="secondary">En cours</Button>
                        <Button variant="secondary">Terminées</Button>
                        <Button variant="secondary">En attentes</Button>
                    </div>
                    <CardAction></CardAction>
                </CardHeader>
                <Card className={"gap-0! rounded-xs py-0 to-blue-400"}>
                    <CardHeader className={"rounded-none bg-red-400"}>
                        <div className="flex items-center gap-3 px-3 py-2 text-[11px] font-normal text-muted-foreground">
                            <p className="min-w-0 flex-1">Tâche</p>
                            <p className="w-25 shrink-0">Statut</p>
                            <p className="w-25 shrink-0 text-center">Priorité</p>
                            <p className="w-25 shrink-0 text-center">Echéance</p>
                            <p className="w-25 shrink-0 text-center">Assigné à</p>
                            <p className="w-25 shrink-0 text-center">Commentaires</p>
                            <p className="w-25 shrink-0 text-center">Actions</p>
                        </div>
                    </CardHeader>
                    <CardContent>
                        {allTasks.map(task => {
                            console.log("Tâche dans le parent :", task);
                            console.log("ID dans le parent :", task?._id);
                            return (
                                <ProjectTaskCard key={task._id} setTasks={setTasks} allTasks={allTasks}  title={task.title} description={"hello dest"} priority={task.priority} assigned={"null"} status={task.status} echeance={task.echeance || "null"} comment={"hello comment"} task={task} taskId={task._id} />
                            )
                        })
                        }

                    </CardContent>
                </Card>
            </Card>

        </section>
    )
}