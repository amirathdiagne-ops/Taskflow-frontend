import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
} from "@/components/ui/card"
import { CircleUserRound } from "lucide-react"
export default function ActivityCard({title, description}) {
    return (
        <Card className="p-1! w-full rounded-sm">
            <CardHeader>
                <div className="flex gap-2">
                    <div><CircleUserRound color="blue" /></div>
                    <div>
                        <CardTitle className="text-xs">{title}</CardTitle>
                        <CardDescription className="text-[10px]">{description}</CardDescription>
                    </div>

                </div>
            </CardHeader>
        </Card>
    )
}