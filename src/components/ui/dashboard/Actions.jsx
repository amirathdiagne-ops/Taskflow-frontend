import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
} from "@/components/ui/card"
import { Folder, SquarePlus, SquareCheck, Calendar, Users, ChevronRight } from "lucide-react"
import ActionCard from "./Actions/ActionsCard"
export default function Actions() {
    return (
        <Card className="gap-0! rounded-sm min-w-0 bg-amber-300 py-0! h-full">
            <CardHeader className=" text-slate-900 bg-blue-700 mt-1! rounded-t-sm p-3 py-1.5! flex flex-row items-center justify-between w-full gap-1">
                <div className="px-3 flex gap-2">
                    <div>
                        <Folder color="blue" strokeWidth={2} size={20} />
                    </div>
                    <CardTitle className="text-xs font-semibold">Actions rapides</CardTitle>
                </div>
               
               
            </CardHeader>
            <CardContent className="p-2!">
                <div className='grid grid-cols-2 gap-2'>
                    <ActionCard icon={<SquarePlus size={16} color="blue" strokeWidth={2} />} action="Créer un projet" buttonColor={"bg-slate-50"} textColor={"text-slate-800"} hover={"hover:bg-slate-200 dark:bg-slate-900 transition-colors"}/>
                    <ActionCard icon={<SquareCheck size={16}  className="text-purple-600" strokeWidth={2} />} action="Créer une tâche" buttonColor={"bg-purple-50"} textColor={"text-purple-800"} hover={"hover:bg-slate-200 dark:bg-slate-900 transition-colors"}/>
                    <ActionCard icon={<Users size={16} className="text-emerald-600" strokeWidth={2} />} action="Inviter un membre" buttonColor={"bg-emerald-50"} textColor={"text-emerald-800"} hover={"hover:bg-slate-200 dark:bg-slate-900 transition-colors"}/>
                    <ActionCard icon={<Calendar size={16} className="text-amber-600" strokeWidth={2} />} action="Voir le calendrier" buttonColor={"bg-orange-50"} textColor={"text-amber-800"} hover={"hover:bg-slate-200 dark:bg-slate-900 transition-colors"}/>
                </div>

            </CardContent>

        </Card>
    )
}