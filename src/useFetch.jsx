import { useEffect, useState } from "react"

function useFetch(url){
    const [fetchedData, setFetchedData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() =>{
        setTimeout(() => {
            async function getData(){
                try{
                    const response = await fetch(url)
                    if(!response.ok){
                        console.log(response.status)
                        return
                    }
                    const data = await response.json()
                    setFetchedData(data)
                    setIsLoading(false)
                }
                catch(error){
                    console.error(error)
                }
            }
            getData()
        }, 1000);

    },[url])
    return {fetchedData, isLoading}
}

export default useFetch