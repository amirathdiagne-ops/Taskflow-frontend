import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
} from "@/components/ui/card"
import { Link } from "react-router-dom"
export default function FooterCard({ title, description, link1, link2, link3, link4 }) {
    return (
        <Card className="border-none rounded-none shadow-none bg-transparent ring-0 gap-2">
            <CardHeader>
                <CardTitle>{title} </CardTitle>
                <CardDescription>
                    <p>{description} </p>
                    <div className="flex flex-col">
                        <Link>{link1} </Link>
                        <Link>{link2} </Link>
                        <Link>{link3} </Link>
                        <Link>{link4} </Link>
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent>

            </CardContent>
            <CardFooter></CardFooter>
        </Card>
    )
}