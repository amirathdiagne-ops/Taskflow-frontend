import API from "../services/api"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
function CommentForm({ taskToComment, editComment, comments, setComments, setEditComment }) {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset
    } = useForm()
    const onSubmit = async (data) => {
        if (taskToComment) {
            try {
                await API.post(`/tasks/${taskToComment._id}/comments`, data)
                console.log("commentaire ajouté a la tache")
                navigate(`/tasks/${taskToComment._id}/comments`)
            } catch (error) {
                console.log(error.message)
            }
        }
        if(editComment){
            try {
                const response = await API.patch(`/comments/${editComment._id}`, data)
                const commentModified = response.data.comment
                const actualComments = comments.map(comment => comment._id === editComment._id ? commentModified : comment)
                setComments(actualComments)
            } catch (error) {
                console.log(error.message)
            }finally {
                setEditComment(null)
            }
        }
    }
useEffect(() => {
    const handleCommentEdit = () => {
        try {
            console.log("le commentaire a changé d'etat")
            reset(editComment)
        } catch (error) {
            console.log(error.message)
        }
    }
    handleCommentEdit()
},[editComment, reset])
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea {...register('content')} />
                {taskToComment ? <button type="submit">Ajouter</button> :
                    <button type="submit">Enrégistrer la modification</button>}
            </form>
        </div>
    )
}
export default CommentForm