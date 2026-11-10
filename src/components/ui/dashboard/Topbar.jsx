import { Input } from "@/components/ui/input"
import { Bell, CircleUserRound } from "lucide-react"
import ProfileCard from "./ProfileCard"

export default function TopBar() {
    return (
        <nav className="">
            <div className="bg-slate-50 flex  mx-auto max-w-250 w-full justify-between p-1">
                <div className="">
                    <Input type="search" name="" id="" placeholder="Rechercher un projet, une tâche..." className={"w-96"} />
                </div>
                <div className=" flex gap-6">
                    <div className=" flex items-center">
                        <Bell size={20} strokeWidth={1.75} />
                    </div>
                    <ProfileCard name="Amirath" member="membre" />
                </div>
            </div>
        </nav>
    )
}