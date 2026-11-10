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
import { useNavigate } from "react-router-dom"
function LoginPage() {
    const navigate = useNavigate()
    const [erreur, setErreur] = useState(null)
    const [loadingLogin, setLoadingLogin] = useState(false)
    const { login } = useAuth()
    const schema = z.object({
        email: z.string().email("Email invalide"),
        password: z.string().min(6, "minimum 6 caractères")
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
        await login(data)
        navigate('/dashboard')
        console.log(data, "connecté avec success")
    }

    return (
        <div>
            <Card className="w-80 mx-auto my-20 gap-4 bg-blue-400">
                <CardHeader>
                    <CardTitle className="font-extrabold">Login to your account</CardTitle>
                    <CardDescription>Enter your email to login to your account</CardDescription>
                    <CardAction></CardAction>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel>Email</FieldLabel>
                                <Input type="email" {...register("email")} required></Input>
                                <FieldError>{errors.title?.message}</FieldError>
                            </Field>
                            <Field>
                                <FieldLabel>Password</FieldLabel>
                                <Input
                                    type="password"
                                    {...register("password")}
                                    required

                                >
                                </Input>
                                <FieldError>{errors.password?.message}</FieldError>
                            </Field>
                            <Button className="w-full" type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Connexion..." : "Login"}
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

export default LoginPage