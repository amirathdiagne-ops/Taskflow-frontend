import FooterCard from "./FooterCard"
import { Check } from "lucide-react"
export default function Footer() {
    return (
        <footer className="bg-slate-50">
            <div className="mx-auto  max-w-6xl px-1 grid grid-cols-4">
                <FooterCard title="TaskFlow" description="Organisez votre travail, booster votre productivité" />
                <FooterCard title="Produits" link1="Fonctionnalités" link2="Comment ça marche" link3="Tarifs" />
                <FooterCard title="Entreprise" link1="A propos" link2="Contact" link3="Blog" />
                <FooterCard title="Compte" link1="Connexion" link2="Inscription" link3="FAQ" />
            </div>
        </footer>
    )
}