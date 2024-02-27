import BlogList from "./BlogList"
import useFetch from "./useFetch"

function Homepage(){
    const {fetchedData, isLoading} = useFetch('http://localhost:8000/blogs')
    return(
        <main>
        <h1>All Blogs!</h1>
        {isLoading && <div>loading...</div>}
        {fetchedData && fetchedData.map((fdt) =>(
            <BlogList data={fdt} key={fdt.id}/>
        ))}
      </main>
    )
}

export default Homepage