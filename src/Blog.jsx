import { useParams } from "react-router-dom"
import useFetch from "./useFetch"
import { useEffect } from "react"

function Blog(){
    const {id} = useParams()
    const {fetchedData} = useFetch('http://localhost:8000/blogs/'+id)
    useEffect(()=>{
        console.log(fetchedData)
    },[fetchedData])
    return(
        <div className="blog">
            {fetchedData &&
            <div className="details">
                <h3 className="title">{fetchedData.title}</h3>
                <p className="author">By {fetchedData.author}</p>
            </div>
            }
        </div>
    )

}
export default Blog