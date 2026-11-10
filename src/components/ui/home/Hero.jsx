import heroImage from "@/assets/heroSect.png"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
function Hero() {
    const navigate = useNavigate()
    return (
        <section className=" bg-slate-50" id="accueil">
            <div className="grid grid-cols-2 mx-auto  max-w-6xl px-14  items-center">

                <div className="flex flex-col gap-3">
                    <article>
                        <h1 className="font-extrabold text-3xl font-sans text-gray-800">Gérez vos projets.</h1>
                        <h1 className="font-extrabold text-3xl font-sans text-gray-800">Organisez votre équipe.</h1>
                        <h1 className="font-extrabold text-3xl font-sans text-blue-600">Suivez vos tâches.</h1>
                    </article>
                    <p className="font-stretch-condensed">
                        <span className="font-semibold text-gray-600">TaskFlow</span> est une plateforme simple et intuitive pour gérer <br></br>
                        vos projets, organiser vos tâches et collaborer efficacement <br></br>
                        avec votre équipe
                    </p>
                    <div className="flex gap-3">
                        <Button onClick={() => navigate('/register')} className="bg-blue-600 rounded-md px-3.5 py-4.5 hover:bg-blue-800">Commencer maintenant <ArrowRight color="#ffffff" /></Button>
                        <a href="#features">
                            <Button className=" border-blue-400 rounded-md px-3.5 py-4.5  font-bold text-gray-700" variant="outline">En savoir plus</Button>
                        </a>

                    </div>
                </div>
                <div className="">
                    <img src={heroImage}></img>
                </div>
            </div>
        </section>
    )
}
export default Hero