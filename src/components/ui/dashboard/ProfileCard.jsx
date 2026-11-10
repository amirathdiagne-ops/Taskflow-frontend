import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
} from "@/components/ui/card"
import { ChevronDown, CircleUserRound } from "lucide-react"
export default function ProfileCard({ name, member }) {
    return (
        <Card className={"p-0! rounded-none bg-slate-50 border-none h-9 shadow-none "}>
            <CardContent className={"p-0!"}>
                <div className="flex items-center gap-2 p-2 ">
                    <div className="flex justify-center items-center">
                        <CircleUserRound color="blue" className="" size={30} fill="blue"/>
                    </div>
                    <div className=" flex-1 min-w-0 gap-0! p-0!">
                        <CardTitle className=" text-xs font-bold truncate p-0! leading-none">{name}</CardTitle>
                        <p className="text-[8px] font-semibold truncate leading-none">{member}</p>
                    </div>

                    <ChevronDown className="h-4 w-4"/>
                </div>
            </CardContent>
        </Card>
    )

}