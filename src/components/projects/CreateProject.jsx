import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
} from "@/components/ui/card"
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
import LeftBar from "../ui/dashboard/LeftBar"
import TopBar from "../ui/dashboard/Topbar"
import { FolderPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Controller, useForm } from "react-hook-form"
import API from "@/services/api"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function CreateProject() {
    const navigate = useNavigate()
    const [erreur, setErreur] = useState(null)
    const { handleSubmit, register, control } = useForm({
        defaultValues:{
            status: "active"
        }
    })
    const onSubmit = async (data) => {
        try {
             await API.post("/project", data)
             alert('projet crée et ajouté a votre liste de projets')
             navigate('/projects')
        } catch (error) {
            setErreur(error.response?.data?.message || "erreur lors de la creation du projet")
        }
    }


    return (
        <section className="grid grid-cols-[auto_1fr]">
            <LeftBar />
            <div className="grid grid-rows-[50px_auto] p-1 ">
                <TopBar />
                <main className="bg-slate-400 grid grid-cols-[3.5fr_1.5fr] gap-2 ">
                    <div className=" p-3 h-full">
                        <Card className={"h-full rounded-xs px-2 py-1"}>
                            <CardHeader className={" rounded-none flex items-center"}>
                                <div className="bg-blue-600/10 p-2 rounded-sm">
                                    <FolderPlus size={25} color="blue" strokeWidth={2} />
                                </div>
                                <div>
                                    <CardTitle>Créez une nouvelle Tâche</CardTitle>
                                    <CardDescription>Donnez vie a vos idées et organisez votre travail en équipe</CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <FieldGroup>
                                        <Field className={" gap-1.5"}>
                                            <FieldLabel>Nom du projet <span>*</span></FieldLabel>
                                            <Input id=""  type="text" placeholder="Ex.Refonte du site web, Application mobile..." className={"rounded-sm"} {...register("name")}/>
                                        </Field>
                                        <Field className={"gap-1.5"}>
                                            <FieldLabel>Description</FieldLabel>
                                            <Textarea placeholder="Décrivez brièvement l'objectif de ce projet, enjeux ou toute autre information utiles" className={"rounded-xl"} {...register("description")}></Textarea>
                                        </Field>
                                        <div className=" grid grid-cols-2 gap-6">
                                            <Field className={" gap-1.5"}>
                                                <FieldLabel>Date de début</FieldLabel>
                                                <Input id="" type="date" placeholder="Selectionnez une date" className={"rounded-sm"} />
                                            </Field>
                                            <Field className={" gap-1.5"}>
                                                <FieldLabel>Date de fins <span>(optionnel)</span></FieldLabel>
                                                <Input id="" type="date" placeholder="Selectionnez une date" className={"rounded-sm"} />
                                            </Field>
                                            <Field className={"gap-1.5"}>
                                                <FieldLabel>Status initiale</FieldLabel>

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
                                            render={({field}) => (
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
                                                            <SelectItem value="planning">planning</SelectItem>
                                                            <SelectItem  value="active">active</SelectItem>
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
                                            <FieldLabel>Membre de l'équipe</FieldLabel>
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

                        </Card>

                    </div>
                    <div >
                        <p className=" p-3 h-full">Partie instruction</p>
                    </div>
                </main>
            </div>
        </section>
    )
}