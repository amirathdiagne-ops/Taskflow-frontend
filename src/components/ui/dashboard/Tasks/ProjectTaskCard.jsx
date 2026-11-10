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
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
import { Square, Ellipsis} from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../../button";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form"
import API from "@/services/api"
export default function ProjectTaskCard({ status, title, setTasks, allTasks, comment, task, taskId, assigned, description, priority, echeance }) {
   const navigate = useNavigate()
    const [editOpen, setEditOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)
    const [taskToDelete, setTaskToDelete] = useState(null)
    const { handleSubmit, register, control, reset } = useForm({
        defaultValues: {
            status: "active"
        }
    })

    const onSubmit = async (data) => {
        try {
            const response = await API.patch(`/tasks/${taskId}`, data)
            console.log(response.data)
            const taskModified = response.data.task
            const modifiedTask = allTasks.map(t => t._id === task._id ? taskModified : t)
            console.log(modifiedTask)
            setTasks(modifiedTask) 
            setEditOpen(false)  
            navigate(`/tasks/${taskId}`)
        } catch (error) {
            console.error(error)
        }
    }
    const handleEdit = (t) => {
        setEditOpen(true)
        reset({
            title: t.title,
            description: t.description,
            status: t.status
        })
    }
    const handleDeleteClick = (t) => {
        setDeleteOpen(true)
        setTaskToDelete(t)
    }
     const handleDelete = async (task) => {
        try {
            await API.delete(`/tasks/${taskId}`)
            const tasks = allTasks.filter(t => t._id !== task._id)
            setTasks(tasks)
            alert("success")
            navigate(`/myprojects/${taskId}`)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <>

            <Card className={"rounded-none p-0"}>

                <CardContent className="flex items-center gap-3 px-3 py-3">
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                        <Square size={16} className="shrink-0" />
                        <div>
                            <p className="truncate text-xs">
                                <Link to={`/tasks/${taskId}`}>
                                    {title}
                                </Link>
                            </p>
                            <p>{description}</p>
                        </div>
                    </div>

                    <p className="w-20 shrink-0 text-xs">{status}</p>

                    <p className="w-24 shrink-0 text-xs text-center">
                        {comment}
                    </p>
                    <p>{priority}</p>
                    <p>{echeance}</p>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Ellipsis strokeWidth={1} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                <DropdownMenuItem onClick={() => handleEdit(task)}>Modifier</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleDeleteClick(task)}>Supprimer</DropdownMenuItem>
                                <DropdownMenuItem>Assigner</DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </CardContent>

            </Card>
            {
                <Dialog open={editOpen} onOpenChange={setEditOpen}>
                    <DialogContent className={" px-2 py-2 rounded-sm gap-2"}>
                        <DialogHeader className={""}>
                            <DialogTitle>Modifier la tâche</DialogTitle>
                            <DialogDescription>
                                Mettez a jour les informations de la tâche
                            </DialogDescription>
                        </DialogHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FieldGroup>
                                    <Field className={" gap-1.5"}>
                                        <FieldLabel>Titre de la tâche <span>*</span></FieldLabel>
                                        <Input id="" type="text" placeholder="Ex.Corriger le formulaire de connexion" className={"rounded-sm"} {...register("title")} />
                                    </Field>
                                    <Field className={"gap-1.5"}>
                                        <FieldLabel>Description</FieldLabel>
                                        <Textarea placeholder="Décrivez la tâche en quelques mots..." className={"rounded-xl"} {...register("description")}></Textarea>
                                    </Field>
                                    <div className="flex gap-6">
                                        <Field className={" gap-1.5"}>
                                            <FieldLabel>Date de fin<span></span></FieldLabel>
                                            <Input id="" type="date" placeholder="Selectionnez une date" className={"rounded-sm"} />
                                        </Field>
                                        <Field className={"gap-1.5"}>
                                            <FieldLabel>Priorité</FieldLabel>

                                            <Select>
                                                <SelectTrigger className={"rounded-sm"}>
                                                    <SelectValue placeholder="" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem>haute</SelectItem>
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
                                                    <FieldLabel>Status</FieldLabel>
                                                    <Select
                                                        value={field.value}
                                                        onValueChange={field.onChange}

                                                    >
                                                        <SelectTrigger className={"rounded-sm"}>
                                                            <SelectValue placeholder="" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                <SelectItem value="todo">A faire</SelectItem>
                                                                <SelectItem value="in_progress">En cours</SelectItem>
                                                                <SelectItem value="done">Terminées</SelectItem>
                                                            </SelectGroup>
                                                        </SelectContent>
                                                    </Select>
                                                </Field>
                                            )}
                                        />

                                    </div>
                                    <Field className={" gap-1.5"}>
                                        <FieldLabel>Membre de l'équipe</FieldLabel>
                                        <Select>
                                            <SelectTrigger className={"rounded-sm"}>
                                                <SelectValue placeholder="" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem>A faire</SelectItem>
                                                    <SelectItem>Terminée</SelectItem>
                                                    <SelectItem></SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </Field>
                                    <div className={"flex  justify-between gap-3"}>
                                        <Button type="reset" variant="destructive" className={"w-fit rounded-sm"}>
                                            Annuler
                                        </Button>
                                        <Button type="submit" className={"bg-blue-700 rounded-sm hover:bg-blue-800 transition-colors"}>Modifier la tâche </Button>
                                    </div>
                                </FieldGroup>
                            </form>
                        </CardContent>
                    </DialogContent>
                </Dialog>}

                
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
                                        <AlertDialogAction variant="destructive" onClick={() => handleDelete(taskToDelete)}>Continuer</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
        </>
    )

}