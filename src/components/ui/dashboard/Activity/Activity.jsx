import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
} from "@/components/ui/card"
import ActivityCard from "./ActivityCard"
import { Folder } from "lucide-react"
export default function Activity() {
    return (
        <Card className="gap-0! rounded-sm min-w-0 bg-amber-300 py-0! h-full">
            <CardHeader className=" text-slate-900 bg-blue-700 mt-1! rounded-t-sm p-3 py-1.5! flex flex-row items-center justify-between w-full gap-1">
                <div className="px-3 flex gap-2">
                    <div>
                        <Folder color="blue" strokeWidth={2} size={20} />
                    </div>
                    <CardTitle className="text-xs font-semibold">Activités récentes</CardTitle>
                </div>
                <CardAction className="text-xs">Voir tous</CardAction>
            </CardHeader>
            <CardContent className='flex flex-col gap-0!'>
                <ActivityCard title="Amira a commenté sur projet website" description="<< J'ai commencé la maquette de la page d'accueil>>" />
                <ActivityCard title="Amira a commenté sur projet website" description="<< J'ai commencé la maquette de la page d'accueil>>" />
                <ActivityCard title="Amira a commenté sur projet website" description="<< J'ai commencé la maquette de la page d'accueil>>" />
            </CardContent>

        </Card>
    )
}