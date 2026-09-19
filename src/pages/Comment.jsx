import { useEffect, useState } from "react"
import API from "../services/api"
import { useParams } from "react-router-dom"
import CommentForm from "./commentForm"
function Comment() {
    const [comments, setComments] = useState([])
    const [loadingComments, setLoadingComments] = useState(true)
    const [editComment, setEditComment] = useState(null)
    const { taskId } = useParams()
    useEffect(() => {
        const loadComments = async () => {
            try {
                const response = await API.get(`/tasks/${taskId}/comments`)
                console.log(response.data.comments)
                setComments(response.data.comments)
            } catch (error) {
                console.log(error.message)
            } finally {
                setLoadingComments(false)
            }
        }
        loadComments()
    }, [])
    const handleCommentClick = (comment) => {
        setEditComment(comment)
        console.log("comment recupéré")
    }
    const handleDelete = async(comment) => {
        try {
            await API.delete(`/comments/${comment._id}`)
            console.log('reussite de la suppression')
            const actualComments = comments.filter(c => c._id !== comment._id)
            setComments(actualComments)
            console.log(actualComments)
            
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div>
            <h4>Bienvenu sur la page réservée aux commentaires sur une tache donnée</h4>
            {loadingComments && <p>Chargement des commentaires en cours...</p>}
            {comments.length === 0 ? <p>La liste de commentaire  est vide veuillez ajouter un commentaire a cette tâche</p> : (
                <ul>
                    {
                    comments.map(comment => (
                        <li key={comment._id}>
                            <h6>{comment.content}</h6>
                            <p>{comment.author.name}</p>
                            <button onClick={() => handleCommentClick(comment)}>Modifier</button>
                            <button onClick={() => handleDelete(comment)}>Supprimer</button>
                        </li>
                    ))
                    }
                </ul>

            )}
            <>
            {editComment && <CommentForm editComment={editComment} setComments={setComments} comments={comments} setEditComment={setEditComment}/>}
            </>
        </div>
    )
}

export default Comment