import { Button, buttonVariants } from '@/components/ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { Check } from "lucide-react"
function NavBar() {

    return (
        <nav className=' bg-white sticky top-0 z-50'>
            <div className='mx-auto flex w-full max-w-6xl items-center justify-between px-14 h-14'>
                <div className="flex items-center gap-2">
                    <div className="bg-blue-500 rounded-sm">
                        <Check className="text-white" />
                    </div>
                    <span><Link className='text-2xl font-extrabold tracking-tight'>TaskFlow</Link></span>
                </div>
                <div className='flex gap-6'>
                    <a className='font-serif text-lg' href='#accueil'>Accueil</a>
                    <a className='font-serif text-lg' href='#features'>Fonctionnalités</a>
                    <a className='font-serif text-lg' href='#howItWorks'>Comment ça marche ?</a>
                    <a className='font-serif text-lg' href='#whyTaskFlow'>A propos</a>
                </div>
                <div className='flex gap-4'>
                    <Link
                        to="/login"
                        className={buttonVariants({ variant: "secondary", className: "px-6 py-5" })}
                    >
                    Connexion
                    </Link>
                    <Link
                        to="/register"
                        className={buttonVariants({ className: "px-6 py-5  bg-blue-700!" })}
                    >
                    Inscription
                    </Link>

                </div>
            </div>

        </nav>
    )
}

export default NavBar
