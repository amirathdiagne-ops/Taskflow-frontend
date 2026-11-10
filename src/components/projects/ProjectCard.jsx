import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
} from "@/components/ui/card"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
    Progress,
    ProgressTrack,
    ProgressIndicator,
    ProgressLabel,
    ProgressValue,
} from "@/components/ui/progress"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Textarea } from "@/components/ui/textarea"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Controller, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { EllipsisVertical } from "lucide-react"
import { useState } from "react"
import API from "@/services/api"
import { useNavigate } from "react-router-dom"
export default function ProjectCard({ icon, title, description, projects, project, setProjects, status, progressBarValue, taskStats, dueDate, onClick }) {
    const [editOpen, setEditOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)
    const { handleSubmit, register, control, reset } = useForm({
        defaultValues: {
            status: "active"
        }
    })
    const navigate = useNavigate()
    const [projectToDelete, setProjectToDelete] = useState(null)
    const handleEdit = (project) => {
        console.log(project)
        reset({
            name: project.name,
            description: project.description,
            status: project.status
        })
        setEditOpen(true)
    }
    const onSubmit = async (data) => {
        try {
            const response = await API.put(`/project/${project._id}`, data)
            const projectModified = response.data.project
            const editProject = projects.map(p => p._id === project._id ? projectModified : p)
            setProjects(editProject)
            setEditOpen(false)
            console.log(editProject)
            console.log(response.data)
        } catch (error) {

        }
    }
    const handleDeleteClick = (project) => {
        setDeleteOpen(true)
        setProjectToDelete(project)
    }
    const handleDelete = async (p) => {
        try {
            await API.delete(`/project/${p._id}`)
            const allProjects = projects.filter(project => project._id !== p._id)
            setProjects(allProjects)
            navigate(`/projects`)
        } catch (error) {
            console.error(error)
        }
    }
    return (

        <>

            <Card className={"rounded-sm p-0 gap-1.5"}>
                <CardHeader>
                    <div>
                        {icon}
                    </div>
                    <CardTitle>{title} </CardTitle>
                    <CardDescription>{description} </CardDescription>
                    <CardAction>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <div className="w-fit h-fit p-2 border border-blue-600 font-bold">
                                    <EllipsisVertical size={25} color="black" strokeWidth={2} />
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuGroup>
                                    <DropdownMenuItem onClick={() => handleEdit(project)}>Modifier </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => handleDeleteClick(project)}>Supprimer </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <p>{status}</p>
                    <div>
                        <Progress value={progressBarValue}>
                            <ProgressValue />
                        </Progress>
                    </div>
                    <p>{taskStats}</p>
                </CardContent>
                <CardFooter>
                    <p>{dueDate}</p>
                    <Button onClick={onClick} variant="secondary" className={"bg-blue-500"}>Ouvrir</Button>
                </CardFooter>
            </Card>

            <Dialog open={editOpen} onOpenChange={setEditOpen}>
                <DialogContent className={" px-2 py-2 rounded-sm gap-2"}>
                    <DialogHeader className={""}>
                        <DialogTitle>Modifier le projet</DialogTitle>
                        <DialogDescription>
                            Mettez a jour les informations de votre projet
                        </DialogDescription>
                    </DialogHeader>


                    <CardContent className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FieldGroup>
                                <Field className={" gap-1.5"}>
                                    <FieldLabel className={"text-xs"}>Nom du projet <span>*</span></FieldLabel>
                                    <Input id="" type="text" placeholder="Ex.Refonte du site web, Application mobile..." className={"rounded-sm"} {...register("name")} />
                                </Field>
                                <Field className={"gap-1.5"}>
                                    <FieldLabel className={"text-xs"}>Description</FieldLabel>
                                    <Textarea placeholder="Décrivez brièvement l'objectif de ce projet, enjeux ou toute autre information utiles" className={"rounded-xl"} {...register("description")}></Textarea>
                                </Field>
                                <div className=" grid grid-cols-2 gap-6">
                                    <Field className={" gap-1.5"}>
                                        <FieldLabel className={"text-xs"}>Date de début</FieldLabel>
                                        <Input id="" type="date" placeholder="Selectionnez une date" className={"rounded-sm"} />
                                    </Field>
                                    <Field className={" gap-1.5"}>
                                        <FieldLabel className={"text-xs"}>Date de fins <span>(optionnel)</span></FieldLabel>
                                        <Input id="" type="date" placeholder="Selectionnez une date" className={"rounded-sm"} />
                                    </Field>
                                    <Field className={"gap-1.5"}>
                                        <FieldLabel className={"text-xs"}>Status initiale</FieldLabel>

                                        <Select>
                                            <SelectTrigger className={"rounded-sm"}>
                                                <SelectValue placeholder="" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem>A faire</SelectItem>
                                                    <SelectItem></SelectItem>
                                                    <SelectItem></SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </Field>
                                    <Controller
                                        name="status"
                                        control={control}
                                        render={({ field }) => (
                                            <Field className={"gap-1.5"}>
                                                <FieldLabel className={"text-xs"}>Status</FieldLabel>
                                                <Select
                                                    value={field.value}
                                                    onValueChange={field.onChange}

                                                >
                                                    <SelectTrigger className={"rounded-sm"}>
                                                        <SelectValue placeholder="" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectItem value="planning">planning</SelectItem>
                                                            <SelectItem value="active">active</SelectItem>
                                                            <SelectItem value="completed">completed</SelectItem>
                                                            <SelectItem value="archived">archived</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </Field>
                                        )}
                                    />

                                </div>
                                <Field className={" gap-1.5"}>
                                    <FieldLabel className={"text-xs"}>Membre de l'équipe</FieldLabel>
                                    <Select>
                                        <SelectTrigger className={"rounded-sm"}>
                                            <SelectValue placeholder="" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem>A faire</SelectItem>
                                                <SelectItem></SelectItem>
                                                <SelectItem></SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </Field>
                                <div className={"flex  justify-end gap-3"}>
                                    <Button type="reset" variant="outline" className={"w-fit rounded-sm"}>
                                        Annuler
                                    </Button>
                                    <Button type="submit" className={"bg-blue-700 rounded-sm hover:bg-blue-800 transition-colors"}>Créer le projet </Button>
                                </div>
                            </FieldGroup>

                        </form>
                    </CardContent>
                </DialogContent>
            </Dialog>

            <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Etes-vous vraiment sûr de vouloir supprimer?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Notez que cette action est irréversible car supprimer ce projet revient a supprimer tout ce qui  a rapport avec lui : tâches Commentaires et membres etc...
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel render={<Button variant="outline " />}>Annuler</AlertDialogCancel>
                        <AlertDialogAction variant="destructive" onClick={() => handleDelete(projectToDelete)}>Continuer</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}