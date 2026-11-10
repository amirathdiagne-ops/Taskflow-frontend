import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
} from "@/components/ui/card"
import { Calendar } from "lucide-react"
export default function TaskCard({ title, description, icon, status, profileCircle, date, statusColor, textColor }) {
    return (
        <Card className="p-2 rounded-sm">
            <CardContent className=" px-0!">
                <div className="flex gap-1">
                    <div className={``}>
                        {icon}
                    </div>
                    <div className="flex flex-col flex-1 gap-2">
                        <div className=" flex w-full items-start gap-2">
                            <div className="">
                                <CardTitle className="text-[12px] font-semibold">{title} </CardTitle>
                                <CardDescription className="text-xs">{description} </CardDescription>
                            </div>
                            <div >
                                <p className={`w-fit h-fit rounded-lg px-1.5 text-xs shrink-0  ${statusColor} ${textColor}`} >{status}</p>
                            </div>
                        </div>



                    </div>
                    <div className=" w-40 flex justify-between items-center gap-5 ">
                        <div className="flex gap-1.5 text-center ">
                            <Calendar size={14} color="blue" strokeWidth={1} />
                            <p className="text-[12px] ">{date}</p>
                        </div>
                        <p>{profileCircle}</p>
                    </div>
                </div>


            </CardContent>
        </Card>
    )
}