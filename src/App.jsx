import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard'
import NavBar from './pages/NavBar'
import Home from './pages/Home'
import { AuthProvider } from './context/AuthContext'
import Tasks from './pages/ProjectTasks'
import TaskForm from "./pages/TaskForm"
import Comment from "./pages/Comment"
import { TooltipProvider } from "@/components/ui/tooltip"
import MyProjects from './pages/MyProjects'
import CreateProject from './components/projects/CreateProject'
import Project from './pages/Project'
import CreateTask from './components/ui/dashboard/Tasks/CreateTask'
import ProjectTask from './pages/ProjectTask'
import MyTasks from './pages/MyTasks'
import Members from './pages/Members'
function App() {
  return (
    <TooltipProvider>

      <AuthProvider>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/project/:projectId/tasks' element={<Tasks />} />
            <Route path='/tasks/:projectId/addTask' element={<TaskForm />} />
            <Route path='/tasks/:taskId/comments' element={<Comment />} />
            <Route path='/projects' element={<MyProjects/>} />
            <Route path="/create-project" element={<CreateProject/>} />
            <Route path='/myprojects/:projectId' element={<Project/>}/>
            <Route path='/project/:projectId/task' element={<CreateTask/>}/>
            <Route path='/tasks/:taskId' element={<ProjectTask/>}/>
            <Route path='/mytasks' element={<MyTasks/>} />
            <Route path='/members' element={<Members/>} />
            <Route path='*' element={<p>Page introuvable 404</p>} />
          </Routes>
        </div> 
      </AuthProvider>
    </TooltipProvider>

  )
}
export default App