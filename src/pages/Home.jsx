import NavBar from "./NavBar"
import Hero from "@/components/ui/home/Hero"
import Features from "@/components/ui/home/Features"
import HowItWorks from "@/components/ui/home/HowItWorks"
import WhyTaskFlow from "@/components/ui/home/WhyTaskFlow"
import CTA from "@/components/ui/home/CTA"
import Footer from "@/components/ui/home/Footer"
export default function Home() {
    return (
        <div>
            <NavBar/>
            <main>
                <Hero />
                <Features/>
                <HowItWorks/>
                <WhyTaskFlow/>
                <CTA/>
            </main>
            <Footer/>
        </div>
    )
}