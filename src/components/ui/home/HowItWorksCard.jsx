import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

function HowItWorksCard({icon, title, description, color, iconColor, number}) {
    return (
       <Card className=" gap-2 rounded-lg">
        <CardHeader className='gap-2.5'>
            <CardTitle className="w-fit flex justify-center items-center gap-3">
                <div className={`${color} p-2.5 rounded-lg `}>
                    <span className={`${iconColor}`}>{icon}</span>
                </div>
                <div className={`${color} flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold ${iconColor}`}>{number}</div>
            </CardTitle>
            <CardDescription className="font-bold text-gray-800">{title}</CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-slate-700 text-sm font-heading">{description}</p>
        </CardContent>
       </Card>
    )
    
}
export default  HowItWorksCard