import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
} from "@/components/ui/card"

export default function CommentCard() {
    return (
        <Card className={"rounded-none py-0"}>
            <CardContent className={"bg-slate-300"}>
                <div className="flex">
                    <div>AM</div>
                    <div>
                        <p>Amirath</p>
                        <p>Date</p>
                        <CardDescription>J'ai commencé a corriger les erreurs sur le formulaire</CardDescription>
                    </div>
                    <CardAction>::</CardAction>
                </div>

            </CardContent>
        </Card>
    )
}