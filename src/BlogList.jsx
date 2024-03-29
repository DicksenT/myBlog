import { Link } from "react-router-dom"

function BlogList(props){
    const data = props.data
    
    return(
        <Link to={`/blog/${data.id}`}>
        <div className="blog">
            <div className="details">
            <h2 className="title">{data.title}</h2>
            <p className="author">Written by {data.author}</p>
            </div>
        </div>
        </Link>
    )
}
export default BlogList