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
import { ChevronRight } from "lucide-react"
export default function ProjectCard({ title, description, icon, status, progressBarValue,  tasksStats, barColor, statusColor, textColor }) {
    return (
        <Card className="p-1.5 shadow-none border-0 border-y rounded-none border-foreground/10">
            <CardContent className=" px-0! p-0!">
                <div className="flex gap-1.5 items-center">
                    <div className={`${statusColor} w-fit h-fit p-2 rounded-full shrink-0`}>
                        {icon}
                    </div>
                    <div className="flex flex-col flex-1 gap-1.5">
                        <div className=" flex w-full items-start gap-1">
                            <div className="">
                                <CardTitle className="text-xs font-semibold">{title} </CardTitle>
                                <CardDescription className="text-xs leading-none">{description} </CardDescription>
                            </div>
                            <div > 
                                <p className={`w-fit h-fit rounded-lg px-1.5 text-xs shrink-0  ${statusColor} ${textColor}` } >{status}</p>
                            </div>
                        </div>
                        <div className="bg-slate-200">
                            <Progress value={progressBarValue} className={`${barColor} [&_[data-slot=progress-track]]:h-1`} >

                            </Progress>
                        </div>


                    </div>
                    <div className=" flex justify-between items-center gap-5 pr-1">
                        <p className="text-[11px] leading-none">{tasksStats}</p>
                        <ChevronRight size={18}  strokeWidth={1.75} className="h-3.5 w-3.5 text-slate-700" />
                    </div>
                </div>


            </CardContent>
        </Card>
    )
}