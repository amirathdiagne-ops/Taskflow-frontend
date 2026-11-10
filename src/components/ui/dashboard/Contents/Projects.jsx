import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
} from "@/components/ui/card"
import ProjectCard from "./RecentsProjectCard"
import { Globe, Smartphone, Server, Folder, ChevronRight } from "lucide-react"
export default function Projects() {
    return (
        <Card className=" gap-0! rounded-sm min-w-0 bg-amber-300 py-0! h-full">
            <CardHeader className=" text-slate-900 bg-blue-700 mt-1! rounded-t-sm p-3 py-1.5! flex flex-row items-center justify-between w-full gap-1">
                <div className=" flex gap-2 items-center">
                    <div className=" ">
                        <Folder color="blue" strokeWidth={2} size={20} className="h-3.5 w-3.5 shrink-0" />
                    </div>
                    <CardTitle className="text-xs font-bold leading-none mt-0!">Mes projets recents</CardTitle>
                </div>
                <button className="text-[10px] font-bold flex items-center gap-1 p-0! h-auto! hover:underline transition-all text-blue-800">
                    Voir tous
                    <ChevronRight className="h-3 w-3" />
                </button>
            </CardHeader>
            <CardContent className='flex flex-col gap-0! bg-pink-500 px-1'>
                <ProjectCard title="Projet Website" description="Refonte du site vitrine de TaskFlow" status="En cours" tasksStats={"8/12 tâches"} actionIcon={">"} progressBarValue={60} icon={<Globe color="blue" />} barColor={"[&_[data-slot=progress-indicator]]:bg-blue-700"} statusColor={"bg-blue-600/10"} textColor={"text-blue-700"} />
                <ProjectCard title="Application Mobile" description="Version mobile de TaskFlow" status="En cours" tasksStats={"10/16 tâches"} actionIcon={">"} progressBarValue={55} icon={<Smartphone color="purple" strokeWidth={2} />} barColor={"[&_[data-slot=progress-indicator]]:bg-purple-700"} statusColor={"bg-purple-600/10"} textColor={"text-purple-700"} />
                <ProjectCard title="API Taskflow" description="API pour la gestion des tâches" status="terminée" tasksStats={"6/6 tâches"} actionIcon={">"} progressBarValue={100} icon={<Server color="green" fill="green" fillOpacity={0.3} />} barColor={"[&_[data-slot=progress-indicator]]:bg-green-700"} statusColor={"bg-green-600/10"} textColor={"text-green-700"} />
            </CardContent>

        </Card>
    )
}