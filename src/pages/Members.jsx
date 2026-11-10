import MemberCard from "@/components/members/MemberCard"
import Stats from "@/components/ui/dashboard/Contents/Stats"
import LeftBar from "@/components/ui/dashboard/LeftBar"
import TopBar from "@/components/ui/dashboard/Topbar"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/context/AuthContext"
import API from "@/services/api"
import { CircleUserRound } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Members() {
    const [members, setMembers] = useState([])
    const {loading} = useAuth()
    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await API.get('/project/team')
                console.log(response.data)
                setMembers(response.data.result)
            } catch (error) {
                console.log(error)
            }
        }
        if(!loading) fetchMembers()
    }, [loading])
    const navigate = useNavigate()
    return(
        <section className="grid grid-cols-[auto_1fr]">
            <LeftBar />
            <main className="bg-slate-300 min-w-0 mt-1">
                <TopBar />
                <div className="max-w-250 mx-auto">
                    <div className="bg-slate-50 max-w-250 mx-auto">
                        <h2 className="text-xl font-bold">Membre de l'equipe</h2>
                        <p className="text-xs text-slate-800">Gerez les membres de vos projets et collaborez plus efficacement </p>
                    </div>
                    <div className="">
                        <Stats />
                    </div>
                    <div className="grid grid-cols-4 mt-1">
                        <Input type="search" name="" id="" />
                        <select name="" id="">
                            <option value="">Tous les projets</option>
                        </select>
                        <select name="" id="">
                            <option value="">Tous les rôles</option>
                        </select>
                        <select name="" id="">
                            <option value="">Filtres</option>
                        </select>
                    </div>
                    <section>
                        <div className="flex items-center gap-3 px-3 py-2 text-[11px] font-normal text-muted-foreground">
                            <p className="min-w-0 flex-1">Membre</p>
                            <p className="w-25 shrink-0 text-center">Rôle</p>
                            <p className="w-25 shrink-0">Projet</p>
                            <p className="w-25 shrink-0 text-center">Statut</p>
                            <p className="w-25 shrink-0 text-center">Date d'invitation</p>
                            <p className="w-25 shrink-0 text-center">Actions</p>
                        </div>
                        <div>
                           {
                            members.length == 0 ? <p>Vous ne participer ni proprio d'aucun projet pour le moment </p> :
                            members.map(member => (
                                <MemberCard key={member._id}/>
                            ))
                           }
                        </div>
                    </section>
                </div>
            </main>
        </section>
    )
}