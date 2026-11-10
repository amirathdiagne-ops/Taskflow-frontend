import Stats from "./Contents/Stats"
import Content from "./Contents/Contents"
import Header from "./Contents/Header"
export default function Main() {
    return(
        <div className="min-h-0 w-full  grid grid-rows-[auto_1fr] bg-slate-600 text-sm">
             <header className="">
                
                    <Header/>
                <div className="">
                    <Stats/>
                </div>
             </header>
            <main className="min-h-0 px-3 pt-2">
                <Content />
            </main>
           
        </div>
    )
}