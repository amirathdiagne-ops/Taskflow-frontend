import heroImage from "@/assets/heroSect.png"
import { ArrowRight, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
export default function WhyTaskFlow() {
    const navigate = useNavigate()
    return (
        <section className="bg-slate-50" id="whyTaskFlow">
            <div className="grid grid-cols-2 mx-auto  max-w-6xl px-14  items-center gap-20 ">
                <div>
                    <img src={heroImage} />
                </div>
                <div>
                   <div className="flex flex-col gap-5">
                     <h2 className="text-[25px] font-bold text-gray-700">Tout ce dont votre équipe a besoin <span className="block text-blue-700/80">pour rester organiser</span></h2>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className=" w-4 h-4 rounded-full bg-blue-600 flex items-center">
                                <Check size={20} color="white" strokeWidth={2} />
                            </div>
                            <span>Une vision claire de vos projets</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className=" w-4 h-4 rounded-full bg-blue-600 flex items-center">
                                <Check size={20} color="white" strokeWidth={2} />
                            </div>
                            <span>Un  suivi simple des tâches</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className=" w-4 h-4 rounded-full bg-blue-600 flex items-center">
                                <Check size={20} color="white" strokeWidth={2} />
                            </div>
                            <span>Une collaboration fluide et efficace</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className=" w-4 h-4 rounded-full bg-blue-600 flex items-center">
                                <Check size={20} color="white" strokeWidth={2} />
                            </div>
                            <span className="font-heading text-gray-700">Vos données sont protégées</span>
                        </div>
                       
                    </div>
                    <Button className="bg-blue-700 w-fit p-5 rounded-lg" onClick={() => navigate('/register')}>Commencer maintenant <ArrowRight /></Button>
                   </div>
                </div>
            </div>
        </section>
    )
}