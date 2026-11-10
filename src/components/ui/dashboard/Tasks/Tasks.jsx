import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
} from "@/components/ui/card"
import {SquareCheck, Square, CircleUserRound} from "lucide-react"
import TaskCard from "./TaskCard"
export default function Tasks() {
    return(
         <Card className="gap-0! rounded-sm min-w-0 bg-amber-300 py-0! h-fit">
                    <CardHeader className=" text-slate-900 bg-blue-700 mt-1! rounded-t-sm p-3 py-1.5! flex flex-row items-center justify-between w-full gap-1">
                       <div className="px-3 flex gap-2">
                        <div>
                            <SquareCheck color="blue" strokeWidth={2} size={20}/>
                        </div>
                         <CardTitle className="text-xs font-semibold">Tâches à venir</CardTitle>
                       </div>
                        <CardAction className="text-xs">Voir tous</CardAction>
                    </CardHeader>
                    <CardContent className='flex flex-col gap-0! px-1 bg-red-700'>
                        <TaskCard title="Corriger le fomulaire de connexion" description="Projet website" status="En cours" date={"Aujourd'hui"} profileCircle={<CircleUserRound color="blue" size={20}/>}  icon={<Square size={16} color="blue" strokeWidth={1} />}  statusColor={"bg-blue-600/10"} textColor={"text-blue-700"}/>
                        <TaskCard title="Corriger le fomulaire de connexion" description="Projet website" status="En cours" date={"Aujourd'hui"} profileCircle={<CircleUserRound color="blue" size={20}/>}  icon={<Square size={16} color="blue" strokeWidth={1} />}  statusColor={"bg-blue-600/10"} textColor={"text-blue-700"}/>
                        <TaskCard title="Corriger le fomulaire de connexion" description="Projet website" status="En cours" date={"Aujourd'hui"} profileCircle={<CircleUserRound color="blue" size={20}/>}  icon={<Square size={16} color="blue" strokeWidth={1} />}  statusColor={"bg-blue-600/10"} textColor={"text-blue-700"}/>
                    </CardContent >
        
                </Card>
    )
}