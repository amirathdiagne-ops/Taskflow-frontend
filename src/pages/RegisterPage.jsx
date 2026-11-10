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
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useAuth } from "../context/AuthContext"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { z } from "zod/v4"
import { zodResolver } from "@hookform/resolvers/zod"
function RegisterPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [erreur, setErreur] = useState(null)
    const [loadingLogin, setLoadingLogin] = useState(false)
    const { registerUser } = useAuth()
    const schema = z.object({
        name: z.string().min(3, "Entrez votre nom correct"),
        email: z.string().email("Email invalide"),
        password: z.string().min(8, "minimum 8 caractères")
    })
    const {
        register,
        handleSubmit,
        formState: { 
            errors,
            isSubmitting
        },

    } = useForm({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const onSubmit = async (data) => {
        await registerUser(data)
        console.log(data, "inscrit avec success")
    }

    return (
        <div>
            <Card className="w-80 mx-auto my-20 gap-2 bg-green-500">
                <CardHeader>
                    <CardTitle className="font-extrabold">Don't have an account?</CardTitle>
                    <CardDescription>Create your account to get started</CardDescription>
                    <CardAction></CardAction>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel>Name</FieldLabel>
                                <Input type="text" required {...register("name")}></Input>
                                <FieldError>{errors.name?.message} </FieldError>
                            </Field>
                            <Field>
                                <FieldLabel>Email</FieldLabel>
                                <Input type="email" {...register("email")} required></Input>
                                <FieldError>{errors.title?.message}</FieldError>
                            </Field>
                           
                             <Field>
                                <FieldLabel>Password</FieldLabel>
                                <Input type="password" {...register("password")} required ></Input>
                                <FieldError>{errors.password?.message}</FieldError>
                            </Field>
                            <Field>
                                <FieldLabel>Confirm password</FieldLabel>
                                <Input type="password"></Input>
                                <FieldError></FieldError>
                            </Field>
                           
                            <Button className="w-full" type="submit" disabled={isSubmitting}>
                                {isSubmitting? "Connexion...": "Sign-up"}
                            </Button>
                        </FieldGroup>
                    </form>
                </CardContent>
                <CardFooter className="">
                    <Button className="w-full" variant="outline">Login with google</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default RegisterPage