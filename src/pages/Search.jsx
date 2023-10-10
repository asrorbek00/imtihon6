import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom';
import { img_300, unavailable } from '../components/config';


const Search = () => {
    const [search , setSearch] = useState('')
    const url = `https://api.themoviedb.org/3/search/movie?api_key=3d820eab8fd533d2fd7e1514e86292ea&query=${search}`;

        const { data: movies, isPending, error } = useFetch(url);
    const handleSearch =(e)=>{
        e.preventDefault()
        

    }

  return (<>
    <div className=' flex-col lg:ml-96 md:ml-60 sm:ml-36'>
       <form onSubmit={handleSearch}>
        <input
        onChange={(e) => setSearch(e.target.value)}
          type="text"
          value={search}
          placeholder="Type here"
          className=" mb-5 input input-bordered input-accent w-full max-w-xs"
        />
        <button type="submit" className="btn btn-accent ml-3">Search</button>
      </form>
    </div>
    { movies && movies.length <= 0
     && <div className='text-center py-40'>
        <h1 className=' text-3xl'>No Movies Search for Movies:)</h1>
    </div>}
    <ul className="grid lg:grid-cols-3 gap-x-20 gap-y-16 md:grid-cols-2 sm:grid-cols-1  ">
      {movies &&
        movies.map((Val) => {
          const {
            name,
            title,
            poster_path,
            first_air_date,
            release_date,
            media_type,
            id,
          } = Val;
          return (
              <li key={id} >
              <Link to={`s/${title}`} >
                <div className="card  w-fill bg-base-100 shadow-xl hover:shadow-2xl hover:bg-stone-700">
                <figure className="px-10 pt-10">
                    <img
                      src={
                      poster_path ? `${img_300}/${poster_path}` : unavailable
                    }
                     
                      className="rounded-xl"
                      alt={title || name}
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{title || name}</h2>
                    <p className="font-bold"><span className=" font-normal">Category:</span>{media_type === "tv" ? "TV Series" : "Movie"}</p>
                    <p className="font-bold"> <span className="font-normal">Released Date:</span>{first_air_date || release_date}</p>
                    <div className="card-actions ">
                    </div>
                  </div>
                </div>
                </Link>
              </li>
              
          );
        })}
    
   </ul> 
    </>
  )
}

export default Search