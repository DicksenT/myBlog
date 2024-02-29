import { Link } from "react-router-dom"

function Header(){
    return(
        <header>
            <p>myBlog</p>
            <ul className="linkList">
                <Link to='/'>
                <li className="link">Home</li>
                </Link>
                <Link to='/create'>
                <li className="link">Post</li>
                </Link>
            </ul>
        </header>
    )
}
export default Header