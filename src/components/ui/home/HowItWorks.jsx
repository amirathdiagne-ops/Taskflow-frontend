import { Button } from "../button";
import HowItWorksCard from "./HowItWorksCard";
import { Folder, Users, MoveRight, SquareCheck } from "lucide-react"
export default function HowItWorks() {
    return (
        <section className="bg-slate-50 p-4 mt-10" id="howItWorks">
            <div className="max-w-6xl mx-auto px-16 flex flex-col gap-6 ">
                <div className=" flex flex-col justify-center items-center gap-3.5">
                    <h1 className=" w-fit text-center "><span className=" font-bold text-3xl text-[#132a55] block mx-auto">Organisez votre travail </span><span className="text-blue-700 w-fit block text-3xl font-bold">en quelques étapes simples.</span></h1>
                    <p className=" font-semibold w-fit text-center text-slate-600 tracking-normal">De la création de votre projet au suivi des tâches, TaskFlow vous guide<br />  a chaque étape pour une meilleure productivité</p>
                </div>
                <div className="flex items-center gap-3.5">
                    <HowItWorksCard icon={<Folder size={20} strokeWidth={3} />} color="bg-blue-400/20" title="Créez votre projet" description="Lancer un projects en quelques clics et invitez votre équipe" iconColor="text-purple-500" number="01"></HowItWorksCard>
                    <MoveRight size={50} color="blue" strokeWidth={0.75} />
                    <HowItWorksCard icon={<SquareCheck size={20} strokeWidth={2} />} color="bg-green-400/20" title="Ajoutez vos tâches" description="Organisez vos tâches, définissez les priorités et les écheances" iconColor="text-green-500" number="02"></HowItWorksCard>
                    <MoveRight size={50} color="blue" strokeWidth={0.75} />
                    <HowItWorksCard icon={<Users size={20} strokeWidth={2} />} color="bg-blue-400/20" title="Travaillez en équipe" description="Assignez les tâches, suivez les progrès et communiquez facilement" iconColor="text-blue-500" number="03"></HowItWorksCard>
                    
                </div>
            </div>
        </section>
    )
}