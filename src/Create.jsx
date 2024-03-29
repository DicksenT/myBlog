import { useState } from "react"
import { useNavigate } from 'react-router-dom'
function Create(){
    const history = useNavigate()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit= (e) =>{
        e.preventDefault()
        const body = {title, content, author}
        fetch('http://localhost:8000/blogs',{
            method : 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        setTitle('')
        setContent('')
        setAuthor('')
        history('/')
    }

    return(
        <form action="" className="createForm"
        onSubmit={handleSubmit}>
            <label htmlFor="Title">Title</label>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label htmlFor="">Content</label>
            <input type="text" required value={content} onChange={(e) => setContent(e.target.value)}/>
            <label htmlFor="">Author</label>
            <input type="text" required value={author} onChange={(e) => setAuthor(e.target.value)}/>
            <button className="post" type="submit">Post</button>
        </form>
    )
}
export default Create