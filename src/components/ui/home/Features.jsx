import FeatureCard from "./FeatureCard"
import { Folder, Users, LockKeyhole, SquareCheck } from "lucide-react"
function Features() {
    return (
        <section className="py-2 mb-4" id="features">
            <div className="max-w-6xl mx-auto px-10">
            <div className="grid grid-cols-4">
            <FeatureCard icon={<Folder size={20} strokeWidth={3}/>} color="bg-blue-400/20" title="Gestion de projects"  description="Créez et organiser vos projects en quelques clics" iconColor="text-purple-500"></FeatureCard>
            <FeatureCard icon={<SquareCheck size={20} strokeWidth={2} />} color="bg-green-400/20" title="Suivi des tâches"  description="Gardez le contrôle sur vos tâches et leurs écheances" iconColor="text-green-500"></FeatureCard>
            <FeatureCard icon={<Users size={20} strokeWidth={2} />} color="bg-blue-400/20" title="Collaboration"  description="Travaillez en équipes et restez connectés en temps réels" iconColor="text-blue-500"></FeatureCard>
            <FeatureCard icon={<LockKeyhole size={20} strokeWidth={2}/>} color="bg-red-400/20" title="Sécurité"  description="Vos données sont protégées et en sécurité" iconColor="text-red-500"></FeatureCard>
        </div>
        </div>
        </section>
        
    )
}

export default Features