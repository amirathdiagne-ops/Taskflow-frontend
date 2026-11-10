import fly from "@/assets/fly.png"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
export default function CTA() {
    const navigate = useNavigate()
    return (
        <section className="bg-slate-200 mt-7 p-5">
            <div className="mx-auto  max-w-6xl px-14 grid grid-cols-4 gap-2">
                <div className="w-auto p-7">
                    <img src={fly} />
                </div>
                <div className="flex-col col-span-2 flex justify-center gap-1.5 items-center text-center">
                    <h3 className= " text-gray-800 w-fit text-2xl font-extrabold font-serif">Passez a l'action dès aujourd'hui</h3>
                    <p className=" text-sm font-heading ">Rejoignez des équipes qui ont dèjà choisi TaskFlow pour mieux organiser leur travail et atteindre leurs objectifs</p>
                    <Button className="w-fit bg-blue-600 rounded-lg p-5" onClick={() => navigate('/register')}>commencer maintenant <ArrowRight color="#ffffff" /> </Button>
                </div>
            </div>
        </section>
    )
}