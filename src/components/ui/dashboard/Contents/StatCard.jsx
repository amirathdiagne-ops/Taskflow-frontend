import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
} from "@/components/ui/card"
export default function StatCard({ icon, title, value, description, iconColor }) {
    return (
        <Card className="rounded-sm p-0!">
            <CardContent className="p-2">
                <div className="flex gap-2">

                    <div className={`${iconColor} p-2 rounded-full w-fit h-fit`}>
                        {icon}
                    </div>

                    <div className="flex flex-col">
                        <CardTitle className="text-gray-700 text-xs">
                            {title}
                        </CardTitle>

                        <p className="text-xl font-semibold">
                            {value}
                        </p>

                        <p className=" text-gray-600 font-semibold text-[10px] ">
                            {description}
                        </p>
                    </div>

                </div>
            </CardContent>
        </Card>
    )
}