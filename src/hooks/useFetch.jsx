import React, { useEffect, useState } from 'react'

 export function useFetch(url) {
    const[data, setData] = useState(null)
    const [isPending , setIsPending] = useState(false)
    const [error , setError] = useState(false)

    useEffect(() =>{

        const getData = async () =>{

            try {
                const req =  await fetch(url)
                if(!req.ok){
                    throw new Error(req.statusText)
                }
            const data = await req.json()
            setData(data.results)
            setError(null)
            setIsPending(false)
            } catch (error) {
                console.log(error.message);
                setIsPending(false)
                setError(error.message)
                
            }
        }
        getData()
    },[url])
    return {data , isPending , error}
}

