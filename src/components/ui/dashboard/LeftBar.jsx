import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInput,
    SidebarInset,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSkeleton,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarProvider,
    SidebarRail,
    SidebarSeparator,
    SidebarTrigger,
    useSidebar,
} from "@/components/ui/sidebar"
import { House, Folder, Users, User, CircleCheck, Settings, LogOut, Check } from "lucide-react"
import { useNavigate } from "react-router-dom"
export default function LeftBar() {
    const navigate = useNavigate()
    return (
        <aside className="">

            <SidebarProvider className="bg-slate-50">
                <Sidebar >
                    <SidebarHeader className="text-gray-900 flex flex-row px-4 items-center">
                       <div className="bg-blue-500 rounded-sm w-fit h-fit">
                        <Check className="text-white" />
                    </div>
                    <div>
                        <span className='text-xl font-bold tracking-tight font-sans'>TaskFlow</span>
                    </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel className="text-[15px]">Espace de Travail</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem className=" ">
                                        <SidebarMenuButton className=" hover:bg-blue-700/20 hover:text-blue-700 hover:rounded-md text-gray-800 font-serif" onClick={() => navigate('/dashboard')}>
                                            <House/> Dashboard
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton className=" hover:bg-blue-700/20 hover:text-blue-700 hover:rounded-md text-gray-800 font-serif" onClick={() => navigate('/projects')}>
                                            <Folder />Mes projets
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton className=" hover:bg-blue-700/20 hover:text-blue-700 hover:rounded-md text-gray-800 font-serif" onClick={() => navigate(`/mytasks`)}>
                                            <CircleCheck  />Mes Tâches
                                            </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                        <SidebarGroup>
                            <SidebarGroupLabel className="">Administration</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton className=" hover:bg-blue-700/20 hover:text-blue-700 hover:rounded-md text-gray-800 font-serif" onClick={() => navigate(`/members`)}>
                                            <Users></Users>Membres
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton className=" hover:bg-blue-700/20 hover:text-blue-700 hover:rounded-md text-gray-800 font-serif">
                                            <Settings/>Parametres
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                    <SidebarFooter>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton className=" hover:bg-blue-700/20 hover:text-blue-700 hover:rounded-md text-gray-800 font-serif">
                                    <User/>Mon Profil
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton className=" hover:bg-blue-700/20 hover:text-blue-700 hover:rounded-md text-gray-800 font-serif">
                                    <LogOut/>Deconnexion
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarFooter>
                </Sidebar>
            </SidebarProvider>
        </aside>
    )
}