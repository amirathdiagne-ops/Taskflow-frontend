import StatCard from "./StatCard"
import {FolderOpen, SquareCheck, Clock, CircleCheck} from "lucide-react"

export default function Stats() {
    return (
       <section className="pt-2">
         <div className=" grid grid-cols-4 max-w-250 mx-auto gap-6">
            <StatCard title="Projets" icon={<FolderOpen color="blue" strokeWidth={2}/>} value="8" description="+2 ce mois" iconColor="bg-blue-700/20"/>
            <StatCard title="Tâches" icon={<SquareCheck color="purple" strokeWidth={2} />} value="24" description="12 en cours" iconColor="bg-purple-700/20" />
            <StatCard  icon={<Clock size={25} color="orange" strokeWidth={2} />} value="6" title="Tâches en attente" description="à traiter" iconColor="bg-orange-700/20"/>
            <StatCard icon={<CircleCheck color="green" strokeWidth={2} />} value="12" title="Tâches terminées" description="cette semaine" iconColor="bg-green-700/20"/>
        </div>
       </section>
    )
}