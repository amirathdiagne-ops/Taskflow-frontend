import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
function FeatureCard({icon, title, description, color, iconColor}) {
    return (
       <Card className="border-none rounded-none shadow-none bg-transparent ring-0 gap-2">
        <CardHeader className='gap-2.5'>
            <CardTitle className="w-fit">
                <div className={`${color} p-2.5 rounded-lg `}>
                    <span className={`${iconColor}`}>{icon}</span>
                </div>
                

            </CardTitle>
            <CardDescription className="font-bold text-gray-800">{title}</CardDescription>
        </CardHeader>
        <CardContent>
            <p className="font-sans">{description}</p>
        </CardContent>
       </Card>
    )
    
}
export default  FeatureCard