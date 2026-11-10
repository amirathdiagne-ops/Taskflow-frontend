import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
export default function ActionCard({icon, action, textColor, buttonColor, hover}) {
    return (
        <Button className={`${buttonColor} rounded-sm  py-4 ${hover}`} >
            <span>{icon}</span>
            <span className={`${textColor} text-[10px] font-sans`}>{action}</span>
        </Button>
    )
}