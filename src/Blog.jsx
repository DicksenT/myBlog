import { useNavigate, useParams } from "react-router-dom"
import useFetch from "./useFetch"

function Blog(){
    const {id} = useParams()
    const {fetchedData} = useFetch('http://localhost:8000/blogs/'+ id)
    const navigate = useNavigate()
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/'+ id,{
            method: 'DELETE'
        }).then(() =>{
            navigate('/')
        })
    }
    return(
        <div className="blog">
            {fetchedData &&
            <>
            <div className="details">
                <h3 className="title">{fetchedData.title}</h3>
                <p className="author">By {fetchedData.author}</p>
            </div>
            <button onClick={handleDelete} className="delete">delete</button>
            </>
            }
            
        </div>
    )

}
export default Blog