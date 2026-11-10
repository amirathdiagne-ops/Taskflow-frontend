import Projects from "./Projects"
import Stats from "./Stats"
import Header from "./Header"
import Activity from "../Activity/Activity"
import Tasks from "../Tasks/Tasks"
import Actions from "../Actions"
export default function Content() {
    return (
        <section className="bg-slate-100 h-full">
            <div className="max-w-250 mx-auto h-full  grid grid-cols-[1.6fr_1fr] grid-rows-[minmax(0,1fr)_minmax(0,1fr)] gap-3 min-w-0 ">
                    <Projects />
                    <Activity/>
                    <Tasks />
                    <Actions />
                

            </div>
        </section>
    )
}
