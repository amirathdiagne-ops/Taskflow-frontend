import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import { AuthProvider } from './context/AuthContext'
import Tasks from './pages/tasks'
import TaskForm from "./pages/TaskForm"
import Comment from "./pages/Comment"
function App() {
  return (
   <AuthProvider>
     <div>
      <Routes>
        <Route path='/ff' element={<h1>Hello world</h1>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/tasks/:projectId' element={<Tasks/>}/>
        <Route path='/tasks/:projectId/addTask' element= {<TaskForm/>}/>
        <Route path='/tasks/:taskId/comments' element={<Comment/>}/>
        <Route path='*' element={<p>Page introuvable 404</p>}/>
      </Routes>
    </div>
   </AuthProvider> 
  )
}
export default App