import React from 'react'
import { useFetch } from '../hooks/useFetch'

const Error = () => {
    const {data:movies , isPending , error} = useFetch(`https://api.themoviedb.org/3/discover/movie/?api_key=3d820eab8fd533d2fd7e1514e86292ea&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=$`)
  return (<>
    
    </>
  )
}

export default Error